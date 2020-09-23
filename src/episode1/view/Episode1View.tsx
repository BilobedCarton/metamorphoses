import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { BackgroundVideoComponent } from "../../shared/components/BackgroundVideoComponent";
import { EpisodeComponent } from "../../shared/components/EpisodeComponent";
import { QuestionComponent } from "../components/QuestionComponent";

const background = require("../../assets/ep1.mp4");

const Episode1Style: React.CSSProperties = {
    color: "black"
}

const Q_STR_ARR = [ 
    "Q1", 
    "Q2", 
    "Q3" 
];

export function Episode1View(props: any) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(["", "", ""]);

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
        <div style={Episode1Style}>
            <BackgroundVideoComponent src={background}/>
            <EpisodeComponent
                title="Test"
                source="https://player.vimeo.com/video/76979871"
            />
            {currentQuestion < 3 
                ? <div>
                    {renderCurrentQuestion()}
                    <div>
                        {currentQuestion !== 0 
                            ? <button className={"Episode-One "} 
                                onClick={() => {
                                    setCurrentQuestion(Math.max(0, currentQuestion - 1))
                                }}>Previous</button> 
                            : null
                        }
                        <button className={"Episode-One"}
                            onClick={() => {
                                setCurrentQuestion(currentQuestion + 1)
                            }}
                        >{currentQuestion !== 2 ? "Next" : "Finish"}</button>
                    </div>
                </div>
                : <div>
                    {renderAllAnswers()}
                    <div>
                        <button className={"Episode-One"}
                            onClick={() => {history.push("1/answers")}}
                        > See What Other People Answered </button>
                        <button className={"Episode-One"} 
                            onClick={() => {history.push("2")}}
                        > Next Episode </button>
                    </div>
                </div>
            }
        </div>
    );
}