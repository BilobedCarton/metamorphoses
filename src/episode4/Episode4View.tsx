import _ from "lodash";
import React, { useEffect } from "react";
import { EpisodeComponent } from "../shared/components/EpisodeComponent";

const background = require("../assets/ep4.mp4");
const sounds = {
    echo: new Audio(require("../assets/sounds/ep4/echo.mp3")),
    placement: new Audio(require("../assets/sounds/ep4/placement.mp3")),
    reverb: new Audio(require("../assets/sounds/ep4/reverb.mp3")),
    reverse: new Audio(require("../assets/sounds/ep4/reverse.mp3")),
    source: new Audio(require("../assets/sounds/ep4/source.mp3")),
}

export const Episode4View = (props: any) => {
    useEffect(() => {
        _.forEach(sounds, (sound) => {
            sound.volume = 0.4;
        });
    });

    return (
        <EpisodeComponent
            backgroundIsVideo={true}
            backgroundSrc={background}
            videoTitle={"Episode 4"}
            videoSrc={"https://player.vimeo.com/video/76979871"}
            episodeNumber={4}    
        >
            <button className="Episode Episode-Four" onClick={() => sounds.reverb.play()}>Play</button>
        </EpisodeComponent>
    );
}