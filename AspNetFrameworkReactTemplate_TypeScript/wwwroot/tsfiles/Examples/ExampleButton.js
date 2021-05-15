import React, { useState } from "react";
var SelectableButtonTypes;
(function (SelectableButtonTypes) {
    SelectableButtonTypes["Primary"] = "primary";
    SelectableButtonTypes["Secondary"] = "secondary";
    SelectableButtonTypes["Danger"] = "danger";
})(SelectableButtonTypes || (SelectableButtonTypes = {}));
const ExtendedSelectableButton = ({ text, type, action }) => {
    let [selected, setSelected] = useState(false);
    return (React.createElement("button", { className: "extendedSelectableButton " + type + (selected ? " selected" : ""), onClick: _ => {
            setSelected(!selected);
            action(selected);
        } }, text));
};
/** Exporting the component AND the Enum */
export { ExtendedSelectableButton, SelectableButtonTypes };
//# sourceMappingURL=ExampleButton.js.map