import React from "react";
import Divider from "../../components/Divider/Divider";
import "./UploadVideo.scss";
import UploadForm from "../../components/UploadForm/UploadForm";

export default function UploadVideo({ apiKey, port }) {
    return (
        <>
            <Divider />
            <main className="uploadvideo">
                <div className="uploadvideo__header">
                    <h1 className="uploadvideo__header-text">Upload Video</h1>
                    <span className="uploadvideo__line-container">
                        <Divider />
                    </span>
                </div>
                <UploadForm apiKey={apiKey} port={port} />
            </main>
        </>
    );
}
