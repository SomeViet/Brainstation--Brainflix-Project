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
                    <h1 className="uploadvideo__header">Upload Video</h1>
                    <form className="uploadvideo__form">
                        <div>
                            <VideoPreview videoPreview={videoPreview} />
                        </div>

                        <div>
                            <h3 className="uploadvideo__label">
                                TITLE YOUR VIDEO
                            </h3>
                            <input
                                className="uploadvideo__title-input"
                                type="text"
                                placeholder="Add a title to your video"
                            />
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
                        <span>
                            <Divider />
                        </span>
                        <div>
                            <Button
                                buttonIcon={publishIcon}
                                buttonText={"PUBLISH"}
                            />
                            <Link to="/" className="uploadvideo__cancelbox">
                                <h3 className="uploadvideo__cancel">Cancel</h3>
                            </Link>
                        </div>
                    </form>
                </main>
                ;
            </>
        );
    }
}
