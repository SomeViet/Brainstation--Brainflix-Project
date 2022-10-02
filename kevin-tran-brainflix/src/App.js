import "./App.scss";
import Header from "./components/Header";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import UploadVideo from "./pages/UploadVideo/UploadVideo";

class App extends React.Component {
    render() {
        const { apiKey, port } = this.props;
        return (
            <>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path="/" exact>
                            <Home apiKey={apiKey} port={port} />
                        </Route>
                        <Route path="/vidupload" component={UploadVideo} />
                        <Route path="/:videoId">
                            <Home apiKey={apiKey} port={port} />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </>
        );
    }
}

export default App;
