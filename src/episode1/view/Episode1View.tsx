import React, { useState } from "react";
import { EpisodeComponent } from "../../shared/components/EpisodeComponent";
import { QuestionComponent } from "../components/QuestionComponent";

const Episode1Style: React.CSSProperties = {
    color: "gold"
}

export function Episode1View(props: any) {
    const [drunkenSailorAnswer, setDrunkenSailorAnswer] = useState("");

    return (
        <div style={Episode1Style}>
            <EpisodeComponent
                title="Test"
                source="https://player.vimeo.com/video/76979871"
            />
            <QuestionComponent
                question={"What do you do with a drunken sailor?"}
                answer={drunkenSailorAnswer}
                onAnswerChanged={setDrunkenSailorAnswer}
            />
            <p>{drunkenSailorAnswer}</p>
        </div>
    );
}