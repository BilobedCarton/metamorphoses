import React, { useState } from "react"

import "./Login.css";

export const Login = (props: any) => {
    const [ password, setPassword ] = useState("");

    return (
        <div className="Login-Container">
            <div className="Login-Section">
                <p className="Login-Text">SCENES FROM <br/><b> METAMORPHOSES </b></p>
                <input className="Password-Input" type="text" value={password} placeholder="ENTER PASSWORD" onChange={(event) => setPassword(event.target.value)}/>
                <button className="Submit-Button" onClick={() => {
                    localStorage.setItem("password", password);
                    window.location.reload();
                }}>ENTER</button>
            </div>
        </div>
    )
}