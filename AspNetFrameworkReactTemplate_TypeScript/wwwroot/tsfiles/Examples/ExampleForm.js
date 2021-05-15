import React, { useState } from "react";
import { ExtendedSelectableButton, SelectableButtonTypes } from "./ExampleButton";
const Exampleform = () => {
    const [user, setUser] = useState(null);
    const onChange = (e) => {
        e.preventDefault();
        setUser({ email: e.target.value, id: 11 });
    };
    return (React.createElement("div", { style: { margin: '2rem', border: '1px solid #eaeaea' } },
        React.createElement("label", { className: "label" }, "Email:"),
        React.createElement("input", { type: "text", className: "email-input" }),
        React.createElement(ExtendedSelectableButton, { type: SelectableButtonTypes.Primary, text: "Click me!", action: (selected) => { alert(selected); } })));
};
export default Exampleform;
//# sourceMappingURL=ExampleForm.js.map