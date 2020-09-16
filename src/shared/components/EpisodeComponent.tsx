import React, { CSSProperties } from "react";

type IEpisodeComponentProps = {
    title: string;
    source: string;
}

const EpisodeComponentStyle: CSSProperties = {
    display: "flex",
    flex: "1 1 auto",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    overflow: "hidden",
    padding: "5px"
}

export function EpisodeComponent(props: IEpisodeComponentProps) {
    return (
        <div style={EpisodeComponentStyle}>
            <h1>{props.title}</h1>
            <iframe 
                title={props.title}
                src={props.source}
                frameBorder={'0'}
                allowFullScreen
                
            />
        </div>
    );
}