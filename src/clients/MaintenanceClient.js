import { Card, Divider } from "@mui/material";
import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { PersistentDrawerLeft } from "../shared/Drawer";
import { useGetClientById } from "./hooks/useGetClientById";
import { MaintenanceClientsForm } from "./maintenanceClientsForm/MaintenanceClientsForm";

export const MaintenanceClient = () => {
  const { id } = useParams();
  const { client: oldClient } = useGetClientById(id);
  const client = useMemo(() => {
    if (oldClient === null) return null;
    return {
      ...oldClient,
      Celular: oldClient.telefonoCelular,
      interesFK: oldClient.interesesId,
      resennaPersonal: oldClient.resenaPersonal,
    };
  }, [oldClient]);
  return (
    <PersistentDrawerLeft>
      <Card
        display="flex"
        sx={{
          padding: "3rem",
          justifyContent: "center",
        }}
      >
        <Divider />
        <MaintenanceClientsForm client={client} />
      </Card>
    </PersistentDrawerLeft>
  );
};
