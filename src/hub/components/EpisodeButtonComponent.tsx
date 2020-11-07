import React, { useState } from "react"

type IEpisodeButtonProps = {
    imgClassName: string;
    textClassName: string;
    titleText: string;
    src: string;
    onClick: () => void;
}

enum FocusState {
    UNTOUCHED = 0,
    FOCUSED = 1,
    UNFOCUSED = 2
}

export const EpisodeButtonComponent: React.FC<IEpisodeButtonProps> = (props) => {
    const [focused, setFocused] = useState(FocusState.UNTOUCHED);

    const getClassNameFromFocusState = (fs: FocusState) => {
        switch(fs) {
            case FocusState.UNTOUCHED:
                return "Hidden-Text";
            case FocusState.FOCUSED:
                return "Materialize";
            case FocusState.UNFOCUSED:
                return "Dematerialize";
        }
    }

    return (
        <div 
            style={{height: "fit-content", outline: "none"}}
            onFocus={() => setFocused(FocusState.FOCUSED)} 
            onBlur={() => setFocused(FocusState.UNFOCUSED)}
            onMouseEnter={() => setFocused(FocusState.FOCUSED)}
            onMouseLeave={() => setFocused(FocusState.UNFOCUSED)}
            tabIndex={0} 
            onClick={props.onClick}
            onKeyDown={(event) => { if(event.key === "Enter") props.onClick() }}
        >
            <img 
                className={props.imgClassName} 
                src={props.src} 
                alt={props.titleText} 
            />
            <p style={{display: "block" }} className={props.textClassName + " " + getClassNameFromFocusState(focused)}>{props.titleText}</p>
        </div>
    )
}