import React from "react";
import StyledFilter from "./StyledFilter";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

export const Filter = () => {
  return (
    <StyledFilter>
      <h1>Tous les films</h1>
      <div className="param">
        <div className="container-sort">
          <h2>Trier par :</h2>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              className="selector"
              style={{ width: "150px", height: "40px" }}
              value={""}
              onChange={``}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="None">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Ordre alphabétique"}>
                Ordre alphabétique
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="container-filter">
          <h2>Filtrer par :</h2>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              className="selector"
              style={{ width: "96px", height: "40px" }}
              value={""}
              onChange={``}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={"Tous"}>Tous</MenuItem>
              <MenuItem value={"Action"}>Action</MenuItem>
              <MenuItem value={"Horreur"}>Horreur</MenuItem>
              <MenuItem value={"Amour"}>Amour</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </StyledFilter>
  );
};
