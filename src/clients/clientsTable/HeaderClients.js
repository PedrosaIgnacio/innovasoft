import React from "react";
import { Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
export const HeaderClients = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" alignItems="center" gap={2} sx={{ padding: "1rem 0" }}>
      <Typography flexGrow={2} variant="h5" fontWeight="bold">
        Consulta de Clientes
      </Typography>
      <Button
        startIcon={<AddIcon />}
        onClick={() => navigate("/maintenanceclients", { replace: true })}
      >
        Agregar
      </Button>
      <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)}>
        Regresar
      </Button>
    </Box>
  );
};
