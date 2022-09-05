import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../auth/context/AuthContext";
export const useCreateClient = () => {
  const { httpServices } = useContext(AuthContext);

  const createClient = async (newClient) => {
    try {
      await httpServices.createClient(newClient);
      toast.success("Cliente Creado");
    } catch (error) {
      toast.error("No se pudo crear el cliente");
    }
  };
  return { createClient };
};
