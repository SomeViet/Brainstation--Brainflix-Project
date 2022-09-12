import HeroVideo from "../../components/HeroVideo/HeroVideo";
import React from "react";
import Main from "../../components/Main/Main";
import VerticalLine from "../../components/VerticalLine/VerticalLine";
import NextVideo from "../../components/NextVideo/NextVideo";
import "./Home.scss";
import axios from "axios";

export default class Home extends React.Component {
    constructor() {
        super();
        this.apiKey = "81032e04-2c58-40b5-99e9-45fc20349a23";
        // all video data
        this.videoData = "";

        // for the main video
        this.mainHeroId = "";
        this.mainHeroDataDetails = "";

        // for the next video sidebar
        this.nextVideoData = "";

        // initial state
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
                // Store video summary data into object variable
                this.videoData = response.data;

                // Store video params ID into variable
                const videoIdParams = this.props.match.params.videoId;

                // If Video ID is undefined (usually on initial load), Load the first video as default
                if (!videoIdParams) {
                    // Remove the first video from the next video sidebar
                    this.nextVideoData = response.data.filter((var1) => {
                        return var1.id !== response.data[0].id;
                    });

                    // Execute function to load the main video
                    this.getVideoDetail(this.videoData[0].id);

                    // Otherwise, on mount, load the video ID specified (usually on a refresh)
                } else {
                    // Remove the video clicked/refreshed from the next video sidebar
                    this.nextVideoData = response.data.filter((var1) => {
                        return var1.id !== videoIdParams;
                    });

                    // Execute function to load the main video
                    this.getVideoDetail(videoIdParams);
                }
            })
            .catch((e) => {
                console.error(e);
            });

    // Get video detail data with passed information from first axios

    getVideoDetail = (videoIdParam) => {
        axios
            .get(
                `https://project-2-api.herokuapp.com/videos/${videoIdParam}?api_key=${this.apiKey}`
            )
            .then((response) => {
                // Store main video details data into object variable
                this.mainHeroDataDetails = response.data;

                // With the main video data and the sidebar video data, set the state
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
        //Store the current video ID and previous video ID into variables
        const videoIdParam = this.props.match.params.videoId;
        const prevId = prevProps.match.params.videoId;

        if (videoIdParam) {
            // If the video Ids are different, update the state with the new video
            if (prevId !== videoIdParam) {
                axios
                    // Get new video data from API
                    .get(
                        `https://project-2-api.herokuapp.com/videos/${this.props.match.params.videoId}?api_key=${this.apiKey}`
                    )
                    .then((response) => {
                        // Remove the main video from sidebar data
                        this.nextVideoData = this.videoData.filter((var1) => {
                            return var1.id !== videoIdParam;
                        });
                        // Update State with new video and sidebar
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

            // If the code above does not execute, if the ID is undefined(from logo), and if the 2 Ids are different, load the first video from the API
            if (videoIdParam === undefined && prevId !== videoIdParam) {
                // Store first video into Id
                const videoId = this.videoData[0].id;
                axios
                    .get(
                        `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${this.apiKey}`
                    )
                    .then((response) => {
                        // Remove the main video from sidebar data
                        this.nextVideoData = this.videoData.filter((var1) => {
                            return var1.id !== videoId;
                        });
                        // Set State
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
            // return console.log("Done - Check for infinite loop");
        }
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
