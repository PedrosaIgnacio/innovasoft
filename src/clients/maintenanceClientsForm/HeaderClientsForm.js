import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import SaveIcon from "@mui/icons-material/Save";
export const HeaderClientsForm = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" alignItems="center" gap={2} sx={{ padding: "1rem 0" }}>
      <Typography flexGrow={2} variant="h5" fontWeight="bold">
        Mantenimiento de Clientes
      </Typography>
      <Button startIcon={<SaveIcon />}>Guardar</Button>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/clients", { replace: true })}
      >
        Regresar
      </Button>
    </Box>
  );
};
