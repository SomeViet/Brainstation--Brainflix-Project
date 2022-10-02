import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Server values
const apiKey = "81032e04-2c58-40b5-99e9-45fc20349a23";
const port = 2020;

root.render(
    <React.StrictMode>
        <App apiKey={apiKey} port={port} />
    </React.StrictMode>
);
