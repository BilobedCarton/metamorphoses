import React, { CSSProperties } from "react";
import { useHistory } from "react-router";
import { BackgroundImageComponent, BackgroundVideoComponent } from "./BackgroundVideoComponent";
import { EpisodeVideoComponent } from "./EpisodeVideoComponent";

type IEpisodeComponentProps = {
    style?: React.CSSProperties;
    backgroundIsVideo: boolean;
    backgroundSrc: any;
    videoTitle: string;
    videoSrc: string;
    episodeNumber: number;
}

export const  EpisodeComponent: React.FC<IEpisodeComponentProps> = (props) => {
    const history = useHistory();

    const navToNextEpisode = () => {
        switch(props.episodeNumber) {
            case 1: return history.push("/episode-two");
            case 2: return history.push("/episode-three");
            case 3: return history.push("/episode-four");
            case 4: return history.push("/episode-five");
            case 5: return history.push("/episode-six");
            default: return history.push("/");
        }
    }

    const getButtonStyleClass = () => {
        switch(props.episodeNumber) {
            case 1: return "Episode-One";
            case 2: return "Episode-Two";
            case 3: return "Episode-Three";
            case 4: return "Episode-Four";
            case 5: return "Episode-Five";
            case 6: return "Episode-Six";
            default: return "";
        }
    }

    const getBackgroundColor = () => {
        switch(props.episodeNumber) {
            case 1: return "darkOrange";
            case 2: return "royalBlue";
            case 3: return "seaGreen";
            case 4: return "lightCoral";
            case 5: return "black";
            case 6: return "seashell";
            default: return "black";
        }
    }

    return (
        <div style={props.style}>
            {props.backgroundIsVideo 
                ? <BackgroundVideoComponent src={props.backgroundSrc} backgroundColor={getBackgroundColor()}/>
                : <BackgroundImageComponent src={props.backgroundSrc} backgroundColor={getBackgroundColor()}/>
            }
            <EpisodeVideoComponent
                title={props.videoTitle}
                source={props.videoSrc}
            />
            <div style={{ minHeight: "30vh", marginBottom: "40px" }}>
                {props.children}
            </div>
            <button className={"Episode " + getButtonStyleClass()}
                style={{ position: "absolute", top: "5vh", left: "5vw" }}
                onClick={() => history.push("/")}
            > HOME </button>
            { props.episodeNumber !== 6 ? <button className={"Episode " + getButtonStyleClass()}
                style={{ position: "absolute", top: "5vh", right: "5vw" }}
                onClick={navToNextEpisode}
            > EPISODE {props.episodeNumber + 1} </button> : null }
        </div>
    );
}