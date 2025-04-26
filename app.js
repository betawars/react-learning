import React from "react";
import ReactDOM from "react-dom/client";


//Creating an element in React
const heading = React.createElement("h1", null, "Hello wwwWorld!");


// Creating an element in React using JSX
const jsxHeadding = <h1>Hellow World</h1>

// But both are the same, both of them are objects and can be rendered using root.render

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading) 
root.render(jsxHeadding)