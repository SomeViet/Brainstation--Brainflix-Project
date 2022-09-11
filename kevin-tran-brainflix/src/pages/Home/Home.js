import HeroVideo from "../../components/HeroVideo/HeroVideo";
import React from "react";
import Main from "../../components/Main/Main";
import VerticalLine from "../../components/VerticalLine/VerticalLine";
import NextVideo from "../../components/NextVideo/NextVideo";
import "./Home.scss";
import axios from "axios";

class Home extends React.Component {
    constructor() {
        super();
        this.apiKey = "81032e04-2c58-40b5-99e9-45fc20349a23";
        // all video data
        this.videoData = "";

        // for the main video
        this.mainHeroId = "";
        this.mainHeroDataDetails = "";

        // for the video sidebar
        this.nextVideoData = "";

        this.state = {
            currentHero: [],
            dataSummary: [],
        };
    }
    // GET video data
    getVideos = () =>
        axios
            .get(
                "https://project-2-api.herokuapp.com/videos" +
                    "?api_key=" +
                    this.apiKey
            )
            .then((response) => {
                this.videoData = response.data;
                // invoke to get video detail data
                this.getVideoDetail(this.videoData[0].id);
                this.nextVideoData = response.data.filter((var1) => {
                    return var1.id !== response.data[0].id;
                });
            })
            .catch((e) => {
                console.error(e);
            });

    // GET video detail data with passed information from first axios
    getVideoDetail = (mainHeroId) =>
        axios
            .get(
                `https://project-2-api.herokuapp.com/videos/${mainHeroId}?api_key=${this.apiKey}`
            )
            .then((response) => {
                this.mainHeroDataDetails = response.data;
                this.setState({
                    currentHero: this.mainHeroDataDetails,
                    dataSummary: this.nextVideoData,
                });
            })
            .catch((e) => {
                console.error(e);
            });

    // Lifecycle - Mount Initialization
    componentDidMount() {
        this.getVideos();
    }

    changeVideo = (videoid) => {
        axios
            .get(
                `https://project-2-api.herokuapp.com/videos/${videoid}?api_key=${this.apiKey}`
            )
            .then((response) => {
                this.mainHeroDataDetails = response.data;
                this.setState({
                    // on-click, change herovideo based on nextvideo sidebar click
                    currentHero: this.mainHeroDataDetails,

                    // exclude main video from nextvideo sidebar
                    dataSummary: this.videoData.filter((var1) => {
                        return var1.id !== videoid;
                    }),
                });
            })
            .catch((e) => {
                console.error(e);
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
