import "./HeroVideo.scss";
import videoDetails from "../../data/video-details.json";

let videoDataDetails = videoDetails;

console.log(videoDataDetails);
// videoDataDetails.map((result) => {
//     console.log(result);
// });

function HeroVideo() {
    return (
        <>
            <main className="herovideo">
                <div className="herovideo__container">
                    <video
                        controls
                        poster={videoDataDetails[0].image}
                        className="herovideo__hero"
                    ></video>
                </div>
            </main>
        </>
    );
}

export default HeroVideo;
