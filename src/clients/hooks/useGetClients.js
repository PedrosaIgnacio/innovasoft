import { useContext } from "react";
import { AuthContext } from "../../auth/context/AuthContext";
import { useAsync } from "./useAsync";

export const useGetClients = (indentity, name) => {
  const { httpServices } = useContext(AuthContext);
  const { data, loading } = useAsync(
    async () => await httpServices.getClients(indentity, name)
  );
  return { data: data?.data ?? [], loading };
};
