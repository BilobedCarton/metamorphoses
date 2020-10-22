import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { BackgroundVideoComponent } from "../../shared/components/BackgroundVideoComponent";
import { ObstacleComponent } from "./components/ObstacleComponent";
import { PhaetonComponent } from "./components/PhaetonComponent";
import "./FlappyPhaeton.css";

const background = require("../../assets/ep5.mp4");

type IBirdState = {
    x: number,
    y: number,
    v: number,
}

enum PlayerVictoryStatus {
    Start = 1,
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
    const [ playerVictoryStatus, setPlayerVictoryStatus ] = useState<PlayerVictoryStatus>(PlayerVictoryStatus.Start);
    const [ birdState, setBirdState ] = useState<IBirdState>(startingBirdState);
    const [ obstacleList, setObstacleList ] = useState<number[]>([]);
    const [ frame, setFrame ] = useState(0);

    const history = useHistory();

    // return true if we've collided with the floor, ceiling or obstacle
    function checkCollision() {
        if(birdState.y === 0 || birdState.y === maxY) {
            return true;
        }
        return false;
    }

    function generateObstacle() {
        let height = Math.floor(Math.random() * 300) + 60;
        setObstacleList((list) => {
            if(list.length === 6) return list;
            let newList = [...list];
            newList.push(height);
            return newList
        })
    }

    function animationTick() {
        if(gameStopped) return;
        setFrame((frame) => {
            return frame + 1;
        });
        generateObstacle();
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

    const getVictoryStatusText = (status: PlayerVictoryStatus) => {
        switch(status) {
            case PlayerVictoryStatus.Start:
                return "Press space to begin.";
            case PlayerVictoryStatus.Loss:
                return "You lost... press space to try again.";
            case PlayerVictoryStatus.InProgress:
            default:
                return "";
        }
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
                <video autoPlay muted loop style={{ objectFit: "fill", width: "100%", height: "130%", marginTop: "-11%" }}>
                    <source src={background} type="video/mp4"/>
                    Your browser does not support HTML5 video
                </video>`
                    <PhaetonComponent posX={birdState.x} posY={birdState.y}/>
                    {obstacleList.map((y, i) => {
                        return (
                            <ObstacleComponent x={250 + i * 150} y={y} key={"obstacle-" + i} />
                        )
                    })}
                </div>
            </div>
            {playerVictoryStatus !== PlayerVictoryStatus.InProgress ? <div className="game-overlay game-container">
                <b className="victory-display">{getVictoryStatusText(playerVictoryStatus)}</b>
            </div> : null}
        </div>
        
    );
}