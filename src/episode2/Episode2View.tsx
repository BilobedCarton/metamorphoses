import React from "react";
import { EpisodeComponent } from "../shared/components/EpisodeComponent"


export const Episode2View = (props: any) => {
    return (
        <div>
            <EpisodeComponent
                title="Episode 2"
                source="https://player.vimeo.com/video/76979871"
            />
        </div>
    );
}