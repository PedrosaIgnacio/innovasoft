import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../auth/context/AuthContext";
export const useDeleteClient = () => {
  const { httpServices } = useContext(AuthContext);

  const deleteClient = async (id) => {
    try {
      await httpServices.deleteClient(id);
      toast.success("Cliente Eliminado");
    } catch (error) {
      toast.error("Error al eliminar cliente");
    }
  };
  return { deleteClient };
};
