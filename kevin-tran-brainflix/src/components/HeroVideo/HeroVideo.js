import "./HeroVideo.scss";
import videoDetails from "../../data/video-details.json";
import React from "react";

class HeroVideo extends React.Component {
    render() {
        return (
            <>
                <main className="herovideo">
                    <div className="herovideo__container">
                        <video
                            controls
                            poster={this.props.heroImage.image}
                            className="herovideo__hero"
                        ></video>
                    </div>
                </main>
            </>
        );
    }
}

export default HeroVideo;
