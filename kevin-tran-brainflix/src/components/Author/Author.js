import React from "react";
import "./Author.scss";

class Author extends React.Component {
    render() {
        return <div className="author">By {this.props.mainData.channel}</div>;
    }
}

export default Author;
