import React from "react";
import { PersistentDrawerLeft } from "../shared/Drawer";
import { ClientsTable } from "./clientsTable/ClientsTable";
import { Card, Divider } from "@mui/material";
import { HeaderClients } from "./clientsTable/HeaderClients";
import { SearchComponent } from "./clientsTable/SearchComponent";

export const Clients = () => {
  return (
    <PersistentDrawerLeft>
      <Card
        display="flex"
        sx={{
          padding: "3rem",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <HeaderClients />
        <Divider />
        <SearchComponent />
        <Divider />
        <ClientsTable />
      </Card>
    </PersistentDrawerLeft>
  );
};
