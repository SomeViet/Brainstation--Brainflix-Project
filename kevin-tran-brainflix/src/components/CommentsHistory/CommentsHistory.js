import "./CommentsHistory.scss";
import Divider from "../Divider/Divider";
import BlankIcon from "../BlankIcon/BlankIcon";
import Date from "../Date/Date";

import videoDetails from "../../data/video-details.json";

let videoDataDetails = videoDetails;

console.log(videoDataDetails);

// videoDataDetails.map((result) => {
//     console.log(result);
// });

function CommentsHistory() {
    return (
        <>
            <Divider lineClass={"divider"} />
            <div className="comhistory">
                <BlankIcon />
                <div className="comhistory__right-container">
                    <div className="comhistory__right-subheader">
                        <span className="comhistory__name"> Ryan</span>
                        <Date />
                    </div>
                    <p className="comhistory__comment">
                        They BLEW the ROOF off at their last event, once
                        everyone started figuring out they were going. This is
                        still simply the greatest opening of an event I have
                        EVER witnessed.
                    </p>
                </div>
            </div>
        </>
    );
}

export default CommentsHistory;
