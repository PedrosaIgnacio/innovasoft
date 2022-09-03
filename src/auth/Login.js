import React, { useContext, useState } from "react";
import {
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link,
  Grid,
} from "@mui/material";
import { AuthContext } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = () => {
    login(username, password);
    const lastpath = localStorage.getItem("lastpath") || "/";
    const lastqparam = localStorage.getItem("lastqparam") || "";
    navigate(lastpath + lastqparam, { replace: true });
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        width="100vw"
        height="100vh"
        alignItems="center"
      >
        <Grid padding="5rem" backgroundColor="#F6F8FB">
          <Typography variant="h6" fontWeight="normal" textAlign="center">
            Iniciar Sesión
          </Typography>
          <Grid>
            <Grid>
              <TextField
                required
                size="small"
                variant="outlined"
                label="Usuario"
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
                label="Contraseña"
                type="password"
                sx={{ marginTop: "20px", width: "100%" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Recuérdame"
          />
          <Grid marginTop={3}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#2196F3",
                width: "100%",
                "&:hover": { bgcolor: "#2196F0" },
              }}
              onClick={onLogin}
            >
              INICIAR SESIÓN
            </Button>
          </Grid>
          <Grid marginTop={3}>
            <Typography fontWeight="light" textAlign="center">
              <Link
                href="/auth/register"
                underline="none"
                sx={{ color: "2196F3", "&:hover": {} }}
              >
                ¿No tiene una cuenta?
                <Typography fontWeight="light">Regístrese</Typography>
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
