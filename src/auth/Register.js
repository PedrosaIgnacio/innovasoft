import React, { useContext } from "react";
import * as yup from "yup";
import { Box, TextField, Button, Link, Typography, Grid } from "@mui/material";
import { useRegister } from "./hooks/useRegister";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { toast } from "react-hot-toast";
import { AuthContext } from "./context/AuthContext";
export const Register = () => {
	const { register } = useRegister();
	const { login } = useContext(AuthContext);
	const initialValues = {
		username: "",
		email: "",
		password: "",
	};

	const formSchema = yup.object().shape({
		username: yup.string().required("Usuario requerido"),
		email: yup
			.string()
			.email("Debe ingresar un email valido")
			.required("Email requerido"),
		password: yup.string().required("Contraseña requerida"),
	});

	return (
		<Box
			display="flex"
			justifyContent="center"
			width="100vw"
			height="100vh"
			alignItems="center"
		>
			<Formik
				initialValues={initialValues}
				validationSchema={formSchema}
				onSubmit={async (values) => {
					try {
						const response = await register(
							values.username,
							values.email,
							values.password
						);
						if (response) {
							await login(values.username, values.password);
						}
					} catch (error) {
						toast.error(error.messagge);
					}
				}}
			>
				<Form>
					<Grid padding="5rem" backgroundColor="#F6F8FB">
						<Typography variant="h6" textAlign="center">
							Registrarse
						</Typography>
						<Grid>
							<Grid>
								<Field
									as={TextField}
									required
									id="username"
									name="username"
									size="small"
									variant="outlined"
									label="Usuario"
									sx={{ marginTop: "20px", width: "100%" }}
									helperText={<ErrorMessage name="username" />}
								/>
							</Grid>
							<Grid>
								<Field
									as={TextField}
									required
									id="email"
									name="email"
									size="small"
									variant="outlined"
									label="Direccion de correo"
									sx={{ marginTop: "20px", width: "100%" }}
									helperText={<ErrorMessage name="email" />}
								/>
							</Grid>
							<Grid>
								<Field
									as={TextField}
									required
									type="password"
									id="password"
									name="password"
									size="small"
									variant="outlined"
									label="Contraseña"
									sx={{ marginTop: "20px", width: "100%" }}
									helperText={<ErrorMessage name="password" />}
								/>
							</Grid>
						</Grid>
						<Grid marginTop={3}>
							<Button
								type="submit"
								variant="contained"
								width="100%"
								sx={{ bgcolor: "#2196F3", width: "100%" }}
								// onClick={() => register(username, email, password)}
							>
								Registrarme
							</Button>
						</Grid>
						<Box marginTop={2} textAlign="center">
							<Typography>
								<Link
									href="/auth/login"
									underline="none"
									sx={{ color: "#2196F3", "&:hover": {} }}
								>
									Iniciar Sesion
								</Link>
							</Typography>
						</Box>
					</Grid>
				</Form>
			</Formik>
		</Box>
	);
};
