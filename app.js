import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    { id: "title", className: "heading" },
    "React"
);

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div",
        { id: "child" },
        "Child 1"
        
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
