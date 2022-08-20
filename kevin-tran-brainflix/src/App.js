import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import HeroVideo from "./components/HeroVideo/HeroVideo";
import NextVideo from "./components/NextVideo/NextVideo";
import VerticalLine from "./components/VerticalLine/VerticalLine";
import React from "react";
import videoData from "./data/video-details.json";

class App extends React.Component {
    state = { data: videoData };

    render() {
        return (
            <>
                <Header />
                <HeroVideo heroImage={this.state.data} />
                <div className="app__container">
                    <Main mainData={this.state.data} />
                    <div className="app__vertical-line">
                        <VerticalLine />
                    </div>
                    <NextVideo />
                </div>
            </>
        );
    }
}

export default App;
