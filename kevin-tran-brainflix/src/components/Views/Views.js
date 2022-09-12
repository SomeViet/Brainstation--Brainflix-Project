import "./Views.scss";
import viewIcon from "../../assets/images/views.svg";
import React from "react";

export default function Views({ views }) {
    return (
        <div className="views">
            <img src={viewIcon} className="views__icon" alt="view icon" />
            <div className="views__count">{views}</div>
        </div>
    );
}
