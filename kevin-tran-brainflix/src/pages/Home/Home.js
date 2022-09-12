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
    // GET video data for mounting
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
                const videoParams = this.props.match.params.videoId;
                if (!videoParams) {
                    this.getVideoDetail(this.videoData[0].id);
                    this.nextVideoData = response.data.filter((var1) => {
                        return var1.id !== response.data[0].id;
                    });
                } else {
                    this.getVideoDetail(videoParams);
                    this.nextVideoData = response.data.filter((var1) => {
                        return var1.id !== videoParams;
                    });
                }
            })
            .catch((e) => {
                console.error(e);
            });

    // GET video detail data with passed information from first axios
    getVideoDetail = (videoId) => {
        axios
            .get(
                `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${this.apiKey}`
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
    };
    // Lifecycle - Mount Initialization
    componentDidMount() {
        this.getVideos();
    }

    // Lifecycle - Updater
    componentDidUpdate(prevProps) {
        const videoIdParam = this.props.match.params.videoId;
        const prevId = prevProps.match.params.videoId;
        if (videoIdParam) {
            if (prevId !== videoIdParam) {
                axios
                    .get(
                        `https://project-2-api.herokuapp.com/videos/${this.props.match.params.videoId}?api_key=${this.apiKey}`
                    )
                    .then((response) => {
                        this.nextVideoData = this.videoData.filter((var1) => {
                            return var1.id !== videoIdParam;
                        });
                        this.setState({
                            currentHero: response.data,
                            dataSummary: this.nextVideoData,
                        });
                    })
                    .catch((e) => {
                        console.error(e);
                    });
                return true;
            }
        }
        if (videoIdParam === undefined && prevId !== videoIdParam) {
            const videoId = this.videoData[0].id;
            axios
                .get(
                    `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${this.apiKey}`
                )
                .then((response) => {
                    this.nextVideoData = this.videoData.filter((var1) => {
                        return var1.id !== videoId;
                    });
                    this.setState({
                        currentHero: response.data,
                        dataSummary: this.nextVideoData,
                    });
                })
                .catch((e) => {
                    console.error(e);
                });
            return true;
        }
        // Debugger for infinite loops - comment out during submission
        return console.log("Done - Check for infinite loop");
    }

    render() {
        return (
            <>
                <HeroVideo heroImage={this.state.currentHero.image} />
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

export default Home;
