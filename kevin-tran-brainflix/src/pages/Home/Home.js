import HeroVideo from "../../components/HeroVideo/HeroVideo";
import React from "react";
import Main from "../../components/Main/Main";
import NextVideo from "../../components/NextVideo/NextVideo";
import "./Home.scss";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Home extends React.Component {
    constructor() {
        super();
        this.videoData = "";
        this.mainHeroId = "";
        this.mainHeroDataDetails = "";
        this.nextVideoData = "";

        this.state = {
            currentHero: [],
            dataSummary: [],
        };
    }

    // Lifecycle - Mount Initialization
    componentDidMount() {
        const { apiKey, port } = this.props;
        this.getVideos(apiKey, port);
    }

    // GET video data for mounting
    getVideos = (apiKey, port) =>
        axios
            .get(`http://localhost:${port}/videos?api_key=${apiKey}`)
            .then((response) => {
                const portAdder = response.data;
                for (let i = 0; i < portAdder.length; i++) {
                    portAdder[i].image = portAdder[i].image.replace(
                        "%%%PORT%%%",
                        port
                    );
                }

                this.videoData = portAdder;
                const videoIdParams = this.props.match.params.videoId;

                // If Video ID is undefined (usually on initial load), Load the first video as default
                if (!videoIdParams) {
                    this.nextVideoData = response.data.filter((data) => {
                        return data.id !== response.data[0].id;
                    });
                    this.getVideoDetail(this.videoData[0].id, apiKey, port);

                    // Otherwise, on mount, load the video ID specified (usually on a refresh)
                } else {
                    this.nextVideoData = response.data.filter((data) => {
                        return data.id !== videoIdParams;
                    });
                    this.getVideoDetail(videoIdParams, apiKey, port);
                }
            })
            .catch((e) => {
                console.error(e);
            });

    // Get video detail data with passed information from first axios

    getVideoDetail = (videoIdParam, apiKey, port) => {
        axios
            .get(
                `http://localhost:${port}/videos/${videoIdParam}?api_key=${apiKey}`
            )
            // With the main video data and the sidebar video data, set the state
            .then((response) => {
                const portAdder = response.data;
                portAdder.image = portAdder.image.replace("%%%PORT%%%", port);

                this.mainHeroDataDetails = portAdder;
                this.setState({
                    currentHero: this.mainHeroDataDetails,
                    dataSummary: this.nextVideoData,
                });
            })
            .catch((e) => {
                console.error(e);
            });
    };

    // Lifecycle - Updater
    componentDidUpdate(prevProps) {
        //Store the current video ID and previous video ID into variables
        const videoIdParam = this.props.match.params.videoId;
        const prevId = prevProps.match.params.videoId;
        const { apiKey, port } = this.props;

        // If the video Ids are different, update the state with the new video
        if (prevId !== videoIdParam && videoIdParam) {
            axios
                .get(
                    `http://localhost:${port}/videos/${videoIdParam}?api_key=${apiKey}`
                )
                .then((response) => {
                    const portAdder = response.data;
                    portAdder.image = portAdder.image.replace(
                        "%%%PORT%%%",
                        port
                    );

                    this.mainHeroDataDetails = portAdder;

                    // Remove the main video from sidebar data and update State with new video and sidebar
                    this.nextVideoData = this.videoData.filter((var1) => {
                        return var1.id !== videoIdParam;
                    });

                    this.setState({
                        currentHero: this.mainHeroDataDetails,
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
            const videoId = this.videoData[0].id;
            axios
                .get(
                    `http://localhost:${port}/videos/${videoId}?api_key=${apiKey}`
                )
                .then((response) => {
                    const portAdder = response.data;
                    portAdder.image = portAdder.image.replace(
                        "%%%PORT%%%",
                        port
                    );

                    this.mainHeroDataDetails = portAdder;
                    this.nextVideoData = this.videoData.filter((var1) => {
                        return var1.id !== videoId;
                    });

                    this.setState({
                        currentHero: this.mainHeroDataDetails,
                        dataSummary: this.nextVideoData,
                    });
                })
                .catch((e) => {
                    console.error(e);
                });
            return true;
        }
        // // Debugger for infinite loops - comment out during submission
        // return console.log("Done - Check for infinite loop");
    }

    render() {
        return (
            <>
                <HeroVideo heroImage={this.state.currentHero.image} />
                <div className="app__container">
                    <Main mainData={this.state.currentHero} />
                    <div className="app__next-video">
                        <NextVideo nextVideoData={this.state.dataSummary} />
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(Home);
