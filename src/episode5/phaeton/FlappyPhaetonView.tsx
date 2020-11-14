import React, { useState } from "react";
import { useHistory } from "react-router";
import { BackgroundImageComponent } from "../../shared/components/BackgroundVideoComponent";
import { FlappyPhaetonGameView } from "./components/FlappyPhaetonGameView";
import "./FlappyPhaeton.css";

const background = require("../../assets/black.png");

export const FlappyPhaetonView = (props: any) => {
    const playerHighScore = parseInt(localStorage.getItem("phaetonHighScore") ? localStorage.getItem("phaetonHighScore") as string : " ");
    const history = useHistory();

    return (
        <div className="Phaeton-Container">
            <BackgroundImageComponent src={background} backgroundColor="black"/>
            <button 
                className="Episode Episode-Five" 
                onClick={() => history.push("/episode-five")}
                style={{ position: "fixed", left: "5vh", top: "5vw" }}
            > Quit </button>
            <div className="score" style={{ marginTop: "-5vh" }}>
                <p className="score-item">{isNaN(playerHighScore) ? "" : `Personal best: ${playerHighScore}`}</p>
            </div>
            <FlappyPhaetonGameView />
        </div>
    );
}