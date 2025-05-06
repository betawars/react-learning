import React from "react";
import ReactDOM from "react-dom/client";


//Creating an element in React
const heading = React.createElement("h1", null, "Hello wwwWorld!");


// Creating an element in React using JSX
const jsxHeadding = <h1>Hellow World jsx</h1>

// But both are the same, both of them are objects and can be rendered using root.render


//React functional component
// A functional component is a JavaScript function that returns a React element. It can accept props as an argument and return a React element.
//An example of adding a js element in the js functional component
const HeadingCompopnent = () => {
    return (<div>
        {jsxHeadding}
        <h1>Hello World</h1>
    </div>)
}

 

const root = ReactDOM.createRoot(document.getElementById("root"));

//Rendering the element using ReactDOM
root.render(heading) 
root.render(jsxHeadding)

//Rendering the functional component using ReactDOM
root.render(<HeadingCompopnent />)