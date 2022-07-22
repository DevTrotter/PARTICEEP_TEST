import { useEffect } from "react";
import { AllMovies } from "../AllMovies/AllMovies";
import { BestMovie } from "../BestMovies/BestMovies";
import StyledLanding from "./StyledLanding";
import { useDispatch } from "react-redux";
import { getMovies } from "../../redux/action/movieAction/movieAction";

export const Landing = () => {
  const dispatch = useDispatch();
  const fetchMovie = () => {
    dispatch(getMovies());
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <StyledLanding>
      <BestMovie />
      <AllMovies />
    </StyledLanding>
  );
};
