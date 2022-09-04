import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import SaveIcon from "@mui/icons-material/Save";
export const HeaderClientsForm = () => {
	const navigate = useNavigate();

	return (
		<Box display="flex" alignItems="center" gap={2} sx={{ padding: "1rem 0" }}>
			<Grid>
				<Grid item xs={12} lg={6}>
					<Typography flexGrow={1} flexWrap variant="h5" fontWeight="medium">
						Mantenimiento de Clientes
					</Typography>
				</Grid>
				<Grid xs={12} lg={6}>
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
