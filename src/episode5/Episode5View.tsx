import React from "react";
import { useHistory } from "react-router";
import { EpisodeComponent } from "../shared/components/EpisodeComponent";

const background = require("../assets/black.png");

export const Episode5View = (props: any) => {
    const history = useHistory();

    return (
        <EpisodeComponent
            style={{color: "rgb(255, 115, 0)"}}
            backgroundIsVideo={false}
            backgroundSrc={background}
            videoTitle={"Episode 5"}
            videoSrc={"https://player.vimeo.com/video/76979871"}
            episodeNumber={5}    
        >
            <b style={{textAlign: "center", fontSize: "large"}}>
                Can you beat:
                <p style={{fontSize: "xx-large"}}><i>P H A E T O N ?</i></p>
                <p> High Score: 7</p>
            </b>
            <button 
                className="Episode Episode-Five"
                onClick={() => history.push("/phaeton")}
            ><b>S T A R T</b></button>
        </EpisodeComponent>
    );
}