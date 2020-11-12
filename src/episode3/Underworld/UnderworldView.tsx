import React from "react"
import { useHistory } from "react-router"
import { BackgroundVideoComponent } from "../../shared/components/BackgroundVideoComponent";
import { SisyphusView } from "./sisyphus/SisyphusView";

const background = require("../../assets/underworld/underworld.mp4");

export const UnderworldView = (props: any) => {
    const history = useHistory();

    return (
        <div>
            <BackgroundVideoComponent src={background} backgroundColor="slate"/>
            <button className="Episode Episode-Six" onClick={() => history.push("/episode-three")}>Return to the surface</button>
            <SisyphusView/>

        </div>
    )
}