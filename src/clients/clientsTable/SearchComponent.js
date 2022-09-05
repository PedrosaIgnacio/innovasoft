import React from "react";
import { Grid, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Field, Form, Formik } from "formik";

export const SearchComponent = ({ setIdentity, setName }) => {
  const initialValues = {
    identity: "",
    name: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        try {
          setIdentity(values.identity);
          setName(values.name);
        } catch (error) {}
      }}
    >
      <Form>
        <Grid container spacing={2} sx={{ margin: "1rem 0rem" }}>
          <Grid item xs={5}>
            <Field
              as={TextField}
              id="name"
              name="name"
              variant="outlined"
              label="Nombre"
              fullWidth
            />
          </Grid>
          <Grid item xs={5}>
            <Field
              as={TextField}
              name="identity"
              id="identity"
              variant="outlined"
              label="Identificacion"
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <IconButton size="large" type="submit">
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};
