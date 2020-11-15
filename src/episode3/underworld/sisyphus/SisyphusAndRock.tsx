import React from "react";
import "./sisyphus.css";

const rock = require("../../../assets/underworld/Rock.svg");
const sisyphus = require("../../../assets/underworld/Sisyphus.svg");

type ISisyphusAndRockProps = {
    position: number;
}

export const SisyphusAndRock = (props: ISisyphusAndRockProps) => {

    const getClassNameFromPosition = () => {
        switch(props.position) {
            case -1: return "sis-pos-failure";
            case 0: return "sis-pos-0";
            case 1: return "sis-pos-1";
            case 2: return "sis-pos-2";
            case 3: return "sis-pos-3";
            case 4: return "sis-pos-4";
            case 5: return "sis-pos-5";
            case 6: return "sis-pos-6";
            case 7: return "sis-pos-7"; 
        }
    }

    return (
        <div className={"sis-container " + getClassNameFromPosition()}>
            <img className={"sis-figure " + getClassNameFromPosition() + "-figure"} src={sisyphus} alt="Sisyphus"/>
            <img className={"sis-rock " + getClassNameFromPosition() + "-rock"} src={rock} alt="Rock"/>
        </div>
    )
}