import React from "react"
import "../FlappyPhaeton.css";

type IObstacleComponentProps = {
    x: number;
    y: number;
}

const gapHeight = 100;

export const ObstacleComponent = (props: IObstacleComponentProps) => {
    const textTop = "1", textBottom = "2";
    return (
        <div className="obstacle-container" style={{ left: (props.x) + "px" }}>
            <div className="obstacle" style={{ top: "0px", height: (props.y - 50) + "px" }}>
                <p className="obstacle-text">{textTop}</p>
            </div>
            <div className="obstacle" style={{ bottom: "-500px", height: (500 - (props.y + 50)) + "px" }}>
                <p className="obstacle-text">{textBottom}</p>
            </div>
        </div>
    )
}