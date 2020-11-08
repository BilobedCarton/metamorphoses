import React from "react"
import { RouteComponentProps } from "react-router";
import { ProgramViewContainer } from "./components/ProgramViewContainer"

interface RouteInfo {
    from: string;
}

interface IBehindTheScenesViewProps extends RouteComponentProps<RouteInfo> {}

export const BehindTheScenesView = (props: IBehindTheScenesViewProps) => {
    return (
        <ProgramViewContainer navTo={props.match.params.from === "6" ? { url: "/episode-six", label: "EPISODE 6" } : undefined }>
            <div>
                Behind the scenes
            </div>
        </ProgramViewContainer>
    )
}