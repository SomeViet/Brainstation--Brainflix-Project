import React from "react";
import Button from "../Button/Button";
import Divider from "../Divider/Divider";
import videoPreview from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/images/publish.svg";
import "./UploadVideo.scss";
import { Link } from "react-router-dom";
import VideoPreview from "../VideoPreview/VideoPreview";

export default class UploadVideo extends React.Component {
    render() {
        return (
            <>
                <main className="uploadvideo">
                    <div className="uploadvideo__header">
                        <h1 className="uploadvideo__header-text">
                            Upload Video
                        </h1>
                        <span className="uploadvideo__line-container">
                            <Divider />
                        </span>
                    </div>
                    <form className="uploadvideo__form">
                        <div className="uploadvideo__form-container">
                            <div>
                                <VideoPreview videoPreview={videoPreview} />
                            </div>

                            <div className="uploadvideo__input-container">
                                <div>
                                    <h3 className="uploadvideo__label">
                                        TITLE YOUR VIDEO
                                    </h3>
                                    <input
                                        className="uploadvideo__title-input"
                                        type="text"
                                        placeholder="Add a title to your video"
                                    />
                                </div>
                                <div class="uploadvideo__description-container">
                                    <h3 className="uploadvideo__label">
                                        ADD A VIDEO DESCRIPTION
                                    </h3>
                                    <textarea
                                        className="uploadvideo__description-input"
                                        placeholder="Add a description to your video"
                                        name=""
                                        minLength="4"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <span className="uploadvideo__line-container">
                            <Divider />
                        </span>
                        <div className="uploadvideo__upload-container">
                            <Button
                                buttonIcon={publishIcon}
                                buttonText={"PUBLISH"}
                            />
                            <Link to="/" className="uploadvideo__cancel">
                                <h3 className="uploadvideo__cancel-text">
                                    CANCEL
                                </h3>
                            </Link>
                        </div>
                    </form>
                </main>
            </>
        );
    }
}
