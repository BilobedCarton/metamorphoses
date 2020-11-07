import React from "react";
import { useHistory } from "react-router";
import "../program.css";

type IProgramViewProps = {
    style?: React.CSSProperties;
}

export const ProgramViewContainer: React.FC<IProgramViewProps> = (props) => {
    const history = useHistory();

    return (
        <div className="Program-Container" style={props.style}>
            <button className="Program-Button" onClick={() => history.push("/")}>HOME</button>
            <div className="Program-Content">
                {props.children}
            </div>
        </div>
    )
}