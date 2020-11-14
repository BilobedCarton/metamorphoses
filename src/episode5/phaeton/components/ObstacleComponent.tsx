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
                <div className="obstacle-image" style={{ transform: "rotateX(-180deg)" }} />
                {/* <p className="obstacle-text" style={{
                    width: "100%",
                    color: props.x > 700 ? "black" : "white",
                    top: "20px",
                    left: "-50%",
                    // lineHeight: 1
                    // marginTop: (props.y - (2 * halfGapHeight - 10)) + "px"
                }}>{props.textTop}</p> */}
            </div>
            <div className="obstacle" style={{ 
                textAlign: "center", 
                bottom: "0%", 
                height: (500 - (props.y + halfGapHeight)) + "px" 
            }}>
                <div className="obstacle-image"/>
                {/* <p className="obstacle-text" style={{
                    color: props.x > 700 ? "black" : "white",
                    top: "32%",
                    left: "-17%"
                }}>{props.textBottom}</p> */}
            </div>
        </div>
    )
}
