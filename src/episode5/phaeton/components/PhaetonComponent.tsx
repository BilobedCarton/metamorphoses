import React from "react";
import "../FlappyPhaeton.css";

type IPhaetonComponentProps = {
    posX: number;
    posY: number;
}

export const PhaetonComponent = (props: IPhaetonComponentProps) => {
    return (
        <div className="bird" style={{top: props.posY + "px", left: props.posX + "px"}}></div>
    )
}