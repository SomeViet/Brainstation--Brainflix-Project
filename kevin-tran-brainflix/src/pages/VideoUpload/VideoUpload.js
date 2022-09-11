import React from "react";
import Divider from "../../components/Divider/Divider";
import "./VideoUpload.scss";

import UploadVideo from "../../components/UploadVideo/UploadVideo";

export default class VideoUpload extends React.Component {
    render() {
        return (
            <>
                <Divider />
                <UploadVideo />
            </>
        );
    }
}
