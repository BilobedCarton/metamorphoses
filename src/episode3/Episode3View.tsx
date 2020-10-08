import React from "react";
import { EpisodeComponent } from "../shared/components/EpisodeComponent";

const background = require("../assets/black.png");

export const Episode3View = (props: any) => {

    return (
        <EpisodeComponent
            backgroundIsVideo={true}
            backgroundSrc={background}
            videoTitle={"Episode 3"}
            videoSrc={"https://player.vimeo.com/video/76979871"}
            episodeNumber={3}    
        />
    );
}