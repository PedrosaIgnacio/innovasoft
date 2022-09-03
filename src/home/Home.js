import { Typography, Box } from "@mui/material";
import React from "react";
import { PersistentDrawerLeft } from "../shared/Drawer";

export const Home = () => {
  return (
    <PersistentDrawerLeft>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h2" fontWeight="bold">
          BIENVENIDO
        </Typography>
      </Box>
    </PersistentDrawerLeft>
  );
};
