import React from "react";
import { useEffect, useRef } from "react";

type IAutoSizeTextAreaComponentProps = {
    style?: React.CSSProperties;
    value: string;
    onValueChanged: (value: string) => void;
}

const defaultStyle: React.CSSProperties = {
    display: "inline-block",
    overflow: "hidden",
    resize: "none",
    outline: "none"
}

export function AutoSizeTextAreaComponent(props: IAutoSizeTextAreaComponentProps) {
    const textareaRef = useRef<any>();

    useEffect(() => {
        textareaRef.current.style.height = "0px";
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = scrollHeight + "px";
    }, [ props.value ]);

    return (
        <textarea
            ref={textareaRef}
            style={{...defaultStyle, ...props.style}}
            rows={1}
            value={props.value}
            onChange={(event) => props.onValueChanged(event.target.value)}
        />
    );
}