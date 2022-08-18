import "./MainVideo.scss";
import videoDetails from "../../data/video-details.json";
import MainVideoDetails from "../MainVideoDetails/MainVideoDetails";

let videoDataDetails = videoDetails;

console.log(videoDataDetails);
// videoDataDetails.map((result) => {
//     console.log(result);
// });

function MainVideo() {
    return (
        <>
            <div className="mainvideo">
                <div className="mainvideo__container">
                    <video
                        controls
                        poster={videoDataDetails[0].image}
                        className="mainvideo__hero"
                    ></video>
                </div>
            </div>
            <MainVideoDetails />
        </>
    );
}

export default MainVideo;
