import React from "react";

type IBackgroundVideoComponentProps = {
    src: any;
}

const BackgroundVideoComponentStyle: React.CSSProperties = {
    position: "fixed", 
    top: "-50%", 
    left: "-50%", 
    width: "200%", 
    height: "200%",
    zIndex: -99
}

export function BackgroundVideoComponent(props: IBackgroundVideoComponentProps) {
    return (
        <video autoPlay muted loop style={BackgroundVideoComponentStyle}>
            <source src={props.src} type="video/mp4"/>
            Your browser does not support HTML5 video
        </video>
    )
}