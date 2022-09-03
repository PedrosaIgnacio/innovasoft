import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import { PublicErrorPage } from "../error/PublicErrorPage";
export const AuthRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<PublicErrorPage />} />
      </Routes>
    </div>
  );
};
