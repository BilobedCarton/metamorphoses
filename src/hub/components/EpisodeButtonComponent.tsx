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

    return (
        <div 
            style={{height: "fit-content"}}
            onFocus={() => setFocused(FocusState.FOCUSED)} 
            onBlur={() => setFocused(FocusState.UNFOCUSED)}
            onMouseEnter={() => setFocused(FocusState.FOCUSED)}
            onMouseLeave={() => setFocused(FocusState.UNFOCUSED)}
        >
            <img 
                className={props.imgClassName} 
                src={props.src} 
                alt={props.titleText} 
                tabIndex={0} 
                onClick={props.onClick}
            />
            <p style={{display: focused === FocusState.UNTOUCHED ? "none" : "block"}} className={props.textClassName + (focused === FocusState.FOCUSED ? " Materialize" : " Dematerialize")}>{props.titleText}</p>
        </div>
    )
}