import "./App.scss";
import Header from "./components/Header";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import VideoUpload from "./pages/VideoUpload/VideoUpload";

class App extends React.Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/vidupload" component={VideoUpload} />
                        <Route path={"/:videoId"} component={Home} />
                    </Switch>
                </BrowserRouter>
            </>
        );
    }
}

export default App;
