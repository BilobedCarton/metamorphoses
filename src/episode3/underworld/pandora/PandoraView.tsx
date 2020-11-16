import _ from "lodash";
import React, { useEffect, useState } from "react"
import { Bug } from "./Bug";

import "./pandora.css";

const pandora = require("../../../assets/underworld/Pandora.svg");
const closedBox = require("../../../assets/underworld/ClosedBox.svg");
const openBox = require("../../../assets/underworld/OpenBox.svg");
const stars = require("../../../assets/underworld/OpenBoxStars.svg");

enum GameState {
    Start = 0,
    InProgress = 1,
    Lost = 2,
    Won = 3
}

const DOCILE_DURATION = 10000;

interface IBugInfo {
    isTrapped: boolean,
    timeSinceClick: number,
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    bugType: 1 | 2 | 3 | 4 | 5 | 6;
    animNum: 1 | 2 | 3 | 4 | 5 | 6;
}

const generateBug = (): IBugInfo => {
    return {
        isTrapped: false,
        timeSinceClick: DOCILE_DURATION,
        x: 50,
        y: 75,
        targetX: Math.floor(Math.random() * 85) + 5,
        targetY: Math.floor(Math.random() * 60) - 5,
        bugType: Math.floor(Math.random() * 6) + 1 as 1 | 2 | 3 | 4 | 5 | 6,
        animNum: Math.floor(Math.random() * 6) + 1 as 1 | 2 | 3 | 4 | 5 | 6,
    }
}

const BUG_STEP = 1;
const TIME_INTERVAL = 200;
const NUM_BUGS = 7;

const bugStep = (bug: IBugInfo) => {
    const target = { 
        x: bug.timeSinceClick < DOCILE_DURATION ? 50 : bug.targetX,
        y: bug.timeSinceClick < DOCILE_DURATION ? 90 : bug.targetY
    }

    if(bug.x < target.x - BUG_STEP) {
        bug.x += BUG_STEP;
    } else if(bug.x > target.x + BUG_STEP) {
        bug.x -= BUG_STEP;
    } else {
        bug.x = target.x;
    }

    if(bug.y < target.y - BUG_STEP) {
        bug.y += BUG_STEP;
    } else if(bug.y > target.y + BUG_STEP) {
        bug.y -= BUG_STEP;
    } else {
        bug.y = target.y;
    }

    bug.timeSinceClick += TIME_INTERVAL;

    if(bug.x === 50 && bug.y >= 80) bug.isTrapped = true;

    return bug;
}

export const PandoraView = (props: any) => {
    const [ gameState, setGameState ] = useState<GameState>(GameState.Start);
    const [ bugList, setBugList ] = useState<IBugInfo[]>([]);
    const [ bugCount, setBugCount ] = useState(NUM_BUGS);

    if(bugList.length < NUM_BUGS + 1 && gameState === GameState.InProgress) {
        setBugList((list) => [...list, generateBug()]);
    }

    useEffect(() => {
        const t = setInterval(() => {
            if(gameState === GameState.InProgress) {
                setBugList((list) => {
                    const newList = _.map(list, (bug) => {
                        return bugStep(bug);
                    });
                    setBugCount(_.filter(newList, (bug) => !bug.isTrapped).length);

                    return newList;
                });
            }
        }, TIME_INTERVAL);
        return () => clearInterval(t);
    }, [gameState])

    const renderBox = () => {
        switch(gameState) {
            case GameState.Start:
            case GameState.Won:
                return <img className="Pandora-Box Pandora-Box-Closed" src={closedBox} onClick={() => setGameState(GameState.InProgress)} alt="Closed Box"/>
            case GameState.InProgress:
            case GameState.Lost:
                return <img className="Pandora-Box Pandora-Box-Open" src={openBox} alt="Open Box"/>
        }
    }

    const getVictoryText = () => {
        switch(gameState) {
            case GameState.Start:
                return <p className="Pandora-Victory-Text">Click on Pandora's box to start.</p>
            case GameState.InProgress:
                return <p className="Pandora-Guide-Text"> Click the bugs to make them return to the box, but watch out, they may not be as obedient as they seem. </p>;
            case GameState.Won:
                return <p className="Pandora-Victory-Text">Congratulations! You've helped Pandora return evil to her box. </p>
        }
    }

    if(bugCount === 0 && gameState === GameState.InProgress) setGameState(GameState.Won);

    return (
        <div className="Pandora-Game-Container">
            { gameState === GameState.InProgress || gameState === GameState.Lost ? <img className="Pandora-Stars" src={stars} alt="stars"/> : null }
            <img className="Pandora-Figure" src={pandora} alt="Pandora"/>
            {getVictoryText()}
            {
                _.map(bugList, (bug, idx) => {
                    if(bug.isTrapped) return null;
                    return <Bug 
                        x={bug.x} 
                        y={bug.y} 
                        bugType={bug.bugType} 
                        animNum={bug.animNum}
                        key={"bug-" + idx}
                        onClick={(event) => {
                            setBugList((list) => {
                                const newList = [...list];
                                newList[idx].timeSinceClick = 0;
                                return newList;
                            })
                        }}
                    />
                })
            }
            { renderBox() }
        </div>
    )
}