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
    width: "min-content",
    overflow: "hidden",
    paddingBottom: "14px",
    paddingTop: "16px",
    background: "black"
}

export function EpisodeVideoComponent(props: IEpisodeVideoComponentProps) {
    return (
        <div style={EpisodeVideoComponentStyle}>
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