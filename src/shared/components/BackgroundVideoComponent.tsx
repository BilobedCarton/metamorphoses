import React from "react";

type IBackgroundComponentProps = {
    src: any;
}

const BackgroundComponentStyle: React.CSSProperties = {
    position: "fixed", 
    top: "-50%", 
    left: "-50%", 
    width: "200%", 
    height: "200%",
    zIndex: -99
}

export function BackgroundVideoComponent(props: IBackgroundComponentProps) {
    return (
        <video autoPlay muted loop style={BackgroundComponentStyle}>
            <source src={props.src} type="video/mp4"/>
            Your browser does not support HTML5 video
        </video>
    )
}

export function BackgroundImageComponent(props: IBackgroundComponentProps) {
    return (
        <img style={{...BackgroundComponentStyle, backgroundColor: "black"}} src={props.src} alt=""/>
    )
}