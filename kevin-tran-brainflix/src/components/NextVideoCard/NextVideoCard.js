import React from "react";
import { Link } from "react-router-dom";
import "./NextVideoCard.scss";

export default function NextVideoCard({ id, thumbnail, channel, title }) {
    return (
        <Link to={"/" + id} className="nextvideocard__link">
            <div className="nextvideocard">
                <img
                    src={thumbnail}
                    alt="next video thumbnail"
                    className="nextvideocard__thumbnail"
                />
                <div className="nextvideocard__right-container">
                    <p className="nextvideocard__video-title">{title}</p>
                    <span className="nextvideocard__video-author">
                        {channel}
                    </span>
                </div>
            </div>
        </Link>
    );
}
