import React, { useState } from "react";
function FormElementTest() {
    const [user, setUser] = useState(null);
    const onChange = (e) => {
        e.preventDefault();
        setUser({ email: e.target.value, id: 11 });
    };
    return React.createElement("input", { type: "text", onChange: onChange, id: "input-example" });
}
export default FormElementTest;
//# sourceMappingURL=TsTestComponent.js.map