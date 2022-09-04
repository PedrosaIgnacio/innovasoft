import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Formik, Form, ErrorMessage, Field } from "formik";
import {
	Box,
	TextField,
	FormControlLabel,
	Checkbox,
	Button,
	Typography,
	Link,
	Grid,
} from "@mui/material";

export const Login = () => {
	const navigate = useNavigate();
	const { login } = useContext(AuthContext);
	// const [username, setUsername] = useState("");
	// const [password, setPassword] = useState("");

	const initialValues = {
		username: "",
		password: "",
	};

	const formSchema = yup.object().shape({
		username: yup.string().required("Debe ingresar un usuario"),
		password: yup.string().required("Debe ingresar una contraseña"),
	});

	const onLogin = (username, password) => {
		login(username, password);
		const lastpath = localStorage.getItem("lastpath") || "/";
		const lastqparam = localStorage.getItem("lastqparam") || "";
		navigate(lastpath + lastqparam, { replace: true });
	};

	return (
		<>
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
					onSubmit={(values) => {
						try {
							onLogin(values.username, values.password);
						} catch (error) {}
					}}
				>
					<Form>
						<Grid padding="5rem" backgroundColor="#F6F8FB">
							<Typography variant="h6" fontWeight="normal" textAlign="center">
								Iniciar Sesión
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
										id="password"
										name="password"
										size="small"
										variant="outlined"
										label="Contraseña"
										type="password"
										sx={{ marginTop: "20px", width: "100%" }}
										helperText={<ErrorMessage name="password" />}
									/>
								</Grid>
							</Grid>
							<FormControlLabel
								control={<Checkbox defaultChecked />}
								label="Recuérdame"
							/>
							<Grid marginTop={3}>
								<Button
									type="submit"
									variant="contained"
									sx={{
										bgcolor: "#2196F3",
										width: "100%",
										"&:hover": { bgcolor: "#2196F0" },
									}}
									// onClick={onLogin}
								>
									INICIAR SESIÓN
								</Button>
							</Grid>
							<Grid marginTop={3}>
								<Typography fontWeight="light" textAlign="center">
									<Link
										href="/auth/register"
										underline="none"
										sx={{ color: "2196F3", "&:hover": {} }}
									>
										¿No tiene una cuenta?
										<Typography fontWeight="light">Regístrese</Typography>
									</Link>
								</Typography>
							</Grid>
						</Grid>
					</Form>
				</Formik>
			</Box>
		</>
	);
};
