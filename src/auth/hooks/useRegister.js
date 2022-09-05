import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

export const useRegister = () => {
  const { httpServices } = useContext(AuthContext);
  const register = async (username, email, password) => {
    await httpServices.register(username, email, password);
  };
  return { register };
};
