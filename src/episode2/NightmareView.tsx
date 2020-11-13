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

const background = "https://drive.google.com/uc?export=view&id=1JbBoah27ybnj0NO2oxWwIg-8aHnnpZGY";

const NightmareView = (props: INightmareViewProps) => {
    const [ images, setImages ] = useState<ImageMetadata[]>([]);

    const history = useHistory();

    useEffect(() => {
        const cleanupFunction = props.firebase.ep2ImageMetadataEntries((data) => {
            setImages(data);
        });

        return cleanupFunction;
    }, [props.firebase])

    return (
        <div>
            <BackgroundVideoComponent src={background} backgroundColor={"royalblue"}/>
            <button className= "Episode Episode-Two Nightmare-Nav" onClick={() => history.push("/episode-two")}>EPISODE 2</button>
            <div className="Nightmare-Title"><b>NIGHTMARES</b></div>
            <NightmareListComponent items={images}/>
        </div>
    )
}

export const ContextualNightmareView = withFirebase(NightmareView);