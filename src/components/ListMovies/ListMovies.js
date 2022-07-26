import StyledListMovies from "./StyledListMovies";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Card/Card";
import { useEffect } from "react";
import { changeElementPerPage } from "../../redux/action/movieAction/movieAction";

export const ListMovies = () => {
  const { displayMovies, pagination } = useSelector((state) => state.movies);
  const { page } = pagination;
  const pageMovies = displayMovies.filter((movie) => movie.page === page);
  return (
    <StyledListMovies>
      {displayMovies.length !== 0 ? (
        pageMovies?.map((movie) => <Card key={movie.id} {...movie} listMovie />)
      ) : (
        <h1>Pas de film à afficher 😔</h1>
      )}
    </StyledListMovies>
  );
};
