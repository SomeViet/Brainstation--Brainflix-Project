import VideoPreview from "../VideoPreview/VideoPreview";
import Divider from "../Divider/Divider";
import Button from "../Button/Button";
import "./UploadForm.scss";
import { Link } from "react-router-dom";
import videoPreview from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/images/publish.svg";
import UploadFormInputs from "../UploadFormInputs/UploadFormInputs";

export default function UploadForm() {
    const uploadVideo = () => {
        alert("Video Uploaded");
    };

    const uploadCancelled = () => {
        alert("Video Upload Cancelled");
    };

    return (
        <form className="uploadform">
            <div className="uploadform__container">
                <VideoPreview videoPreview={videoPreview} />
                <UploadFormInputs />
            </div>
            <span className="uploadform__line-container">
                <Divider />
            </span>
            <div className="uploadform__upload-container">
                <Link to="/" onClick={uploadVideo}>
                    <Button buttonIcon={publishIcon} buttonText={"PUBLISH"} />
                </Link>
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
