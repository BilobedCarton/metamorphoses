import React from "react"
import { useHistory } from "react-router"
import { EpisodeButtonComponent } from "./components/EpisodeButtonComponent";

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
                <EpisodeButtonComponent imgClassName="Ep-Icon Ep-1" textClassName="Ep-Title" titleText="Episode 1" src={ep1Icon} onClick={() => history.push("/episode-one")}/>
                <EpisodeButtonComponent imgClassName="Ep-Icon Ep-2" textClassName="Ep-Title" titleText="Episode 2" src={ep2Icon} onClick={() => history.push("/episode-two")}/>
                <div className="Ep-Icon Ep-3-Container">
                    <p className="Ep-3-Text">SCENES FROM <b>METAMORPHOSES</b></p>
                    <EpisodeButtonComponent imgClassName="Ep-Icon Ep-3" textClassName="Ep-Title" titleText="Episode 3" src={ep3Icon} onClick={() => history.push("/episode-three")}/>
                </div>
                <EpisodeButtonComponent imgClassName="Ep-Icon Ep-4" textClassName="Ep-Title" titleText="Episode 4" src={ep4Icon} onClick={() => history.push("/episode-four")}/>
                <div className="Ep-Icon Ep-5-Container">
                    <EpisodeButtonComponent imgClassName="Ep-Icon Ep-5" textClassName="Ep-Title" titleText="Episode 5" src={ep5Icon} onClick={() => history.push("/episode-five")}/>
                    <div className="Ep-5-Text">
                        <p style={{ marginBottom: "0vh" }}>WRITTEN AND</p>
                        <p style={{ marginBottom: "0vh", marginTop: "0vh" }}>ORIGINALLY DIRECTED BY </p>
                        <b style={{ fontSize: "3.7vh" }}>MARY ZIMMERMAN</b>
                    </div>
                </div>
                <EpisodeButtonComponent imgClassName="Ep-Icon Ep-6" textClassName="Ep-Title" titleText="Episode 6" src={ep6Icon} onClick={() => history.push("/episode-six")}/>
            </div>
            <div className="Additional-Credits">
                <p style={{ margin: "0vh"}}>DIRECTED BY <b>DESIR&Eacute; BENNETT</b></p>
                <p style={{ margin: "0vh"}}>BASED ON <b>THE MYTHS OF OVID</b></p>
                <p style={{ margin: "0vh"}}>NORTHEASTERN UNIVERSITY <b>DEPARTMENT OF THEATRE</b></p>
            </div>
        </div>
    );
}