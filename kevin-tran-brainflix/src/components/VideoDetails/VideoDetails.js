import "./VideoDetails.scss";
import videoDetails1 from "../../data/video-details.json";

import Author from "../Author/Author";
import Date from "../Date/Date";
import Views from "../Views/Views";
import Likes from "../Likes/Likes";
import Divider from "../Divider/Divider";

let videoDataDetails = videoDetails1;

console.log(videoDataDetails);

function VideoDetails() {
    return (
        <>
            <div className="videodetails">
                <h1 className="videodetails__header">Title of the video</h1>
                <Divider lineClass={"divider__tablet"} />
                <div className="videodetails__subheader">
                    <div className="videodetails__subheader-left">
                        <Author />
                        <Date />
                    </div>
                    <div className="videodetails__subheader-right">
                        <Views />
                        <Likes />
                    </div>
                </div>
                <Divider lineClass={"divider"} />

                <div className="videodetails__description">
                    On a gusty day in Southern Utah, a group of 25 daring
                    mountain bikers blew the doors off what is possible on two
                    wheels, unleashing some of the biggest moments the sport has
                    ever seen. While mother nature only allowed for one full run
                    before the conditions made it impossible to ride, that was
                    all that was needed for event veteran Kyle Strait, who won
                    the event for the second time -- eight years after his first
                    Red Cow Rampage title
                </div>
            </div>
        </>
    );
}

export default VideoDetails;
