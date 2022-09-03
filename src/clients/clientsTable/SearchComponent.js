import React from "react";
import { Grid, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export const SearchComponent = () => {
  return (
    <Grid container spacing={2} sx={{ margin: "1rem 0rem" }}>
      <Grid item xs={5}>
        <TextField variant="outlined" label="Nombre" sx={{ width: "100%" }} />
      </Grid>
      <Grid item xs={5}>
        <TextField
          variant="outlined"
          label="Identificacion"
          sx={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={2}>
        <IconButton size="large">
          <SearchIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};
