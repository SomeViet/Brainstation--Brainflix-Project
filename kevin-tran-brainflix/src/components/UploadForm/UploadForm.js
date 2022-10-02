import VideoPreview from "../VideoPreview/VideoPreview";
import Divider from "../Divider/Divider";
import Button from "../Button/Button";
import "./UploadForm.scss";
import { Link } from "react-router-dom";
import videoPreview from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/images/publish.svg";
import UploadFormInputs from "../UploadFormInputs/UploadFormInputs";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function UploadForm() {
    const uploadCancelled = () => {
        alert("Video Upload Cancelled");
    };

    const uploadFormSubmit = (event) => {
        event.preventDefault();

        // Real Data from input
        const videoTitle = event.target.videoTitle.value;
        const videoDescription = event.target.videoDescription.value;
        // Set-up placeholder data, as per instructions
        const videoImage =
            "http://localhost:6969/images/Upload-video-preview.jpg";
        const videoId = uuidv4();
        const videoChannel = "A Ghost";
        const videoTimestamp = Date.now();
        const videoDuration = "1:01";
        const video = "https://project-2-api.herokuapp.com/stream";

        axios
            .post(
                "http://localhost:6969/videos?api_key=81032e04-2c58-40b5-99e9-45fc20349a23",
                {
                    title: videoTitle,
                    channel: videoChannel,
                    image: videoImage,
                    description: videoDescription,
                    views: "0",
                    likes: "0",
                    duration: videoDuration,
                    video: video,
                    timestamp: videoTimestamp,
                    comments: [],
                    id: videoId,
                }
            )
            .then((response) => {
                if (response) {
                    alert("Upload Successful");
                } else {
                    alert("An error has occured");
                }
            })
            .catch((e) => console.error(e));

        // Clearing input fields
        const clearTitle = document.querySelector(".uploadforminput__title");
        const clearDescription = document.querySelector(
            ".uploadforminput__description"
        );
        clearTitle.value = "";
        clearDescription.value = "";
    };

    return (
        <form className="uploadform" onSubmit={uploadFormSubmit}>
            <div className="uploadform__container">
                <VideoPreview videoPreview={videoPreview} />
                <UploadFormInputs />
            </div>
            <span className="uploadform__line-container">
                <Divider />
            </span>
            <div className="uploadform__upload-container">
                {/* <Link to="/" onClick={uploadVideo}> */}
                <Button buttonIcon={publishIcon} buttonText={"PUBLISH"} />
                {/* </Link> */}
                <Link
                    to="/"
                    className="uploadform__cancel"
                    onClick={uploadCancelled}
                >
                    <h3 className="uploadform__cancel-text">CANCEL</h3>
                </Link>
            </div>
        </form>
    );
}
