import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../auth/context/AuthContext";

export const useUpdateClient = () => {
  const { httpServices } = useContext(AuthContext);

  const updateClient = async (upClient) => {
    try {
      await httpServices.updateClient(upClient);
      toast.success("Cliente Actualizado");
    } catch (error) {
      toast.error("No se pudo actualizar el cliente");
    }
  };
  return { updateClient };
};
