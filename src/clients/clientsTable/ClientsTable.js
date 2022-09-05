import React from "react";
import { useGetClients } from "../hooks/useGetClients";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteClient } from "../hooks/useDeleteClient";
import { useNavigate } from "react-router-dom";

export const ClientsTable = ({ identity, name }) => {
  const { state, refresh } = useGetClients(identity, name);
  const { deleteClient } = useDeleteClient();
  const navigate = useNavigate();
  return (
    <TableContainer sx={{ margin: "1rem 0rem" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ bgcolor: "#1975FF" }}>
            <TableCell sx={{ color: "white" }}>Identificacion</TableCell>
            <TableCell sx={{ color: "white" }}>Nombre Completo</TableCell>
            <TableCell sx={{ color: "white" }} align="right">
              Acciones
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state?.map((row, ind) => (
            <TableRow
              key={ind}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.identificacion}</TableCell>
              <TableCell>{row.nombre + " " + row.apellidos}</TableCell>
              <TableCell align="right">
                <IconButton
                  onClick={() =>
                    navigate(`/maintenanceclients/${row.id}`, { replace: true })
                  }
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  onClick={async () => {
                    await deleteClient(row.id);
                    await refresh();
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
