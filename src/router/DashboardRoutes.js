import React from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateErrorPage } from "../error/PrivateErrorPage";
import { Home } from "../home/Home";
import { Clients } from "../clients/Clients";
import { MaintenanceClient } from "../clients/MaintenanceClient";
export const DashboardRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="clients" element={<Clients />} />
        <Route path="maintenanceclients" element={<MaintenanceClient />} />
        <Route path="*" element={<PrivateErrorPage />} />
      </Routes>
    </div>
  );
};
