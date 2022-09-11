import React from "react";
import { Link } from "react-router-dom";
import "./NextVideoCard.scss";

class NextVideoCard extends React.Component {
    render() {
        return (
            <Link to={"/" + this.props.id}>
                <div
                    className="nextvideocard"
                    // onClick={() => this.props.changeVideo(this.props.id)
                    // }
                >
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
            </Link>
        );
    }
}

export default NextVideoCard;
