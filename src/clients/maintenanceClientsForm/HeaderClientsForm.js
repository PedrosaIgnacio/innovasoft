import React from "react";
import { Box, Typography, Button, Grid, Link } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import SaveIcon from "@mui/icons-material/Save";
export const HeaderClientsForm = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" alignItems="center" sx={{ padding: "1rem 0" }}>
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
          <Button startIcon={<SaveIcon />}>Guardar</Button>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/clients", { replace: true })}
          >
            Regresar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
