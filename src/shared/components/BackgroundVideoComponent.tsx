import React from "react";

type IBackgroundComponentProps = {
    src: any;
    backgroundColor: string
}

const BackgroundComponentStyle: React.CSSProperties = {
    position: "fixed", 
    top: "-20%", 
    left: "0%", 
    width: "100%", 
    height: "140%",
    objectFit: "cover",
    zIndex: -99
}

export function BackgroundVideoComponent(props: IBackgroundComponentProps) {
    return (
        <video autoPlay muted loop style={{...BackgroundComponentStyle, backgroundColor: props.backgroundColor}}>
            <source src={props.src} type="video/mp4"/>
            Your browser does not support HTML5 video
        </video>
    )
}

export function BackgroundImageComponent(props: IBackgroundComponentProps) {
    return (
        <img style={{...BackgroundComponentStyle, backgroundColor: props.backgroundColor}} src={props.src} alt=""/>
    )
}