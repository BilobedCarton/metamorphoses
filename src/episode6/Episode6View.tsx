import React from "react";
import { useHistory } from "react-router";
import { EpisodeComponent } from "../shared/components/EpisodeComponent";

const background = "https://drive.google.com/uc?export=view&id=18GTrF1c3t8Vpru1lKMbfjhrIlsusX2Bi";

export const Episode6View = () => {
    const history = useHistory();

    return (
        <EpisodeComponent
            backgroundIsVideo={true}
            backgroundSrc={background}
            videoTitle={"Episode 6"}
            videoSrc={"https://player.vimeo.com/video/76979871"}
            episodeNumber={6}    
        >
            <div>
                <button className="Episode Episode-Six" onClick={() => history.push("/cookbook")}>BAUCIS AND PHILEMON'S <br/> COOKBOOK</button>
            </div>
            <button className="Episode Episode-Six" onClick={() => history.push("/behind-the-scenes/6")}>BEHIND THE SCENES</button>
        </EpisodeComponent>
    );
}