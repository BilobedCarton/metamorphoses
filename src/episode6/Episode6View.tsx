import React from "react";
import { EpisodeComponent } from "../shared/components/EpisodeComponent";

const background = require("../assets/ep6.MP4");

export const Episode6View = () => {
    return (
        <EpisodeComponent
            backgroundIsVideo={true}
            backgroundSrc={background}
            videoTitle={"Episode 6"}
            videoSrc={"https://player.vimeo.com/video/76979871"}
            episodeNumber={6}    
        >
        </EpisodeComponent>
    );
}