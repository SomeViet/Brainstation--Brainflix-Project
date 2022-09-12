import React from "react";
import "./DateStamp.scss";

export default function DateStamp({ timestamp }) {
    let dateFormatted = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(timestamp);

    return (
        <>
            <div className="datestamp">{dateFormatted}</div>
        </>
    );
}
