import React, { CSSProperties } from "react";

type IEpisodeVideoComponentProps = {
    title: string;
    source: string;
}

const EpisodeVideoComponentStyle: CSSProperties = {
    marginTop: "15vh",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "5vh",
    width: "80vw",
    maxWidth: "700px",
    overflow: "hidden",
    padding: "16px",
    background: "black"
}

export function EpisodeVideoComponent(props: IEpisodeVideoComponentProps) {
    return (
        <div style={EpisodeVideoComponentStyle}>
            <div className="iframe-container">
                <iframe 
                    title={props.title}
                    src={props.source}
                    width="100%"
                    frameBorder="0"
                    allowFullScreen
                    
                />
            </div>
        </div>
    );
}