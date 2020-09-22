import React from "react"
import { useHistory } from "react-router"

export function HubView(props: any) {
    const history = useHistory();
    return (
        <div>
            <button onClick={() => history.push("/episode-one")}>Episode 1</button>
            <button onClick={() => history.push("/episode-two")}>Episode 2</button>
            <button onClick={() => history.push("/episode-three")}>Episode 3</button>
            <button onClick={() => history.push("/episode-four")}>Episode 4</button>
            <button onClick={() => history.push("/episode-five")}>Episode 5</button>
            <button onClick={() => history.push("/episode-six")}>Episode 6</button>
        </div>
    );
}