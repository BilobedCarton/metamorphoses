import React, { useState } from "react";
import { useHistory } from "react-router";
import { BackgroundImageComponent } from "../../shared/components/BackgroundVideoComponent";
import { FlappyPhaetonGameView } from "./components/FlappyPhaetonGameView";
import "./FlappyPhaeton.css";

const background = require("../../assets/black.png");

export const FlappyPhaetonView = (props: any) => {
    const [ playerHighScore, setPlayerHighScore ] = useState(parseInt(localStorage.getItem("phaetonHighScore") ? localStorage.getItem("phaetonHighScore") as string : " "));
    const history = useHistory();

    return (
        <div className="Phaeton-Container">
            <BackgroundImageComponent src={background} backgroundColor="black"/>
            <button 
                className="Episode Episode-Five" 
                onClick={() => history.push("/episode-five")}
                style={{ position: "fixed", left: "5vw", top: "5vh" }}
            > Quit </button>
            <button 
                className="Episode Episode-Five" 
                onClick={() => history.push("/scores")}
                style={{ position: "fixed", right: "5vw", top: "5vh" }}
            > High Scores </button>
            <div className="score" style={{ marginTop: "-5vh" }}>
                <p className="score-item">{isNaN(playerHighScore) ? "" : `Personal best: ${playerHighScore}`}</p>
            </div>
            <FlappyPhaetonGameView onHighScoreChangeCallback={(value) => {
                setPlayerHighScore(value);
                localStorage.setItem("phaetonHighScore", "" + value);
            }} />
        </div>
    );
}