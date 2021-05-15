import React, { useState } from "react"

function FormElementTest() {

    interface UserInfo {
        email: string,
        id:number
    }

    const [user, setUser] = useState<UserInfo | null>(null)

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setUser({email:e.target.value, id:11})
    }

    return <input type="text" onChange={onChange} id="input-example" />
}
export default FormElementTest