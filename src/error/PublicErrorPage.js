import { Box, Link } from "@mui/material";
import React from "react";

export const PublicErrorPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <img
        src="https://www.eyerys.com/sites/default/files/404-notfound.png"
        alt="..."
      />
      <Link href="/auth/login">Return to de Home Page</Link>
    </Box>
  );
};
