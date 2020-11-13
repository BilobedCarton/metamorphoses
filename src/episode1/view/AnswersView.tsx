import React, { useEffect, useState } from "react";
import { FunctionComponent } from "react";
import { useHistory } from "react-router";
import Firebase, { withFirebase } from "../../firebase";
import { AnswerMetadata } from "../../firebase/firebase";
import { BackgroundVideoComponent } from "../../shared/components/BackgroundVideoComponent";
import "../css/answers.css";

interface IAnswerViewProps {
    firebase: Firebase;
}

const background = require("../../assets/ep1.mp4"); //"https://drive.google.com/uc?export=view&id=1D5-KPp8TzuMPp2zxGFk0_wnL8cGfkf5V";

const AnswerView : FunctionComponent<IAnswerViewProps> = (props) => {
    const [ answers, setAnswers ] = useState<AnswerMetadata[]>([]);
    const [ idx, setIdx ] = useState(-1);

    const history = useHistory();

    useEffect(() => {
        return props.firebase.ep1Answers((data) => {
            setAnswers(data);
            setIdx(0);
        });
    }, [props.firebase]);

    // console.log(answers);

    const renderSelectedAnswers = () => {
        const answerSet = answers[idx];

        return (
            <div className="Answers-Container">
                <p className="Question">What would your wish be?</p>
                <p className="Answer">{answerSet.wish}</p>
                <br/>
                <p className="Question">What would change about your life?</p>
                <p className="Answer">{answerSet.changes}</p>
                <br/>
                <p className="Question">What might be the drawbacks?</p>
                <p className="Answer">{answerSet.drawbacks}</p>
            </div>
        )
    }

    return (
        <div>
            <BackgroundVideoComponent src={background} backgroundColor="gold" />
            <button className="Episode Episode-One Answers-Exit" onClick={() => history.push("/episode-one/finished=true")}>EPISODE 1</button>
            <p className="Answer-Nav-Text">{idx + 1} / {answers.length}</p>
            <button className="Episode Episode-One Answer-Nav" onClick={() => { setIdx(Math.max(idx - 1, 0)) }}>PREVIOUS</button>
            <button className="Episode Episode-One Answer-Nav" onClick={() => { setIdx(Math.min(idx + 1, answers.length - 1)) }}>NEXT</button>
            <div>
                { idx >= 0
                    ? renderSelectedAnswers()
                    : null
                }
            </div>
        </div>
    )
}

export const ContextualAnswerView = withFirebase(AnswerView);