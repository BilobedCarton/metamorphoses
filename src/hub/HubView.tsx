import React from "react"
import { useHistory } from "react-router"

import "./hub.css";

const ep1Icon = require("../assets/hub/EP1_Solder.png");
const ep2Icon = require("../assets/hub/EP2_Solder.png");
const ep3Icon = require("../assets/hub/EP3_Solder.png");
const ep4Icon = require("../assets/hub/EP4_Solder.png");
const ep5Icon = require("../assets/hub/EP5_Solder.png");
const ep6Icon = require("../assets/hub/EP6_Solder.png");

export function HubView(props: any) {
    const history = useHistory();
    return (
        <div className="Hub-Container">
            <div className="Episode-Button-Container">
                <img className="Ep-Icon Ep-1" src={ep1Icon} alt="Episode 1" tabIndex={0} onClick={() => history.push("/episode-one")}/>
                <img className="Ep-Icon Ep-2" src={ep2Icon} alt="Episode 2" tabIndex={0} onClick={() => history.push("/episode-two")}/>
                <div className="Ep-Icon Ep-3-Container">
                    <p className="Ep-3-Text">SCENES FROM <b>METAMORPHOSES</b></p>
                    <img className="Ep-Icon Ep-3" src={ep3Icon} alt="Episode 3" tabIndex={0} onClick={() => history.push("/episode-three")}/>
                </div>
                <img className="Ep-Icon Ep-4" src={ep4Icon} alt="Episode 4" tabIndex={0} onClick={() => history.push("/episode-four")}/>
                <div className="Ep-Icon Ep-5-Container">
                    <img className="Ep-Icon Ep-5" src={ep5Icon} alt="Episode 5" tabIndex={0} onClick={() => history.push("/episode-five")}/>
                    <p className="Ep-5-Text">
                        <p style={{ marginBottom: "0vh" }}>WRITTEN AND</p>
                        <p style={{ marginBottom: "0vh", marginTop: "0vh" }}>ORIGINALLY DIRECTED BY </p>
                        <b style={{ fontSize: "2rem" }}>MARY ZIMMERMAN</b></p>
                </div>
                <img className="Ep-Icon Ep-6" src={ep6Icon} alt="Episode 6" tabIndex={0} onClick={() => history.push("/episode-six")}/>
            </div>
        </div>
    );
}