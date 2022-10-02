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
import { withRouter } from "react-router-dom";

function UploadForm({ apiKey, port }) {
    const uploadCancelled = () => {
        alert("Video Upload Cancelled");
    };

    const uploadFormSubmit = (event) => {
        event.preventDefault();

        // Real Data from input
        const videoTitle = event.target.videoTitle.value;
        const videoDescription = event.target.videoDescription.value;
        // Set-up placeholder data, as per instructions
        const videoImage = `http://localhost:${port}/images/Upload-video-preview.jpg`;
        const videoId = uuidv4();
        const videoChannel = "A Ghost";
        const videoTimestamp = Date.now();
        const videoDuration = "1:01";
        const video = "https://project-2-api.herokuapp.com/stream";

        axios
            .post(`http://localhost:${port}/videos?api_key=${apiKey}`, {
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
            })
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
                <Button buttonIcon={publishIcon} buttonText={"PUBLISH"} />
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

export default withRouter(UploadForm);
