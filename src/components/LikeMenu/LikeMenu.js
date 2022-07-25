import React, { useState } from "react";
import StyledLikeMenu from "./StyledLikeMenu";

import { useDispatch } from "react-redux";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import { likeMovie } from "../../redux/action/movieAction/movieAction";

export const LikeMenu = ({ id, likes, dislikes }) => {
  const dispatch = useDispatch();
  const likeGauge = Math.round((likes / (likes + dislikes)) * 100) + "%";
  const [like, setLike] = useState(null);
  const handleClick = (like) => {
    setLike(like);
    dispatch(likeMovie(id, like));
  };
  return (
    <StyledLikeMenu likeGauge={likeGauge}>
      <h1>Un Avis ?</h1>
      <div className="like-container">
        {like === "liked" ? (
          <AiFillLike />
        ) : (
          <AiOutlineLike onClick={() => handleClick("liked")} />
        )}
        {like === "disliked" ? (
          <AiFillDislike />
        ) : (
          <AiOutlineDislike onClick={() => handleClick("disliked")} />
        )}
      </div>
      <div className="gauge"></div>
    </StyledLikeMenu>
  );
};
