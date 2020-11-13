import React, { useState } from "react";
import H5AudioPlayer from "react-h5-audio-player";
import { EpisodeComponent } from "../shared/components/EpisodeComponent";
import 'react-h5-audio-player/lib/styles.css';
import "./Episode4.css";

enum EffectState {
    INITIAL = 0,
    SOURCE = 1,
    PLACEMENT = 2,
    REVERSE = 3,
    ECHO = 4,
    REVERB = 5
}

const background = require("../assets/ep4.mp4"); //"https://drive.google.com/uc?export=view&id=1dL9uc_jhBdwxO5W7kDW-U0jDcU71jaDK";
const sounds: Record<EffectState, string | undefined> = {
    0: undefined,
    1: require("../assets/sounds/ep4/source.mp3"),
    2: require("../assets/sounds/ep4/placement.mp3"),
    3: require("../assets/sounds/ep4/reverse.mp3"),
    4: require("../assets/sounds/ep4/echo.mp3"),
    5: require("../assets/sounds/ep4/reverb.mp3"),
}

const getEffectCommentary = (es: EffectState) => {
    switch(es) {
        case EffectState.INITIAL:
            return "";
        case EffectState.SOURCE:
            return "Many sounds in this show are created from real life non-musical sources to obtain a tactile aesthetic. This \"celestial\" effect is made from various ceramic and glass bowls struck with sticks and mallets.";
        case EffectState.PLACEMENT:
            return "The single bowl strikes are balanced between headphones and placed to suggest that the sound is moving and communicating with itself.";
        case EffectState.REVERSE:
            return "Reversing audio is a powerful transformation. The sound remains familiar but takes on a new shape that creates movement and tension.";
        case EffectState.ECHO:
            return "This is the most important transformation for me; a digital effect echoes each strike and sends it around the space at different pitches and times, adding breadth and more tactility.";
        case EffectState.REVERB:
            return "The final touch of reverb gives sound space, putting the audio \"behind\" the actors' voices as well as creating depth and distance.";
    }
}

const getEffectTitle = (es: EffectState) => {
    switch(es) {
        case EffectState.INITIAL:
            return "";
        case EffectState.SOURCE:
            return "SOURCE";
        case EffectState.PLACEMENT:
            return "PLACEMENT";
        case EffectState.REVERSE:
            return "REVERSE";
        case EffectState.ECHO:
            return "ECHO";
        case EffectState.REVERB:
            return "REVERB";
    }
}

export const Episode4View = () => {
    const [ progress, setProgress ] = useState(EffectState.INITIAL);

    const renderInitial = () => {
        return (
            <div>
                <p className="Guideline">Make sure your sound is on.</p>
                <button className="Episode Episode-Four" onClick={() => setProgress(EffectState.SOURCE)}>START</button>
            </div>
        );
    }

    const renderEffectState = () => {
        return (
            <div>
                <p className="Guideline">{getEffectTitle(progress)}</p>
                <div style={{ maxWidth: "80vw", marginLeft: "10vw", marginRight: "10vw" }}>
                    <H5AudioPlayer
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
                        volume={0.4}
                        src={sounds[progress]}
                        autoPlay={false}
                        autoPlayAfterSrcChange={false}
                    />
                </div>
                <div className="info">
                    <b>{"Commentary from Jesse Timm (Sound Designer):"}</b>
                    <p>{getEffectCommentary(progress)}</p>
                </div>
                <div>
                    { progress > EffectState.SOURCE ? <button className="Episode Episode-Four" onClick={() => setProgress(progress - 1)}>REMOVE {getEffectTitle(progress)}</button> : null }
                    { progress < EffectState.REVERB ? <button className="Episode Episode-Four" onClick={() => setProgress(progress + 1)}>ADD {getEffectTitle(progress + 1)}</button> : null }
                </div>
            </div>
        );
    }

    return (
        <EpisodeComponent
            backgroundIsVideo={true}
            backgroundSrc={background}
            videoTitle={"Episode 4"}
            videoSrc={"https://player.vimeo.com/video/76979871"}
            episodeNumber={4}    
        >
            {progress !== EffectState.INITIAL ? renderEffectState() : renderInitial()}
        </EpisodeComponent>
    );
}