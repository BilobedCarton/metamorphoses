import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ObstacleComponent } from "./components/ObstacleComponent";
import { PhaetonComponent } from "./components/PhaetonComponent";
import { generateText, gravity, halfGapHeight, startingHorizSpeed, IBirdState, jumpV, maxV, maxX, maxY, PlayerVictoryStatus, startingBirdState, startingDist } from "./domain/PhaetonConstants";
import "./FlappyPhaeton.css";

const background = require("../../assets/ep5.mp4");

type IObstacleState = {
    y: number;
    top: string;
    bottom: string;
}

export const FlappyPhaetonView = (props: any) => {
    const [ gameStopped, setGameStopped ] = useState(true);
    const [ playerVictoryStatus, setPlayerVictoryStatus ] = useState<PlayerVictoryStatus>(PlayerVictoryStatus.Start);
    const [ birdState, setBirdState ] = useState<IBirdState>(startingBirdState);
    const [ obstacleList, setObstacleList ] = useState<IObstacleState[]>([]);
    const [ playerScore, setPlayerScore ] = useState(0);
    const [ distanceToFirstObstacle, setDistanceToFirstObstacle ] = useState(startingDist - 50);
    const [ horizontalSpeed, setHorizontalSpeed ] = useState(startingHorizSpeed);
    const [ scoredClosestObstacle, setScoredClosestObstacle ] = useState(false);

    const history = useHistory();

    // return true if we've collided with the floor, ceiling or obstacle
    function checkCollision() {
        if(birdState.y <= 0 || birdState.y >= maxY) {
            return true;
        }
        if(distanceToFirstObstacle <= 15 && distanceToFirstObstacle >= -50
            && (birdState.y < obstacleList[0].y - (5 + halfGapHeight)
                || birdState.y + 10 > obstacleList[0].y + halfGapHeight)
        ) {
            // console.log(`dist: ${distanceToFirstObstacle}, y: ${birdState.y}, top: ${obstacleList[0].y - (halfGapHeight - 10)}, bottom: ${obstacleList[0].y + halfGapHeight}`);
            return true; 
        }
        return false;
    }

    function generateObstacle() {
        let height = Math.floor(Math.random() * 300) + 70;
        setObstacleList((list) => {
            if(list.length === 3) return list;
            let newList = [...list];
            newList.push({y: height, top: generateText(height - (halfGapHeight - 10)), bottom: generateText(500 - height - halfGapHeight)});
            // console.log(newList[newList.length - 1])
            return newList
        })
    }

    function animationTick() {
        if(gameStopped) return;
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
        setDistanceToFirstObstacle((dist) => {
            let newDist = dist - horizontalSpeed;
            return newDist;
        });
        setHorizontalSpeed((s) => s + 0.01);
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

    if(distanceToFirstObstacle < -50 && !scoredClosestObstacle) {
        setPlayerScore((s) => s + 1);
        setScoredClosestObstacle(true);
    } else if(distanceToFirstObstacle < -150) {
        setObstacleList((ol) => {
            const newOL = ol.slice(1);
            return newOL;
        });
        setDistanceToFirstObstacle((dist) => {
            return startingDist + dist;
        });
        setScoredClosestObstacle(false);
    }
    
    if(checkCollision()) {
        setBirdState(startingBirdState);
        setGameStopped(true);
        setPlayerVictoryStatus(PlayerVictoryStatus.Loss);
        setObstacleList([]);
        setDistanceToFirstObstacle(startingDist);
        setHorizontalSpeed(startingHorizSpeed);
        setScoredClosestObstacle(false);
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
                setPlayerScore(0);
            }
        }}>
            <div className="game-container" style={{alignContent: "center"}}>
                <div className="sky" style={{ top: "0px" }}>
                <video autoPlay muted loop style={{ objectFit: "fill", width: "100%", height: "130%", marginTop: "-11%" }}>
                    <source src={background} type="video/mp4"/>
                    Your browser does not support HTML5 video
                </video>`
                    <PhaetonComponent posX={birdState.x} posY={birdState.y}/>
                    {obstacleList.map((o, i) => {
                        return (
                            <ObstacleComponent 
                                x={birdState.x + distanceToFirstObstacle + i * 250} 
                                y={o.y} key={"obstacle-" + i} 
                                textTop={o.top}
                                textBottom={o.bottom}    
                            />
                        )
                    })}
                </div>
            </div>
            <button 
                className="Episode Episode-Five" 
                onClick={() => history.push("/episode-five")}
                style={{ position: "fixed", left: "5vh", top: "5vw" }}
            > Quit </button>
            <p className="score">{playerScore}</p>
            {playerVictoryStatus !== PlayerVictoryStatus.InProgress ? <div className="game-overlay game-container">
                <b className="victory-display">{getVictoryStatusText(playerVictoryStatus)}</b>
            </div> : null}
        </div>
        
    );
}