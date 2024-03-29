import React, { useState } from "react"
import { useHistory } from "react-router"
import { BackgroundVideoComponent } from "../../shared/components/BackgroundVideoComponent";
import { PandoraView } from "./pandora/PandoraView";
import { SisyphusView } from "./sisyphus/SisyphusView";

import "./underworld.css";

const background =  require("../../assets/underworld/underworld.mp4"); // "https://drive.google.com/uc?export=view&id=1SG5J5kdtaG6MD-O9miXLSy9PYUd4KbTz";

enum GameSelection {
    None = 0,
    Sisyphus = 1,
    Pandora = 2
}

const highlightedStyle: React.CSSProperties = {
    backgroundColor: "rgba(255, 255, 255, 0.25)"
}

export const UnderworldView = (props: any) => {
    const [ gameSelected, setGameSelected ] = useState<GameSelection>(0);

    const history = useHistory();

    const renderGame = () => {
        switch(gameSelected) {
            case GameSelection.None: return null;
            case GameSelection.Sisyphus: return <SisyphusView/>;
            case GameSelection.Pandora: return <PandoraView/>;
        }
    }

    return (
        <div>
            <BackgroundVideoComponent src={background} backgroundColor="LightSlateGray"/>
            <button className="Episode Underworld-Selection-Button" onClick={() => history.push("/episode-three")} style={{ marginTop: "3vmin" }}>RETURN TO THE SURFACE</button>
            { gameSelected === GameSelection.None
                ? <div style={{ color: "beige", width: "40vw", textAlign: "center", marginLeft: "30vw", marginBottom: "0vh", fontSize: "min(3vmin, 2rem)", marginTop: "25vmin"}}>
                    <p>
                        The underworld is full of tormented souls being punished for their transgressions against the gods. You could ease their suffering by helping them, but can you overcome their impossible tasks?
                    </p>
                </div> : null
            }
            <div style={{ marginTop: gameSelected === GameSelection.None ? "5vmin" : "0vmin" }}>
                <button 
                    style={gameSelected === GameSelection.Sisyphus ? highlightedStyle : {}} 
                    className="Episode Underworld-Selection-Button" 
                    onClick={() => setGameSelected(GameSelection.Sisyphus)}
                >HELP SISYPHUS</button>
                <button 
                    style={gameSelected === GameSelection.Pandora ? highlightedStyle : {}} 
                    className="Episode Underworld-Selection-Button"
                    onClick={() => setGameSelected(GameSelection.Pandora)}
                >HELP PANDORA</button>
            </div>
            { renderGame() }

        </div>
    )
}