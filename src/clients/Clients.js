import React, { useState } from "react";
import { PersistentDrawerLeft } from "../shared/Drawer";
import { ClientsTable } from "./clientsTable/ClientsTable";
import { Card, Divider } from "@mui/material";
import { HeaderClients } from "./clientsTable/HeaderClients";
import { SearchComponent } from "./clientsTable/SearchComponent";

export const Clients = () => {
  const [identity, setIdentity] = useState("");
  const [name, setName] = useState("");
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
        <SearchComponent
          identity={identity}
          name={name}
          setIdentity={setIdentity}
          setName={setName}
        />
        <Divider />
        <ClientsTable identity={identity} name={name} />
      </Card>
    </PersistentDrawerLeft>
  );
};
