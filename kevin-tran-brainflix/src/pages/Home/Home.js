import HeroVideo from "../../components/HeroVideo/HeroVideo";
import React from "react";
import Main from "../../components/Main/Main";
import VerticalLine from "../../components/VerticalLine/VerticalLine";
import NextVideo from "../../components/NextVideo/NextVideo";
import "./Home.scss";
import videoDataDetails from "../../data/video-details.json";
import videoData from "../../data/videos.json";

class Home extends React.Component {
    constructor() {
        super();
        this.heroData = videoDataDetails;
        this.nextData = videoData;
        // have the initial video load from index 0
        this.heroDataCurrent = this.heroData.find((var1) => {
            return var1.id === this.heroData[0].id;
        });
        this.nextDataCurrent = this.heroData.filter((var1) => {
            return var1.id !== this.heroData[0].id;
        });
        this.state = {
            currentHero: this.heroDataCurrent,
            dataSummary: this.nextDataCurrent,
        };
    }

    changeVideo = (videoid) => {
        this.setState({
            // on-click, change herovideo based on nextvideo sidebar click
            currentHero: this.heroData.find((var1) => {
                return var1.id === videoid;
            }),
            // exclude main video from nextvideo sidebar
            dataSummary: this.nextData.filter((var1) => {
                return var1.id !== videoid;
            }),
        });
        // scroll to top to view hero-video when calling the onClick changeVideo function
        window.scrollTo(0, 0);
    };

    render() {
        return (
            <>
                <HeroVideo heroImage={this.state.currentHero} />
                <div className="app__container">
                    <Main mainData={this.state.currentHero} />
                    <div className="app__vertical-line">
                        <VerticalLine />
                    </div>
                    <NextVideo
                        nextVideoData={this.state.dataSummary}
                        changeVideo={this.changeVideo}
                    />
                </div>
            </>
        );
    }
}

export default Home;
