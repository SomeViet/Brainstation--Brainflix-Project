import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import HeroVideo from "./components/HeroVideo/HeroVideo";
import NextVideo from "./components/NextVideo/NextVideo";
import VerticalLine from "./components/VerticalLine/VerticalLine";

function App() {
    return (
        <>
            <Header />
            <HeroVideo />
            <div className="app__container">
                <Main />
                <div class="app__vertical-line">
                    <VerticalLine />
                </div>
                <NextVideo />
            </div>
        </>
    );
}

export default App;
