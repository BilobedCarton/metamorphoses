import { on } from "process";
import React, { useEffect, useState } from "react";
import "./sisyphus.css";
import { SisyphusAndRock } from "./SisyphusAndRock";

const hill = require("../../../assets/underworld/Hill.svg");

enum GameState {
    Start = 0,
    InProgress = 1,
    Lost = 2,
    Won = 3,
    FinalPush = 4
}

const qteTimeShort = 2.00 // 2s;
const qteTimeLong = 5.00 // 5s
const qteKeyList = ["a", "s", "d", "w"];
const mashThreshold = 30;

export const SisyphusView = (props: any) => {
    const [ sisyphusPosition, setSisyphusPosition ] = useState(0);
    const [ qteKey, setQteKey ] = useState<string>("");
    const [ qteTimeLeft, setQteTimeLeft ] = useState(qteTimeShort);
    const [ gameState, setGameState ] = useState(GameState.Start);
    const [ mashCount, setMashCount ] = useState(0);

    useEffect(() => {
        const t = setInterval(() => {
            if(isGameInProgress()) setQteTimeLeft((timeLeft) => timeLeft - .10);
        }, 100);
        // start game loop
        return () => clearInterval(t);
    }, [gameState]);

    const generateQteKey = () => {
        return qteKeyList[Math.floor(Math.random() * qteKeyList.length)]
    }

    const startGame = () => {
        setSisyphusPosition(0);
        setQteKey(generateQteKey());
        setQteTimeLeft(qteTimeShort);
        setGameState(GameState.InProgress);
        setMashCount(0);
    }

    const onWin = () => {
        setGameState(GameState.Won);
        setSisyphusPosition(7);
    }

    const onLoss = () => {
        setGameState(GameState.Lost);
        if(sisyphusPosition === 6) setSisyphusPosition(-1);
    }

    const isGameInProgress = () => {
        return gameState === GameState.InProgress || gameState === GameState.FinalPush;
    }

    const onInput = (input: string) => {
        if(input === "m1" && !isGameInProgress()) {
            startGame();
            return;
        };
        if(isGameInProgress()) {
            if(input === qteKey) { 
                if(sisyphusPosition === 6) {
                    if(mashCount >= mashThreshold) onWin();
                    else setMashCount((mc) => mc + 1);
                } else {
                    if(sisyphusPosition === 5) {
                        setGameState(GameState.FinalPush);
                        setQteTimeLeft(qteTimeLong);
                    } else setQteTimeLeft(qteTimeShort);
                    setSisyphusPosition((sp) => sp + 1);
                    
                    setQteKey(generateQteKey());
                }
            } else if(input !== "m1") onLoss();
        }
    }

    const renderText = () => {
        switch(gameState) {
            case GameState.Start: return  <p>Click to begin.</p>;
            case GameState.Lost: return <p>You failed to help Sisyphus push his rock up the hill. <br/> Click to try again.</p>
            case GameState.InProgress: return <p> Press {qteKey} <br/> {qteTimeLeft.toFixed(2)}s left </p>
            case GameState.FinalPush: return <p> Press { qteKey } rapidly to overcome the final hurdle <br/> {qteTimeLeft.toFixed(2)}s left </p>
            case GameState.Won: return <p>Congratulations!!! <br/> You've helped Sisyphus overcome his punishment. <br/> At least for now...</p>
            default: return "";
        }
    }

    
    if(qteTimeLeft <= 0 && isGameInProgress()) onLoss();

    return (
        <div className = "sisyphus-game-container" onMouseDown={() => onInput("m1")} onKeyDown={(event) => onInput(event.key)} tabIndex={1}>
            <div className="sis-text">
                { renderText() }
            </div>
            <SisyphusAndRock position={sisyphusPosition}/>
            <img className="sis-hill" src={hill}/>
        </div>
    );
}