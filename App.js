import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 id="heading">Hello World</h1>;

console.log(jsxHeading);

// ReactDOM.render(jsxHeading, document.getElementById("root"));

const HeadingComponent = () => {
  <div>
    {jsxHeading}
    <h1 id="heading">React functional component</h1>;
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
