import React, { useState } from "react";
import { Form, Formik } from "formik";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
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

export const MaintenanceClientsForm = () => {
  const { data, loading } = useGetInterests();
  const [age, setAge] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = React.useState(
    dayjs("2014-08-18T21:11:54")
  );
  const [fechaAfiliacion, setFechaAfiliacion] = React.useState(
    dayjs("2014-08-18T21:11:54")
  );
  console.log(loading, data);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ margin: "1rem 0" }}>
        <Formik>
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  label="Identificacion"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  label="Nombre"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  label="Apellidos"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  label="Género"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={4}>
                <DateTimePicker
                  label="Fecha de Nacimiento"
                  value={fechaNacimiento}
                  onChange={(e) => setFechaNacimiento(e.target.value)}
                  renderInput={(params) => (
                    <TextField {...params} sx={{ width: "100%" }} />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <DateTimePicker
                  label="Fecha de Afiliación"
                  value={fechaAfiliacion}
                  onChange={(e) => setFechaAfiliacion(e.target.value)}
                  renderInput={(params) => (
                    <TextField {...params} sx={{ width: "100%" }} />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  label="Teléfono Celular"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  label="Teléfono Otro"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={(e) => setAge(e.target.value)}
                  >
                    {data?.map((int, ind) => {
                      return (
                        <MenuItem key={ind} value={int.id}>
                          {int.descripcion}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Dirección"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Reseña"
                  sx={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Box>
    </LocalizationProvider>
  );
};
