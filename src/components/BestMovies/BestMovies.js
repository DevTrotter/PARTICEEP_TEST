import React from "react";
import { Slider } from "../Slider/Slider";
import StyledBestMovie from "./StyledBestMovies";

export const BestMovie = () => {
  return (
    <StyledBestMovie>
      <h1>Les 10 films les plus aimer</h1>
      <Slider />
      <div className="separator"></div>
    </StyledBestMovie>
  );
};
