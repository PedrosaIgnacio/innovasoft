import React from "react";
import * as yup from "yup";
import { Link } from "@mui/material";
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
  Typography,
  Button,
} from "@mui/material";
import { useGetInterests } from "../hooks/useGetInterests";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveIcon from "@mui/icons-material/Save";

import { useNavigate } from "react-router-dom";
import { useCreateClient } from "../hooks/useCreateClient";
import { useUpdateClient } from "../hooks/useUpdateClient";

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
  identificacion: "",
  nombre: "",
  apellidos: "",
  sexo: "",
  fNacimiento: "",
  fAfiliacion: "",
  Celular: "",
  otroTelefono: "",
  interesFK: "",
  direccion: "",
  resennaPersonal: "",
};

const formSchema = yup.object().shape({
  identificacion: yup.string().required("Campo requerido"),
  nombre: yup.string().required("Campo requerido"),
  apellidos: yup.string().required("Campo requerido"),
  sexo: yup.string().required("Campo requerido"),
  fNacimiento: yup.string().required("Campo requerido"),
  fAfiliacion: yup.string().required("Campo requerido"),
  Celular: yup.string().required("Campo requerido"),
  otroTelefono: yup.string().required("Campo requerido"),
  interesFK: yup.string().required("Campo requerido"),
  direccion: yup.string().required("Campo requerido"),
  resennaPersonal: yup.string().required("Campo requerido"),
});

