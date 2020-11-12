import React, { useState } from "react"

import "./Login.css";

export const Login = (props: any) => {
    const [ password, setPassword ] = useState("Unb0xP@nd0r@");

    return (
        <div className="Login-Container">
            <div className="Login-Section">
                <div><b className="Login-Text"> SCENES FROM METAMORPHOSES </b></div>
                <input className="Password-Input" type="text" value={password} placeholder="ENTER PASSWORD" onChange={(event) => setPassword(event.target.value)}/>
                <button className="Submit-Button" onClick={() => {
                    localStorage.setItem("password", password);
                    window.location.reload();
                }}>ENTER</button>
            </div>
        </div>
    )
}