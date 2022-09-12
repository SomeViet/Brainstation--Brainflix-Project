import "./HeroVideo.scss";
import React from "react";

export default function HeroVideo({ heroImage }) {
    return (
        <main className="herovideo">
            <div className="herovideo__container">
                <video
                    controls
                    poster={heroImage}
                    className="herovideo__hero"
                ></video>
            </div>
        </main>
    );
}
