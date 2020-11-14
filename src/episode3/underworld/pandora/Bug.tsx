import React from "react";

import "./pandora.css";
const bugAssets = {
    1: require("../../../assets/underworld/Bug1.svg"),
    2: require("../../../assets/underworld/Bug2.svg"),
    3: require("../../../assets/underworld/Bug3.svg"),
    4: require("../../../assets/underworld/Bug4.svg"),
    5: require("../../../assets/underworld/Bug5.svg"),
    6: require("../../../assets/underworld/Bug6.svg")
}

type IBugProps = {
    x: number;
    y: number;
    onClick: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
    bugType: 1 | 2 | 3 | 4 | 5 | 6;
    animNum: 1 | 2 | 3 | 4 | 5 | 6;
}



export const Bug = (props: IBugProps) => {
    return (
        <img 
            className="Pandora-Bug" 
            src={bugAssets[props.bugType]} 
            style={{ left: props.x + "%", top: props.y + "%", animationName: "Bug-Hover-" + props.animNum }} 
            onClick={props.onClick}
        />
    )
}