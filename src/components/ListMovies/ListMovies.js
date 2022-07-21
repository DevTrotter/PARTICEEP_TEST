import react, { useEffect } from "react";
import StyledListMovies from "./StyledListMovies";
import { useSelector, useDispatch } from "react-redux";

export const ListMovies = () => {
  const dispatch = useDispatch;
  const { allMovies } = useSelector((state) => state.movies);
  useEffect(() => {
    console.log("bonjour");
  });

  return (
    <StyledListMovies>
      <h1>bonjour</h1>
    </StyledListMovies>
  );
};
