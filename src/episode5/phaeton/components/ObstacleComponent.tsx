import React from "react"
import "../FlappyPhaeton.css";

type IObstacleComponentProps = {
    x: number;
    y: number;
}

const gapHeight = 150;
export const halfGapHeight = gapHeight / 2;

export const ObstacleComponent = (props: IObstacleComponentProps) => {
    const textTop = "1", textBottom = "2";
    return (
        <div className="obstacle-container" style={{ left: (props.x) + "px" }}>
            <div className="obstacle" style={{ top: "-10px", height: (props.y - (halfGapHeight - 10)) + "px" }}>
                <p className="obstacle-text">{textTop}</p>
            </div>
            <div className="obstacle" style={{ bottom: "-500px", height: (500 - (props.y + halfGapHeight)) + "px" }}>
                <p className="obstacle-text">{textBottom}</p>
            </div>
        </div>
    )
}