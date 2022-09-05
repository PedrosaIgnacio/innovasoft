import { useContext } from "react";
import { useAsync } from "react-use";
import { AuthContext } from "../../auth/context/AuthContext";
export const useGetClientById = (id) => {
  const { httpServices } = useContext(AuthContext);

  const { value: client } = useAsync(async () => {
    if (id === undefined) {
      return null;
    } else {
      return await httpServices.getClientById(id);
    }
  }, [id]);
  return { client: client?.data ?? null };
};
