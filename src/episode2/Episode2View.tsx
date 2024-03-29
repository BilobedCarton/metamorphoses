import React from "react";
import { EpisodeComponent } from "../shared/components/EpisodeComponent";
import { ContextualEp2InteractiveComponent } from "./components/Ep2InteractiveComponent";

const background = require("../assets/ep2.mp4"); // "https://drive.google.com/uc?export=view&id=1JbBoah27ybnj0NO2oxWwIg-8aHnnpZGY";

export const Episode2View = () => {

    return (
        <EpisodeComponent
            backgroundIsVideo={true}
            backgroundSrc={background}
            videoTitle={"Episode 2"}
            videoSrc={"https://player.vimeo.com/video/479624195"}
            episodeNumber={2}    
        >
            <ContextualEp2InteractiveComponent/>
        </EpisodeComponent>
    );
}