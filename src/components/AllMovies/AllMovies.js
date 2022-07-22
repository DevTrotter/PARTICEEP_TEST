import React from "react";
import { Filter } from "../Filter/Filter";
import { ListMovies } from "../ListMovies/ListMovies";
import StyledAllMovies from "./StyledAllMovies";

export const AllMovies = () => {
  return (
    <StyledAllMovies>
      <Filter />
      <ListMovies />
    </StyledAllMovies>
  );
};
