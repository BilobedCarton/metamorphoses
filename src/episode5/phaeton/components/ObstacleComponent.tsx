import React from "react"
import { halfGapHeight } from "../domain/PhaetonConstants";
import "../FlappyPhaeton.css";

type IObstacleComponentProps = {
    x: number;
    y: number;
    textTop: string;
    textBottom: string;
}

export const ObstacleComponent = (props: IObstacleComponentProps) => {
    return (
        <div className="obstacle-container" style={{ left: (props.x) + "px" }}>
            <div className="obstacle" style={{ 
                textAlign: "center", 
                top: "-10px", 
                height: (props.y - (halfGapHeight - 10)) + "px" 
            }}>
                <p className="obstacle-text" style={{
                    color: props.x > 700 ? "black" : "white",
                    marginTop: (props.y - (2 * halfGapHeight - 10)) + "px"
                }}>{props.textTop}</p>
            </div>
            <div className="obstacle" style={{ 
                textAlign: "center", 
                bottom: "-500px", 
                height: (500 - (props.y + halfGapHeight)) + "px" 
            }}>
                <p className="obstacle-text" style={{
                    color: props.x > 700 ? "black" : "white",
                    marginTop: (500 - (props.y + 1.75 * halfGapHeight))
                }}>{props.textBottom}</p>
            </div>
        </div>
    )
}