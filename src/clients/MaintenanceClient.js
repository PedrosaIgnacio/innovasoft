import { Card, Divider } from "@mui/material";
import React from "react";
import { PersistentDrawerLeft } from "../shared/Drawer";
import { HeaderClientsForm } from "./maintenanceClientsForm/HeaderClientsForm";
import { MaintenanceClientsForm } from "./maintenanceClientsForm/MaintenanceClientsForm";

export const MaintenanceClient = () => {
  return (
    <PersistentDrawerLeft>
      <Card
        display="flex"
        sx={{
          padding: "3rem",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <HeaderClientsForm />
        <Divider />
        <MaintenanceClientsForm />
      </Card>
    </PersistentDrawerLeft>
  );
};
