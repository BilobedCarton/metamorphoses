import React from "react";
import { useHistory } from "react-router";
import { EpisodeComponent } from "../shared/components/EpisodeComponent";

const background = require("../assets/black.png");// "https://drive.google.com/uc?export=view&id=1yx49LUaKX9pOJ9prC5Br1yK_ZTsp8TFu";

export const Episode5View = (props: any) => {
    const history = useHistory();

    return (
        <EpisodeComponent
            style={{color: "rgb(255, 115, 0)"}}
            backgroundIsVideo={false}
            backgroundSrc={background}
            videoTitle={"Episode 5"}
            videoSrc={"https://player.vimeo.com/video/479637045"}
            episodeNumber={5}    
        >
            <b style={{textAlign: "center", fontSize: "large", lineHeight: 1}}>
                Can you beat:
                <p style={{fontSize: "xx-large"}}><i>P H A E T O N ?</i></p>
                <p> High Score: 7</p>
            </b>
            <div>
                <button 
                    className="Episode Episode-Five"
                    onClick={() => history.push("/phaeton")}
                ><b>S T A R T</b></button>
            </div>
            <button 
                className="Episode Episode-Five"
                onClick={() => history.push("/scores")}
            ><b>VIEW HIGHSCORES</b></button>
        </EpisodeComponent>
    );
}