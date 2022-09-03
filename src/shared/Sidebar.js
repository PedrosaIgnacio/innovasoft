import React, { useContext } from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { AuthContext } from "../auth/context/AuthContext";
export const Sidebar = () => {
  const { username } = useContext(AuthContext);
  return (
    <Card sx={{ minWidth: "100%", height: "100%" }}>
      <CardContent sx={{ padding: "0", margin: "32px 0" }}>
        <CardMedia
          component="img"
          image="https://www.donquijobs.com//user_images/empty-image.png"
          alt="Paella dish"
          height={194}
          sx={{ objectFit: "contain" }}
        />
        <Typography variant="h5" fontWeight="bold" sx={{ textAlign: "center" }}>
          {username}
        </Typography>
        <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "center" }}>
          <hr />
          MENU
          <hr />
        </Typography>
      </CardContent>
    </Card>
  );
};
