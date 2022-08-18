import MainVideo from "../MainVideo/MainVideo";
import MainVideoDetails from "../MainVideoDetails/MainVideoDetails";
import Comments from "../Comments/Comments";

import videoDetails from "../../data/video-details.json";

let videoDataDetails = videoDetails;

console.log(videoDataDetails);
// videoDataDetails.map((result) => {
//     console.log(result);
// });

function Main() {
    return (
        <>
            <MainVideo />
            <MainVideoDetails />
            <Comments />
        </>
    );
}
export default Main;
