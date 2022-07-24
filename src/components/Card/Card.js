import React from "react";
import StyledCard from "./StyledCard";
import Img404 from "../../assets/images/404_movie.png";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../redux/action/movieAction/movieAction";

export const Card = ({ id, title, category, listMovie }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteMovie(id));
  };

  return (
    <StyledCard>
      <img src={Img404} alt={title} />
      <div className="container-title">
        <h6>{title}</h6>
        <span>{category}</span>
      </div>
      {listMovie && (
        <button onClick={handleClick}>
          <IoClose />
        </button>
      )}
    </StyledCard>
  );
};
