import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Firebase, { withFirebase } from "../firebase"
import { ImageMetadata } from "../firebase/firebase";
import { BackgroundVideoComponent } from "../shared/components/BackgroundVideoComponent"
import { NightmareListComponent } from "./components/NightmareListComponent";

import "./css/nightmares.css";

type INightmareViewProps = {
    firebase: Firebase
}

const background = require("../assets/ep2.mp4"); // "https://drive.google.com/uc?export=view&id=1JbBoah27ybnj0NO2oxWwIg-8aHnnpZGY";

const NightmareView = (props: INightmareViewProps) => {
    const [ images, setImages ] = useState<ImageMetadata[]>([]);
    const [ refresh, setRefresh ] = useState(false);

    const history = useHistory();

    useEffect(() => {
        const cleanupFunction = props.firebase.ep2ImageMetadataEntries((data) => {
            setImages(data);
        });

        return cleanupFunction;
    }, [props.firebase, refresh])

    return (
        <div>
            <BackgroundVideoComponent src={background} backgroundColor={"royalblue"}/>
            <button className= "Episode Episode-Two Nightmare-Nav" onClick={() => history.push("/episode-two")}>EPISODE 2</button>
            <div className="Nightmare-Title"><b>NIGHTMARES</b></div>
            <button className="Episode Episode-Two" onClick={() => setRefresh(true)} style={{ fontSize: "min(2.5vmax, 1.25rem)" }}> REFRESH </button>
            <NightmareListComponent items={images}/>
        </div>
    )
}

export const ContextualNightmareView = withFirebase(NightmareView);