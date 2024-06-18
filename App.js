import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "h1",
    { id: "heading" },
    React.createElement("span", null, "Hello World!")
  ),
  React.createElement("p", { id: "paragraph" }, "This is a paragraph."),
]);

const heading1 = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
