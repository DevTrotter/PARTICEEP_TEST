import React from "react";
import StyledFilter from "./StyledFilter";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useDispatch, useSelector } from "react-redux";
import { getFilterListMovie } from "../../redux/action/movieAction/movieAction";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Filter = () => {
  const dispatch = useDispatch();
  const { filters, genderArray } = useSelector((state) => state.movies);
  const { genderBy, sortBy } = filters;

  const handleFilterChange = (e) => {
    dispatch(getFilterListMovie(e.target.value));
  };

  const handleSortChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <StyledFilter>
      <h1>Tous les films</h1>
      <div className="param">
        <div className="container-select">
          <div className="container-sort">
            <h2>Trier par :</h2>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                className="selector"
                style={{ width: "150px", height: "40px" }}
                value={sortBy}
                onChange={(e) => handleSortChange(e)}
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
                value={genderBy}
                onChange={(e) => handleFilterChange(e)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={"Tous"}>Tous</MenuItem>
                {genderArray.map((cat) => (
                  <MenuItem value={cat}>{cat}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="container-display">
          <div className="container-filter">
            <h2>Nombre par page :</h2>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                className="selector"
                style={{ width: "96px", height: "40px" }}
                value={""}
                onChange={""}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={12}>12</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="container-arrow">
            <IoIosArrowBack />
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </StyledFilter>
  );
};
