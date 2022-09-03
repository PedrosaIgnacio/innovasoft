import axios from "axios";

const url = "https://209.105.239.29/PruebaReactJs/Api/api/";

export const createHttpServices = (token, userid) => {
  return {
    login: async (username, password) => {
      return await axios.post(url + "Authenticate/login", {
        username,
        password,
      });
    },
    logged: token && userid,
    register: async (username, email, password) => {
      return await axios.post(url + "Authenticate/register", {
        username,
        email,
        password,
      });
    },
    getClients: async (identity, name) => {
      return await axios.post(
        url + "Cliente/Listado",
        {
          identificacion: identity,
          nombre: name,
          usuarioId: userid,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    getInterests: async () => {
      return await axios.get(url + "Intereses/Listado", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  };
};
