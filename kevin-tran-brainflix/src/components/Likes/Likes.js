import "./Likes.scss";
import likesIcon from "../../assets/images/likes.svg";
import React from "react";

class Likes extends React.Component {
    render() {
        return (
            <div className="likes">
                <img src={likesIcon} className="likes__icon" alt="likes icon" />
                <div className="likes__count">{this.props.mainData.likes}</div>
            </div>
        );
    }
}

export default Likes;
