import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../auth/context/AuthContext";

export const useGetClients = (identity, name) => {
  const { httpServices } = useContext(AuthContext);

  const [state, setState] = useState([]);

  const getClients = async () => {
    const { data } = await httpServices.getClients(identity, name);
    setState(data);
  };

  useEffect(() => {
    getClients();
  }, [identity, name]);

  return { state, refresh: getClients };
};
