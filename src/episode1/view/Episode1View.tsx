import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { EpisodeComponent } from "../../shared/components/EpisodeComponent";
import { QuestionComponent } from "../components/QuestionComponent";

const background = require("../../assets/ep1.mp4");

const Episode1Style: React.CSSProperties = {
    color: "black"
}

const Q_STR_ARR = [ 
    "What would your wish be?", 
    "What would change about your life?", 
    "What might be the drawbacks?" 
];

export function Episode1View(props: any) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(["", "", ""]);
    const [share, setShare] = useState(true);

    const history = useHistory();

    function renderCurrentQuestion() {
        return (
            <QuestionComponent
                textStyle={{
                    padding: "8px 16px",
                    margin: "8px",
                    border: "3px solid black",
                    backgroundColor: "transparent",
                    fontSize: "18px"
                }}
                question={Q_STR_ARR[currentQuestion]}
                answer={answers[currentQuestion]}
                onAnswerChanged={(answer) => {
                    let currAnswers = [...answers];
                    currAnswers[currentQuestion] = answer;
                    setAnswers(currAnswers);
                }}
            />
        );
    }

    function renderAllAnswers() {
        return (
            <div>
                {answers.map((answer, i) => (
                    <p>{Q_STR_ARR[i] + ": " + answer}</p>
                ))}
            </div>
        )
    }

    return (
        <EpisodeComponent
            style={Episode1Style}
            backgroundIsVideo={true}
            backgroundSrc={background}
            videoTitle={"Episode 1"}
            videoSrc={"https://player.vimeo.com/video/76979871"}
            episodeNumber={1}    
        >
            {currentQuestion < 3 
                ? <div>
                    {renderCurrentQuestion()}
                    <div>
                        {currentQuestion !== 0 
                            ? <button className={"Episode Episode-One "} 
                                onClick={() => {
                                    setCurrentQuestion(Math.max(0, currentQuestion - 1))
                                }}>Previous</button> 
                            : null
                        }
                        <button className={"Episode Episode-One"}
                            onClick={() => {
                                setCurrentQuestion(currentQuestion + 1)
                            }}
                        >{currentQuestion !== 2 ? "Next" : "Finish"}</button>
                    </div>
                    { currentQuestion === 2 
                        ? <div style={{ display: "inline-block" }}>
                            <label>
                                <input className={"Episode-One"} type="checkbox" checked={share} onChange={
                                    (event) => setShare(event.target.checked)
                                }/> 
                                Share with other audience members
                            </label>
                        </div> : null
                    }
                </div>
                : <div>
                    {renderAllAnswers()}
                    <div>
                        <button className={"Episode Episode-One"}
                            onClick={() => {history.push("episode-one/answers")}}
                        > See What Other People Answered </button>
                    </div>
                </div>
            }
        </EpisodeComponent>
    );
}