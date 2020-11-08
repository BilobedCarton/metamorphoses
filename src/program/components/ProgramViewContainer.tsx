import React from "react";
import { useHistory } from "react-router";
import "../program.css";

type NavToParams = {
    url: string;
    label: string;
}

type IProgramViewProps = {
    style?: React.CSSProperties;
    navTo?: NavToParams;
}

export const ProgramViewContainer: React.FC<IProgramViewProps> = (props) => {
    const history = useHistory();

    return (
        <div className="Program-Container" style={props.style}>
            <button className="Program-Button" onClick={() => history.push(props.navTo ? props.navTo.url : "/")}>{props.navTo ? props.navTo.label : "HOME"}</button>
            <div className="Program-Content">
                {props.children}
            </div>
        </div>
    )
}