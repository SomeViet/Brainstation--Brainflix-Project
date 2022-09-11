import "./Main.scss";
import VideoDetails from "../VideoDetails/VideoDetails";
import Comments from "../Comments/Comments";
import React from "react";

class Main extends React.Component {
    render() {
        return (
            <>
                <div className="main">
                    <VideoDetails mainData={this.props.mainData} />
                    <Comments mainData={this.props.mainData} />
                </div>
            </>
        );
    }
}

export default Main;
