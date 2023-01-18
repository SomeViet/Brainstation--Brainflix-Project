import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// .ENV Attributes
const SITE = process.env.REACT_APP_SITE;
const APIKEY = process.env.REACT_APP_APIKEY;

root.render(
    <React.StrictMode>
        <App APIKEY={APIKEY} SITE={SITE} />
    </React.StrictMode>
);
