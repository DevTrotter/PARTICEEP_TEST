import StyledListMovies from "./StyledListMovies";
import { useSelector } from "react-redux";
import { Card } from "../Card/Card";

export const ListMovies = () => {
  const { allMovies } = useSelector((state) => state.movies);

  return (
    <StyledListMovies>
      {allMovies.length !== 0 ? (
        allMovies?.map((movie) => <Card key={movie.id} {...movie} listMovie />)
      ) : (
        <h1>Pas de film à afficher 😔</h1>
      )}
    </StyledListMovies>
  );
};
