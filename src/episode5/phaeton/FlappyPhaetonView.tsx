import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { PhaetonComponent } from "./components/PhaetonComponent";
import "./FlappyPhaeton.css";

type IBirdState = {
    x: number,
    y: number,
    v: number,
}

enum PlayerVictoryStatus {
    Win = 1,
    InProgress = 0,
    Loss = -1

}

const gravity = 6 / 60;
const maxY = 480;
const maxX = 680;
const maxV = 8;
const jumpV = -6;
const startingBirdState: IBirdState = {
    x: 100,
    y: 240,
    v: 0
}

export const FlappyPhaetonView = (props: any) => {
    const [ gameStopped, setGameStopped ] = useState(true);
    const [ playerVictoryStatus, setPlayerVictoryStatus ] = useState<PlayerVictoryStatus>(PlayerVictoryStatus.InProgress);
    const [ birdState, setBirdState ] = useState<IBirdState>(startingBirdState);

    const history = useHistory();

    // return true if we've collided with the floor, ceiling or obstacle
    function checkCollision() {
        if(birdState.y === 0 || birdState.y === maxY) {
            return true;
        }
        return false;
    }

    function animationTick() {
        if(gameStopped) return;
        setBirdState((bird) => {
            let { x, y, v } = bird;

            // update velocity
            v += gravity;
            v = Math.min(v, maxV)

            // update position
            y += v;
            x = Math.min(Math.max(x, 0), maxX);
            y = Math.min(Math.max(y, 0), maxY);

            return {
                x,
                y,
                v
            }
        });
    }

    function jump() {
        setBirdState((bird) => {
            let { x, y, v } = bird;

            v = jumpV;

            return {
                x,
                y,
                v
            }
        });
    }

    // start game loop timer
    useEffect(() => {
        if(!gameStopped) {
            const t = setInterval(animationTick, 1000 / 60);
            return () => clearInterval(t)
        }
    }, [gameStopped]);
    
    if(checkCollision()) {
        setBirdState(startingBirdState);
        setGameStopped(true);
        setPlayerVictoryStatus(PlayerVictoryStatus.Loss);
    }

    return (
        <div style={{ width: "100vw", height: "100vh", backgroundColor: "black" }} tabIndex={0} onKeyDown={(ev) => {
            // console.log(ev.key);
            
            if(ev.key === " " && !gameStopped) {
                jump();
            } else if(ev.key === " ") {
                setGameStopped(false);
                setPlayerVictoryStatus(PlayerVictoryStatus.InProgress);
            }
        }}>
            <button 
                className="Episode Episode-Five" 
                onClick={() => history.push("/episode-five")}
                style={{ position: "fixed", left: "5vh", top: "5vw" }}
            > Quit </button>
            <div className="game-container" style={{alignContent: "center"}}>
                <div className="sky" style={{ top: "0px" }}>
                    <PhaetonComponent posX={birdState.x} posY={birdState.y}/>
                </div>
            </div>
            {playerVictoryStatus === PlayerVictoryStatus.Loss ? <div className="game-overlay game-container">
                <b className="victory-display">You lost... press space to try again</b>
            </div> : null}
        </div>
        
    );
}