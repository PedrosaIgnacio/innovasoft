import React, { useState, useMemo, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { createHttpServices } from "../../services/createHttpServices";
import toast from "react-hot-toast";

export const AuthProvider = ({ children }) => {
  const [httpServices, setHttpServices] = useState(() => createHttpServices());
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const login = async (username, password) => {
    try {
      const response = await httpServices.login(username, password);
      if (!response.data.token || !response.data.userid) {
        toast.error("Internal Server Error");
      } else {
        const services = createHttpServices(
          response.data.token,
          response.data.userid
        );
        setHttpServices(services);
        setUsername(response.data.username);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userid", response.data.userid);
        localStorage.setItem("username", response.data.username);
      }
    } catch (error) {
      toast.error("Usuario Inexistente");
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem("userid") &&
      localStorage.getItem("token") &&
      localStorage.getItem("username")
    ) {
      const services = createHttpServices(
        localStorage.getItem("token"),
        localStorage.getItem("userid")
      );
      setHttpServices(services);
      setUsername(localStorage.getItem("username"));
    }
    setIsLoading(false);
  }, []);

  const logout = async () => {
    setHttpServices(createHttpServices());
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("username");
  };

  const logged = useMemo(() => httpServices.logged, [httpServices]);

  return (
    <AuthContext.Provider
      value={{ login, logout, httpServices, logged, username }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
