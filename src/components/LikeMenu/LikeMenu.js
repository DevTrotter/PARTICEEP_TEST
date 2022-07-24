import React from "react";
import StyledLikeMenu from "./StyledLikeMenu";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/fa";

export const LikeMenu = () => {
  return (
    <StyledLikeMenu>
      <h1>Un Avis ?</h1>
      <AiOutlineLike />
      <AiOutlineDislike />
      <div>
        <div />
      </div>
    </StyledLikeMenu>
  );
};
