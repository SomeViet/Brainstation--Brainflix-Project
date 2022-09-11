import React from "react";
import "./VideoPreview.scss";

export default class VideoPreview extends React.Component {
    render() {
        return (
            <>
                <h3 className="videopreview__label">VIDEO THUMBNAIL</h3>
                <img
                    src={this.props.videoPreview}
                    alt="this is an video"
                    className="videopreview__image"
                />
            </>
        );
    }
}
