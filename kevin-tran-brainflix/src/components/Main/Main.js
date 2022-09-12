import "./Main.scss";
import VideoDetails from "../VideoDetails/VideoDetails";
import Comments from "../Comments/Comments";
import React from "react";

export default function Main({ mainData }) {
    return (
        <>
            <div className="main">
                <VideoDetails mainData={mainData} />
                <Comments mainData={mainData} />
            </div>
        </>
    );
}
