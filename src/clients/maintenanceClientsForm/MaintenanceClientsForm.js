import React, { useState } from "react";
import * as yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
	Box,
	Grid,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";
import { useGetInterests } from "../hooks/useGetInterests";

const gendersData = [
	{
		name: "Masculino",
		value: "M",
	},
	{
		name: "Femenino",
		value: "F",
	},
];

const initialValues = {
	indetity: "",
	name: "",
	lastName: "",
	gender: "",
	birthDate: "",
	membershipDate: "",
	cellphone: "",
	otherPhone: "",
	interest: "",
	address: "",
	review: "",
};

const formSchema = yup.object().shape({
	identity: yup.string().required("Campo requerido"),
	name: yup.string().required("Campo requerido"),
	lastName: yup.string().required("Campo requerido"),
	gender: yup.string().required("Campo requerido"),
	birthDate: yup.string().required("Campo requerido"),
	membershipDate: yup.string().required("Campo requerido"),
	cellphone: yup.string().required("Campo requerido"),
	otherPhone: yup.string().required("Campo requerido"),
	interest: yup.string().required("Campo requerido"),
	address: yup.string().required("Campo requerido"),
	review: yup.string().required("Campo requerido"),
});

export const MaintenanceClientsForm = () => {
	const { data: interestsData } = useGetInterests();
	const [interests, setInterests] = useState("");
	const [birthDate, setBirthDate] = React.useState(dayjs("2014-08-18"));
	const [membershipDate, setMembershipDate] = React.useState(
		dayjs("2014-08-18")
	);
	const handleChangeBirthDate = (newValue) => {
		setBirthDate(newValue);
	};
	const handleChangeMembershipDate = (newValue) => {
		setMembershipDate(newValue);
	};
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<Box m="1rem 0">
				<Formik initialValues={initialValues} validationSchema={formSchema}>
					<Form>
						<Grid container spacing={2}>
							<Grid item xs={12} lg={4}>
								<Field
									as={TextField}
									required
									id="identity"
									name="identity"
									variant="outlined"
									label="Identificacion"
									fullWidth
								/>
								<ErrorMessage
									name="identity"
									component="small"
									style={{ color: "red" }}
								/>
							</Grid>
							<Grid item xs={12} lg={4}>
								<Field
									as={TextField}
									required
									id="name"
									name="name"
									variant="outlined"
									label="Nombre"
									fullWidth
								/>
								<ErrorMessage
									name="name"
									component="small"
									style={{ color: "red" }}
								/>
							</Grid>
							<Grid item xs={12} lg={4}>
								<Field
									as={TextField}
									required
									id="lastName"
									name="lastName"
									variant="outlined"
									label="Apellidos"
									fullWidth
								/>
								<ErrorMessage
									name="lastName"
									component="small"
									style={{ color: "red" }}
								/>
							</Grid>
							<Grid item xs={12} lg={4}>
								<FormControl fullWidth required>
									<InputLabel id="gender">Genero</InputLabel>
									<Field
										as={Select}
										labelId="gender"
										id="gender"
										name="gender"
										label="Genero"
									>
										{gendersData?.map((gen, ind) => {
											return (
												<MenuItem key={ind} value={gen.value}>
													{gen.name}
												</MenuItem>
											);
										})}
									</Field>
									<ErrorMessage
										name="gender"
										component="small"
										style={{ color: "red" }}
									/>
								</FormControl>
							</Grid>
							<Grid item xs={12} lg={4}>
								<Field
									as={DesktopDatePicker}
									label="Fecha de Nacimiento"
									inputFormat="DD/MM/YYYY"
									value={birthDate}
									onChange={handleChangeBirthDate}
									renderInput={(params) => (
										<TextField
											{...params}
											fullWidth
											required
											id="birthDate"
											name="birthDate"
										/>
									)}
								/>
							</Grid>
							<Grid item xs={12} lg={4}>
								<Field
									as={DesktopDatePicker}
									label="Fecha de Afiliacion"
									inputFormat="DD/MM/YYYY"
									value={membershipDate}
									onChange={handleChangeMembershipDate}
									renderInput={(params) => (
										<TextField
											{...params}
											fullWidth
											required
											id="birthDate"
											name="birthDate"
										/>
									)}
								/>
							</Grid>
							<Grid item xs={12} lg={4}>
								<Field
									as={TextField}
									required
									id="cellphone"
									name="cellphone"
									variant="outlined"
									label="Telefono Celular"
									fullWidth
								/>
								<ErrorMessage
									name="cellphone"
									component="small"
									style={{ color: "red" }}
								/>
							</Grid>
							<Grid item xs={12} lg={4}>
								<Field
									as={TextField}
									required
									id="otherPhone"
									name="otherPhone"
									variant="outlined"
									label="Telefono Otro"
									fullWidth
								/>
								<ErrorMessage
									name="otherPhone"
									component="small"
									style={{ color: "red" }}
								/>
							</Grid>
							<Grid item xs={12} lg={4}>
								<FormControl fullWidth required>
									<InputLabel id="interest">Intereses</InputLabel>
									<Field
										as={Select}
										labelId="interest"
										id="interest"
										name="interest"
										label="Intereses"
									>
										{interestsData?.map((int, ind) => {
											return (
												<MenuItem key={ind} value={int.id}>
													{int.descripcion}
												</MenuItem>
											);
										})}
									</Field>
									<ErrorMessage
										name="interest"
										component="small"
										style={{ color: "red" }}
									/>{" "}
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<Field
									as={TextField}
									required
									id="address"
									name="address"
									variant="outlined"
									label="Direccion"
									fullWidth
								/>
								<ErrorMessage
									name="address"
									component="small"
									style={{ color: "red" }}
								/>
							</Grid>
							<Grid item xs={12}>
								<Field
									as={TextField}
									required
									id="review"
									name="review"
									variant="outlined"
									label="Resena"
									fullWidth
								/>
								<ErrorMessage
									name="review"
									component="small"
									style={{ color: "red" }}
								/>
							</Grid>
						</Grid>
					</Form>
				</Formik>
			</Box>
		</LocalizationProvider>
	);
};
