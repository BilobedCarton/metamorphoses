import _, { min } from "lodash";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Firebase, { withFirebase } from "../../firebase";
import { ScoreMetadata } from "../../firebase/firebase";
import { BackgroundVideoComponent } from "../../shared/components/BackgroundVideoComponent";

import "./scores.css";

const background = require("../../assets/ep5.mp4");

type IHighScoresViewProps = {
    firebase: Firebase;
}

const HighScoresView = (props: IHighScoresViewProps) => {
    const localHighScore = localStorage.getItem("phaetonHighScore") ? parseInt(localStorage.getItem("phaetonHighScore") as string) : 0;
    const [ name, setName ] = useState("");
    const [ scoresList, setScoresList ] = useState<ScoreMetadata[]>([]);
    const [ refresh, setRefresh ] = useState(false);
    const [ submitted, setSubmitted ] = useState(false);

    const history = useHistory();

    useEffect(() => {
        return props.firebase.ep5ScoreEntries((data) => {
            setScoresList(data);
        })
    }, [])

    return (
        <div> 
            <BackgroundVideoComponent src={background} backgroundColor="darkOrange"/>
            <button className="Episode Score-Button" style={{ position: "absolute", left: "5vmin", top: "5vmin" }} onClick={() => history.push("/episode-five")}> EPISODE 5 </button>
            <div className="Scores-Personal">
                <p>
                    Your high score is: &nbsp;
                    <b> {localHighScore} </b>
                </p>
                <input className="Scores-Name-Input" type="text" placeholder="Enter name..." value={name} onChange={(event) => setName(event.target.value)} maxLength={15}/>
                <div><button 
                    className={"Episode" + (name.length == 0 || submitted ? "" : " Score-Button")} 
                    disabled={name.length == 0 || submitted} 
                    onClick={() => { props.firebase.addEp5Score(name, localHighScore); setSubmitted(true) }}
                    style={{ fontSize: "min(2vmax, 1.25rem)" }}
                > UPLOAD HIGHSCORE </button></div>
            </div>
            <div className="Scores-General">
                <b>HIGH SCORES</b>
                {
                    _.map(scoresList, (score, idx) => {
                        return <div key={"score-" + idx} className="Score-Entry"> 
                            <span className="Score-Entry-Name">{score.name}:</span>
                            <span className="Score-Entry-Score" >{score.score}</span> 
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export const ContextualHighScoresView = withFirebase(HighScoresView);