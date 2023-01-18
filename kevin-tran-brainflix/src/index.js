import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Server values
// const apiKey = "81032e04-2c58-40b5-99e9-45fc20349a23";
const port = 2020;

const SITE = process.env.REACT_APP_SITE;
const APIKEY = process.env.REACT_APP_APIKEY;

root.render(
    <React.StrictMode>
        <App APIKEY={APIKEY} port={port} SITE={SITE} />
    </React.StrictMode>
);
