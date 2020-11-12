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
                <EpisodeButtonComponent imgClassName="Ep-Icon Ep-1" textClassName="Ep-Title Ep-Title-Small" titleText="EPISODE ONE" src={ep1Icon} onClick={() => history.push("/episode-one/finished=false")}/>
                <EpisodeButtonComponent imgClassName="Ep-Icon Ep-2" textClassName="Ep-Title Ep-Title-Big" titleText="COMING SOON" src={ep2Icon} onClick={() => {}}/>
                <div className="Ep-Icon Ep-3-Container">
                    <div className="Ep-3-Text">
                        <p style={{ margin: "0vh"}}>SCENES FROM</p>
                        <b>METAMORPHOSES</b>
                    </div>
                    <EpisodeButtonComponent imgClassName="Ep-Icon Ep-3" textClassName="Ep-Title Ep-Title-3" titleText="COMING SOON" src={ep3Icon} onClick={() => {}}/>
                </div>
                <EpisodeButtonComponent imgClassName="Ep-Icon Ep-4" textClassName="Ep-Title Ep-Title-Big" titleText="COMING SOON" src={ep4Icon} onClick={() => {}}/>
                <div className="Ep-Icon Ep-5-Container">
                    <EpisodeButtonComponent imgClassName="Ep-Icon Ep-5" textClassName="Ep-Title Ep-Title-5" titleText="COMING SOON" src={ep5Icon} onClick={() => {}}/>
                    <div className="Ep-5-Text">
                        <p style={{ marginBottom: "0vmin" }}>WRITTEN AND</p>
                        <p style={{ marginBottom: "0vmin", marginTop: "0vmin" }}>ORIGINALLY DIRECTED BY </p>
                        <b style={{ fontSize: "3.7vmin" }}>MARY ZIMMERMAN</b>
                    </div>
                </div>
                <EpisodeButtonComponent imgClassName="Ep-Icon Ep-6" textClassName="Ep-Title Ep-Title-6" titleText="COMING SOON" src={ep6Icon} onClick={() => {}}/>
            </div>
            <div className="Additional-Credits">
                <p style={{ margin: "0vmin"}}>DIRECTED BY <b>DESIR&Eacute; BENNETT</b></p>
                <p style={{ margin: "0vmin"}}>BASED ON <b>THE MYTHS OF OVID</b></p>
                <p style={{ margin: "0vmin"}}>NORTHEASTERN UNIVERSITY <b>DEPARTMENT OF THEATRE</b></p>
            </div>
            <div className="Program-Button-Container">
                <button className="Program-Buttons" onClick={() => history.push("/director-note")}>DIRECTOR'S NOTE</button>
                <button className="Program-Buttons" onClick={() => history.push("/mary-zimmerman")}>ABOUT THE PLAYWRIGHT</button>
                {/* <button className="Program-Buttons" onClick={() => history.push("/behind-the-scenes/home")}>BEHIND THE SCENES</button> */}
                <button className="Program-Buttons" onClick={() => history.push("/credits")}>CREDITS</button>
            </div>
        </div>
    );
}