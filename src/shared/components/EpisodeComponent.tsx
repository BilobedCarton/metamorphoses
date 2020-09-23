import React, { CSSProperties } from "react";

type IEpisodeComponentProps = {
    title: string;
    source: string;
}

const EpisodeComponentStyle: CSSProperties = {
    marginTop: "10vh",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "5vh",
    width: "min-content",
    overflow: "hidden",
    paddingBottom: "14px",
    paddingTop: "16px",
    background: "black"
}

export function EpisodeComponent(props: IEpisodeComponentProps) {
    return (
        <div style={EpisodeComponentStyle}>
            <div>
                <iframe 
                    title={props.title}
                    src={props.source}
                    frameBorder={'0'}
                    allowFullScreen
                    
                />
            </div>
        </div>
    );
}