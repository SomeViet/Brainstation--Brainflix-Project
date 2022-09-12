import React from "react";
import "./VideoPreview.scss";

export default function VideoPreview(props) {
    return (
        <>
            <div>
                <h3 className="videopreview__label">VIDEO THUMBNAIL</h3>
                <img
                    src={props.videoPreview}
                    alt="this is an video"
                    className="videopreview__image"
                />
            </div>
        </>
    );
}
