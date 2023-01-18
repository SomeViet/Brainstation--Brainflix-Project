import "./App.scss";
import Header from "./components/Header";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import UploadVideo from "./pages/UploadVideo/UploadVideo";

class App extends React.Component {
    render() {
        const { APIKEY, SITE } = this.props;
        return (
            <>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path="/" exact>
                            <Home APIKEY={APIKEY} SITE={SITE} />
                        </Route>
                        <Route path="/vidupload">
                            <UploadVideo APIKEY={APIKEY} SITE={SITE} />
                        </Route>
                        <Route path="/:videoId">
                            <Home APIKEY={APIKEY} SITE={SITE} />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </>
        );
    }
}

export default App;
