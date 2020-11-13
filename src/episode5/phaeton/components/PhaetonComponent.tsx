import React from "react";
import "../FlappyPhaeton.css";

const chariot = require("../../../assets/phaeton/chariot.svg");

type IPhaetonComponentProps = {
    posX: number;
    posY: number;
}

export const PhaetonComponent = (props: IPhaetonComponentProps) => {
    return (
        <img className="bird" src={chariot} style={{top: props.posY + "px", left: props.posX + "px"}}/>
    )
}