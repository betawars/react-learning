const heading = React.createElement(
    "h1",
    { id: "title", className: "heading" },
    "React"
);

const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement("div",
            { id: "child" },
            [
                React.createElement("h1",
                    { id: "child" },
                    "Child 1"),
                React.createElement("h1",
                    { id: "child" },
                    "Child 1")],
            React.createElement("div",
                { id: "child" },
                "Child 2")
        )
    ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);