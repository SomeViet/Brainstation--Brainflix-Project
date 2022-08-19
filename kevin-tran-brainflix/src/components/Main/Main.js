import VideoDetails from "../VideoDetails/VideoDetails";
import Comments from "../Comments/Comments";

import videoDetails1 from "../../data/video-details.json";

let videoDataDetails = videoDetails1;

// videoDataDetails.map((result) => {
//     console.log(result);
// });

function Main() {
    return (
        <>
            <VideoDetails />
            <Comments />
        </>
    );
}
export default Main;
