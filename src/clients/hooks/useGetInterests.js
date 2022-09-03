import { useContext } from "react";
import { AuthContext } from "../../auth/context/AuthContext";
import { useAsync } from "./useAsync";

export const useGetInterests = () => {
  const { httpServices } = useContext(AuthContext);
  const { data, loading } = useAsync(
    async () => await httpServices.getInterests()
  );
  return { data: data?.data ?? [], loading };
};
