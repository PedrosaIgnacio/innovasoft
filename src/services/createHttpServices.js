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
      const data = {
        usuarioId: userid,
      };
      if (identity === "" && name !== "") {
        data.nombre = name;
      }
      if (name === "" && identity !== "") {
        data.identificacion = identity;
      }
      if (identity === "" && name === "") {
        data.identificacion = "";
        data.nombre = "";
      }
      return await axios.post(url + "Cliente/Listado", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    getInterests: async () => {
      return await axios.get(url + "Intereses/Listado", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    createClient: async (data) => {
      const newClient = { ...data, usuarioId: userid };
      return await axios.post(url + "Cliente/Crear", newClient, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    deleteClient: async (id) => {
      return await axios.delete(url + `Cliente/Eliminar/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    getClientById: async (id) => {
      return await axios.get(url + `Cliente/Obtener/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    updateClient: async (data) => {
      const upClient = { ...data, usuarioId: userid };
      return await axios.post(url + `Cliente/Actualizar`, upClient, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  };
};
