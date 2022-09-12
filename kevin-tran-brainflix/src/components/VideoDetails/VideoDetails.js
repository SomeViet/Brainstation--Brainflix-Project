import "./VideoDetails.scss";
import Author from "../Author/Author";
import DateStamp from "../DateStamp/DateStamp";
import Views from "../Views/Views";
import Likes from "../Likes/Likes";
import Divider from "../Divider/Divider";
import React from "react";

export default function VideoDetails({ mainData }) {
    return (
        <div className="videodetails">
            <h1 className="videodetails__header">{mainData.title}</h1>
            <span className="videodetails__divider-tablet">
                <Divider />
            </span>
            <div className="videodetails__subheader">
                <div className="videodetails__subheader-left">
                    <Author channel={mainData.channel} />
                    <DateStamp timestamp={mainData.timestamp} />
                </div>
                <div className="videodetails__subheader-right">
                    <Views views={mainData.views} />
                    <Likes likes={mainData.likes} />
                </div>
            </div>
            <Divider />
            <div className="videodetails__description">
                {mainData.description}
            </div>
        </div>
    );
}
