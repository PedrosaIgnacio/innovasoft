import { Typography, Box } from "@mui/material";
import React from "react";
import { PersistentDrawerLeft } from "../shared/Drawer";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
export const PrivateErrorPage = () => {
  return (
    <PersistentDrawerLeft>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <ReportProblemIcon sx={{ fontSize: "120px", color: "#3298E1" }} />
          <Typography fontSize="80px" sx={{ color: "#3298E1" }}>
            404{" "}
          </Typography>
        </Box>
        <Typography variant="text-secondary" fontSize="5rem">
          Oops... Page not found
        </Typography>
      </Box>
    </PersistentDrawerLeft>
  );
};
