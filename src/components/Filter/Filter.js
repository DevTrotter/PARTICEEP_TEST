import React from "react";
import StyledFilter from "./StyledFilter";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useDispatch, useSelector } from "react-redux";
import {
  changeElementPerPage,
  changePage,
  getFilterListMovie,
} from "../../redux/action/movieAction/movieAction";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter, genderArray, pagination, allMovies } = useSelector(
    (state) => state.movies
  );

  const handleFilterChange = (e) => {
    dispatch(getFilterListMovie(e.target.value));
  };

  const handlePaginationChange = (e) => {
    dispatch(changeElementPerPage(e.target.value, allMovies));
  };

  const handleClick = (direction) => {
    direction === "next"
      ? dispatch(changePage(pagination.page + 1))
      : dispatch(changePage(pagination.page - 1));
  };
  return (
    <StyledFilter>
      <h1>Tous les films</h1>
      <div className="param">
        <div className="container-select">
          <div className="container-filter">
            <h2>Filtrer par :</h2>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                className="selector"
                style={{ width: "96px", height: "40px" }}
                value={filter}
                onChange={(e) => handleFilterChange(e)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={"Tous"}>Tous</MenuItem>
                {genderArray.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
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
                value={pagination.elementsPerPage}
                onChange={(e) => handlePaginationChange(e)}
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
            <IoIosArrowBack onClick={() => handleClick("prev")} />
            <IoIosArrowForward onClick={() => handleClick("next")} />
          </div>
        </div>
      </div>
    </StyledFilter>
  );
};
