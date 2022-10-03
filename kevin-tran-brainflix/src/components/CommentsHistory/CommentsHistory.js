import "./CommentsHistory.scss";
import BlankIcon from "../BlankIcon/BlankIcon";
import DateStamp from "../DateStamp/DateStamp";
import React from "react";

export default function CommentsHistory({ name, comment, timestamp }) {
    return (
        <>
            <div className="comhistory">
                {/* Temporary Blank Icon as per project req. */}
                <BlankIcon />
                <div className="comhistory__right-container">
                    <div className="comhistory__right-subheader">
                        <span className="comhistory__name"> {name}</span>
                        <DateStamp mainData={timestamp} />
                    </div>
                    <p className="comhistory__comment">{comment}</p>
                </div>
            </div>
        </>
    );
}
