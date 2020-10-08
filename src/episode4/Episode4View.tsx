import React from "react";
import { EpisodeComponent } from "../shared/components/EpisodeComponent";

const background = require("../assets/ep4.mp4");

export const Episode4View = (props: any) => {
    return (
        <EpisodeComponent
            backgroundIsVideo={true}
            backgroundSrc={background}
            videoTitle={"Episode 4"}
            videoSrc={"https://player.vimeo.com/video/76979871"}
            episodeNumber={4}    
        />
    );
}