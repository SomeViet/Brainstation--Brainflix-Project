import React from "react";
import "./NextVideoCard.scss";

class NextVideoCard extends React.Component {
    render() {
        console.log(this.props);
        return (
            <>
                <div className="nextvideocard">
                    <img
                        src={this.props.thumbnail}
                        alt="next video thumbnail"
                        className="nextvideocard__thumbnail"
                    />
                    <div className="nextvideocard__right-container">
                        <p className="nextvideocard__video-title">
                            {this.props.title}
                        </p>
                        <span className="nextvideocard__video-author">
                            {this.props.channel}
                        </span>
                    </div>
                </div>
            </>
        );
    }
}

export default NextVideoCard;
