import React, { useContext } from "react";
import { Box, TextField, Button, Link, Typography, Grid } from "@mui/material";
import { useRegister } from "./hooks/useRegister";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { toast } from "react-hot-toast";
import { AuthContext } from "./context/AuthContext";
import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

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
		password: yup
			.string()
			.min(8, "La contrasena debe tener mas de 8 caracteres")
			.max(20, "La contrasena debe tener menos de 20 caracteres")
			.minUppercase(1, "La contrasena debe contener al menos una mayuscula")
			.minNumbers(1, "La contrasena debe tener al menos un numero")
			.required("Contraseña requerida"),
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
									sx={{ marginTop: "20px" }}
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
									sx={{ marginTop: "20px" }}
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
									sx={{ marginTop: "20px" }}
									helperText={<ErrorMessage name="password" />}
								/>
							</Grid>
						</Grid>
						<Grid mt={3}>
							<Button
								type="submit"
								variant="contained"
								fullWidth
								sx={{ bgcolor: "#2196F3" }}
							>
								Registrarme
							</Button>
						</Grid>
						<Box mt={2} textAlign="center">
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
