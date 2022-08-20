import React from "react";
import "./Author.scss";

class Author extends React.Component {
    render() {
        console.log(this.props.mainData);
        return (
            <>
                <div className="author">
                    By {this.props.mainData[0].channel}
                </div>
            </>
        );
    }
}

export default Author;
