import VideoDetails from "../VideoDetails/VideoDetails";
import Comments from "../Comments/Comments";

import videoDetails1 from "../../data/video-details.json";
import React from "react";

let videoDataDetails = videoDetails1;

// videoDataDetails.map((result) => {
//     console.log(result);
// });

class Main extends React.Component {
    render() {
        return (
            <>
                <div className="main">
                    <VideoDetails mainData={this.props.mainData} />
                    <Comments />
                </div>
            </>
        );
    }
}
export default Main;
