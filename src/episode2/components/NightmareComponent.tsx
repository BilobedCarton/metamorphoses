import React from "react"
import "../css/nightmares.css";

type INightmareComponentProps = {
    style: React.CSSProperties;
    title: string,
    fileUrl: string
}

export const NightmareComponent = (props: INightmareComponentProps) => {
    return (
        <div className="Nightmare-Item-Container" style={props.style}>
            <p className="Nightmare-Item-Text">{props.title}</p>
            <img src={props.fileUrl} className="Nightmare-Item-Image" alt="Nightmare"/>
        </div>
    )
}