import React, { useState } from "react";
import { Box, TextField, Button, Link, Typography, Grid } from "@mui/material";
import { useRegister } from "./hooks/useRegister";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { register } = useRegister();

  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100vw"
      height="100vh"
      alignItems="center"
    >
      <Grid padding="5rem" backgroundColor="#F6F8FB">
        <Typography variant="h6" textAlign="center">
          Registrarse
        </Typography>
        <Grid>
          <Grid>
            <TextField
              required
              size="small"
              variant="outlined"
              label="Nombre Usuario"
              marginTop="20px"
              width="100%"
              sx={{ marginTop: "20px", width: "100%" }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid>
            <TextField
              required
              size="small"
              variant="outlined"
              label="Direccion de Correo"
              sx={{ marginTop: "20px", width: "100%" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid>
            <TextField
              required
              size="small"
              variant="outlined"
              label="Contraseña"
              type="password"
              sx={{ marginTop: "20px", width: "100%" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid marginTop={3}>
          <Button
            variant="contained"
            width="100%"
            sx={{ bgcolor: "#2196F3", width: "100%" }}
            onClick={() => register(username, email, password)}
          >
            Registrarme
          </Button>
        </Grid>
        <Box marginTop={2} textAlign="center">
          <Typography>
            <Link
              href="/auth/login"
              underline="none"
              sx={{ color: "#2196F3", "&:hover": {} }}
            >
              Iniciar Sesion
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};
