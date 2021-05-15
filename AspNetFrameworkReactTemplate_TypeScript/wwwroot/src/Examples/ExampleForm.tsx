import React, { useState } from "react"
import { ExtendedSelectableButton, SelectableButtonTypes } from "./ExampleButton";

const Exampleform = () => {
    interface UserInfo {
        email: string,
        id: number
    }

    const [user, setUser] = useState<UserInfo | null>(null)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setUser({ email: e.target.value, id: 11 })
    }

    return (
        <div style={{ margin: '2rem', border: '1px solid #eaeaea' }}>
            <label className="label">Email:</label>
            <input type="text" className="email-input" />
            <ExtendedSelectableButton type={SelectableButtonTypes.Primary} text="Click me!"
                action={(selected) => { alert(selected)} } />
        </div>
        )
}
export default Exampleform