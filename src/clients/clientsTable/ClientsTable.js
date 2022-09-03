import React from "react";
import { useGetClients } from "../hooks/useGetClients";
import { BeatLoader } from "react-spinners";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const override = {
  display: "block",
  margin: "0 auto",
};

export const ClientsTable = () => {
  const { data, loading } = useGetClients();

  if (loading) {
    return <BeatLoader cssOverride={override} />;
  }
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
          {data?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.indetificacion}
              </TableCell>
              <TableCell align="right">{row.nombre + row.apellidos}</TableCell>
              <TableCell align="right">
                <IconButton>
                  <EditIcon />
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
