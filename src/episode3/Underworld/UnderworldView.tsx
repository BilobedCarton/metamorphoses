import React from "react"
import { useHistory } from "react-router"

export const UnderworldView = (props: any) => {
    const history = useHistory();

    return (
        <div>
            This is the underworld
            <button onClick={() => history.push("/episode-three")}>Return to the surface</button>
        </div>
    )
}