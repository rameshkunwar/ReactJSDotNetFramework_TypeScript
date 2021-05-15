import React from "react";
import ReactLogo from './icons/logo.svg';
//const ReactLogo = require('./icons/logo.svg');
import './App.css';
import Exampleform from "./Examples/ExampleForm";
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement("div", { style: { marginBottom: 48 } },
            React.createElement(Exampleform, null)),
        React.createElement("header", { className: "App-header" },
            React.createElement(ReactLogo, { className: "App-logo" }),
            React.createElement("p", null,
                "Edit ",
                React.createElement("code", null, "src/App.js"),
                " and save to reload (won't work hot reload as it's not configured here)."),
            React.createElement("p", null, "Test"),
            React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))));
}
export default App;
//# sourceMappingURL=App.js.map