export const MaintenanceClientsForm = ({ client }) => {
  const navigate = useNavigate();
  const { data: interestsData } = useGetInterests();
  const { createClient } = useCreateClient();
  const { updateClient } = useUpdateClient();
  const isEditing = client !== null;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box m="1rem 0">
        <Formik
          enableReinitialize
          initialValues={client ?? initialValues}
          validationSchema={formSchema}
          onSubmit={async (values) => {
            const parsedBirthDate = dayjs(values.fNacimiento).format(
              "YYYY-MM-DD"
            );
            const parsedMembershipDate = dayjs(values.fAfiliacion).format(
              "YYYY-MM-DD"
            );

            const newClient = {
              ...values,
              fNacimiento: parsedBirthDate,
              fAfiliacion: parsedMembershipDate,
              imagen: "",
            };
            try {
              if (isEditing) {
                await updateClient({
                  ...newClient,
                  id: client.id,
                });
              } else {
                await createClient(newClient);
              }
              navigate("/clients", { replace: true });
            } catch (error) {}
          }}
        >
          {(props) => (
            <Form>
              <Box
                display="flex"
                alignItems="center"
                sx={{ padding: "1rem 0" }}
              >
                <Grid container display="flex">
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    xl={6}
                    display="flex"
                    alignItems="center"
                  >
                    <Link href="!#">
                      <Box
                        component="img"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRakKZ5OBynaqHLdHKWENtBoXs73kckpuDWXN_07M5XqU1XBE3lGhBRxdxx2QxjFrm8o&usqp=CAU"
                        height="75px"
                        width="75px"
                        mx={2}
                      />
                    </Link>
                    <Typography variant="h5" fontWeight="medium">
                      Mantenimiento de Clientes
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    xl={6}
                    display="flex"
                    justifyContent="end"
                  >
                    <Button startIcon={<SaveIcon />} type="submit">
                      {isEditing ? "Actualizar" : "Guardar"}
                    </Button>
                    <Button
                      startIcon={<ArrowBackIcon />}
                      onClick={() => navigate("/clients", { replace: true })}
                    >
                      Regresar
                    </Button>
                  </Grid>
                </Grid>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} lg={4}>
                  <Field
                    as={TextField}
                    required
                    id="identificacion"
                    name="identificacion"
                    variant="outlined"
                    label="Identificacion"
                    fullWidth
                  />
                  <ErrorMessage
                    name="identificacion"
                    component="small"
                    style={{ color: "red" }}
                  />
                </Grid>
                <Grid item xs={12} lg={4}>
                  <Field
                    as={TextField}
                    required
                    id="nombre"
                    name="nombre"
                    variant="outlined"
                    label="Nombre"
                    fullWidth
                  />
                  <ErrorMessage
                    name="nombre"
                    component="small"
                    style={{ color: "red" }}
                  />
                </Grid>
                <Grid item xs={12} lg={4}>
                  <Field
                    as={TextField}
                    required
                    id="apellidos"
                    name="apellidos"
                    variant="outlined"
                    label="Apellidos"
                    fullWidth
                  />
                  <ErrorMessage
                    name="apellidos"
                    component="small"
                    style={{ color: "red" }}
                  />
                </Grid>
                <Grid item xs={12} lg={4}>
                  <FormControl fullWidth required>
                    <InputLabel id="sexo">Genero</InputLabel>
                    <Field
                      as={Select}
                      labelId="sexo"
                      id="sexo"
                      name="sexo"
                      label="Genero"
                    >
                      <MenuItem key={-1} value="">
                        Seleccione Opcion
                      </MenuItem>
                      {gendersData?.map((gen, ind) => {
                        return (
                          <MenuItem key={ind} value={gen.value}>
                            {gen.name}
                          </MenuItem>
                        );
                      })}
                    </Field>
                    <ErrorMessage
                      name="sexo"
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
                    value={props.values.fNacimiento}
                    onChange={(e) => props.setFieldValue("fNacimiento", e)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        required
                        error={
                          props.errors.fNacimiento !== undefined &&
                          props.touched.fNacimiento
                        }
                        onBlur={() =>
                          props.setFieldTouched("fNacimiento", true)
                        }
                        id="fNacimiento"
                        name="fNacimiento"
                      />
                    )}
                  />
                  <ErrorMessage
                    name="fNacimiento"
                    component="small"
                    style={{ color: "red" }}
                  />
                </Grid>
                <Grid item xs={12} lg={4}>
                  <Field
                    as={DesktopDatePicker}
                    label="Fecha de Afiliacion"
                    inputFormat="DD/MM/YYYY"
                    value={props.values.fAfiliacion}
                    onChange={(e) => props.setFieldValue("fAfiliacion", e)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        error={
                          props.errors.fAfiliacion !== undefined &&
                          props.touched.fAfiliacion
                        }
                        onBlur={() =>
                          props.setFieldTouched("fAfiliacion", true)
                        }
                        required
                        id="fAfiliacion"
                        name="fAfiliacion"
                      />
                    )}
                  />
                  <ErrorMessage
                    name="fAfiliacion"
                    component="small"
                    style={{ color: "red" }}
                  />{" "}
                </Grid>
                <Grid item xs={12} lg={4}>
                  <Field
                    as={TextField}
                    required
                    id="Celular"
                    name="Celular"
                    variant="outlined"
                    label="Telefono Celular"
                    fullWidth
                  />
                  <ErrorMessage
                    name="Celular"
                    component="small"
                    style={{ color: "red" }}
                  />
                </Grid>
                <Grid item xs={12} lg={4}>
                  <Field
                    as={TextField}
                    required
                    id="otroTelefono"
                    name="otroTelefono"
                    variant="outlined"
                    label="Telefono Otro"
                    fullWidth
                  />
                  <ErrorMessage
                    name="otroTelefono"
                    component="small"
                    style={{ color: "red" }}
                  />
                </Grid>
                <Grid item xs={12} lg={4}>
                  <FormControl fullWidth required>
                    <InputLabel id="interesFK">Intereses</InputLabel>
                    <Field
                      as={Select}
                      labelId="interesFK"
                      id="interesFK"
                      name="interesFK"
                      label="Intereses"
                    >
                      <MenuItem key={-2} value={""}>
                        Seleccione Opcion
                      </MenuItem>
                      {interestsData?.map((int, ind) => {
                        return (
                          <MenuItem key={ind} value={int.id}>
                            {int.descripcion}
                          </MenuItem>
                        );
                      })}
                    </Field>
                    <ErrorMessage
                      name="interesFK"
                      component="small"
                      style={{ color: "red" }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    required
                    id="direccion"
                    name="direccion"
                    variant="outlined"
                    label="Direccion"
                    fullWidth
                  />
                  <ErrorMessage
                    name="direccion"
                    component="small"
                    style={{ color: "red" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    required
                    id="resennaPersonal"
                    name="resennaPersonal"
                    variant="outlined"
                    label="Reseña"
                    fullWidth
                  />
                  <ErrorMessage
                    name="resennaPersonal"
                    component="small"
                    style={{ color: "red" }}
                  />
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </LocalizationProvider>
  );
};
