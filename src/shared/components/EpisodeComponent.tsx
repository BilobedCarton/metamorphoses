import React from "react";
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

    return (
        <div style={props.style}>
            {props.backgroundIsVideo 
                ? <BackgroundVideoComponent src={props.backgroundSrc}/>
                : <BackgroundImageComponent src={props.backgroundSrc}/>
            }
            <EpisodeVideoComponent
                title={props.videoTitle}
                source={props.videoSrc}
            />
            {props.children}
            <button className={"Episode " + getButtonStyleClass()}
                style={{ position: "fixed", top: "5vh", left: "5vw" }}
                onClick={() => history.push("/")}
            > Hub </button>
            { props.episodeNumber !== 6 ? <button className={"Episode " + getButtonStyleClass()}
                style={{ position: "fixed", bottom: "5vh", right: "5vw" }}
                onClick={navToNextEpisode}
            > Episode {props.episodeNumber + 1} </button> : null }
        </div>
    );
}