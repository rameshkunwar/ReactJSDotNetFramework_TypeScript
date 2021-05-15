import React, { useState } from "react"

enum SelectableButtonTypes {
    Primary = "primary",
    Secondary = "secondary",
    Danger = "danger"
}

interface IButtonProps {
    text: string,
    /** The type of button, pulled from the Enum SelectableButtonTypes */
    type: SelectableButtonTypes,
    action: (selected: boolean) => void
}

const ExtendedSelectableButton = ({ text, type, action }: IButtonProps) => {
    let [selected, setSelected] = useState(false)

    return (<button className={"extendedSelectableButton " + type + (selected ? " selected" : "")} onClick={_ => {
        setSelected(!selected)
        action(selected)
    }}>{text}</button>)
}

/** Exporting the component AND the Enum */
export { ExtendedSelectableButton, SelectableButtonTypes }