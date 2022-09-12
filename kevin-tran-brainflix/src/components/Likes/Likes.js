import "./Likes.scss";
import likesIcon from "../../assets/images/likes.svg";
import React from "react";

export default function Likes({ likes }) {
    return (
        <div className="likes">
            <img src={likesIcon} className="likes__icon" alt="likes icon" />
            <div className="likes__count">{likes}</div>
        </div>
    );
}
