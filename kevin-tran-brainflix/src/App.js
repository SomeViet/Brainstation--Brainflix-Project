import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import HeroVideo from "./components/HeroVideo/HeroVideo";
import NextVideo from "./components/NextVideo/NextVideo";
import VerticalLine from "./components/VerticalLine/VerticalLine";
import React from "react";
import videoDataDetails from "./data/video-details.json";
import videoData from "./data/videos.json";

class App extends React.Component {
    constructor() {
        super();
        this.heroData = videoDataDetails;
        this.nextData = videoData;
        this.heroDataCurrent = this.heroData.find((var1) => {
            return var1.id == "c05b9a93-8682-4ab6-aff2-92ebb4bbfc14";
        });

        this.state = {
            currentHero: this.heroDataCurrent,
            dataSummary: this.nextData,
        };
    }

    // changeVideo = () => {
    //     this.setState({
    //         currentHero: this.heroData.find((var1) => {
    //             return var1.id == "c05b9a93-8682-4ab6-aff2-92ebb4bbfc14";
    //         }),
    //     });
    // };

    render() {
        // this.changeVideo();
        console.log(this.state.currentHero);
        return (
            <>
                <Header />
                <HeroVideo heroImage={this.state.currentHero} />
                <div className="app__container">
                    <Main mainData={this.state.currentHero} />
                    <div className="app__vertical-line">
                        <VerticalLine />
                    </div>
                    <NextVideo nextVideoData={this.state.dataSummary} />
                </div>
            </>
        );
    }
}

export default App;
