import React from "react";
import { useHistory } from "react-router";
import { BackgroundVideoComponent } from "../shared/components/BackgroundVideoComponent";
import { EpisodeComponent } from "../shared/components/EpisodeComponent"
import { Ep2InteractiveComponent } from "./components/Ep2InteractiveComponent";

const background = require("../assets/ep2.mp4");

export const Episode2View = (props: any) => {
    const history = useHistory();

    return (
        <div>
            <BackgroundVideoComponent src={background}/>
            <EpisodeComponent
                title="Episode 2"
                source="https://player.vimeo.com/video/76979871"
            />
            <Ep2InteractiveComponent/>
            <button className={"Episode-Two"}
                style={{ position: "fixed", bottom: "5vh", left: "5vw" }}
                onClick={() => history.push("/")}
            > Hub </button>
            <button className={"Episode-Two"}
                style={{ position: "fixed", bottom: "5vh", right: "5vw" }}
                onClick={() => history.push("/episode-three")}
            > Episode 3 </button>
        </div>
    );
}