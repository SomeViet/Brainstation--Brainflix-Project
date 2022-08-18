import "./MainVideoDetails.scss";
import videoDetails from "../../data/video-details.json";

import Author from "../Author/Author";
import Date from "../Date/Date";
import Views from "../Views/Views";
import Likes from "../Likes/Likes";
import Divider from "../Divider/Divider";

let videoDataDetails = videoDetails;

console.log(videoDataDetails);

function MainVideoDetails() {
    return (
        <>
            <div className="mainvideodetails">
                <h1 className="mainvideodetails__header">Title of the video</h1>
                <Divider />
                <div className="mainvideodetails__subheader">
                    <div className="mainvideodetails__subheader-left">
                        <Author />
                        <Date />
                    </div>
                    <div className="mainvideodetails__subheader-right">
                        <Views />
                        <Likes />
                    </div>
                </div>
                <Divider />

                <div className="mainvideodetails__main">
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

export default MainVideoDetails;
