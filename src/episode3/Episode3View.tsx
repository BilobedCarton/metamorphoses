import React from "react";
import { useHistory } from "react-router";
import { EpisodeComponent } from "../shared/components/EpisodeComponent";

const background = require("../assets/ep3.mp4");

export const Episode3View = (props: any) => {
    const history = useHistory();

    return (
        <EpisodeComponent
            backgroundIsVideo={true}
            backgroundSrc={background}
            videoTitle={"Episode 3"}
            videoSrc={"https://player.vimeo.com/video/76979871"}
            episodeNumber={3}    
        >
            <button className="Episode Episode-Three" onClick={() => history.push("/underworld")}>ENTER THE <b style={{ fontWeight: "bolder"}}>UNDERWORLD</b></button>
        </EpisodeComponent>
    );
}