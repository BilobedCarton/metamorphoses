import React, { FunctionComponent, useEffect, useState } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom"
import Firebase, { withFirebase } from "../../firebase";
import { EpisodeComponent } from "../../shared/components/EpisodeComponent";
import { QuestionComponent } from "../components/QuestionComponent";

const background = require("../../assets/ep1.mp4"); //"https://drive.google.com/uc?export=view&id=1D5-KPp8TzuMPp2zxGFk0_wnL8cGfkf5V";

const Episode1Style: React.CSSProperties = {
    color: "black"
}

const Q_STR_ARR = [ 
    "What would your wish be?", 
    "What would change about your life?", 
    "What might be the drawbacks?" 
];

interface RouteInfo {
    finished: string;
}

interface IEpisode1ViewProps extends RouteComponentProps<RouteInfo> {
    firebase: Firebase;
}

const Episode1View: FunctionComponent<IEpisode1ViewProps> = (props: IEpisode1ViewProps) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(["", "", ""]);
    const [share, setShare] = useState(localStorage.getItem("share") ? localStorage.getItem("share") === "true" : true);

    const history = useHistory();

    useEffect(() => {
        setAnswers((answers) => {
            let newAnswers = [...answers];
            newAnswers[0] = localStorage.getItem("wish") ? localStorage.getItem("wish") as string : answers[0];
            newAnswers[1] = localStorage.getItem("changes") ? localStorage.getItem("changes") as string : answers[1];
            newAnswers[2] = localStorage.getItem("drawbacks") ? localStorage.getItem("drawbacks") as string : answers[2];
            return newAnswers
        });
        setCurrentQuestion(props.match.params.finished === "true" ? 3 : 0);
    }, [props.match.params.finished]);

    function renderCurrentQuestion() {
        return (
            <QuestionComponent
                textStyle={{
                    padding: "1vmax 16px",
                    margin: "8px",
                    border: "3px solid black",
                    backgroundColor: "transparent",
                    fontSize: "min(3vmin, 1.5rem)",
                    width: "50vw",
                    maxWidth: "450px"
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
        const small = window.innerWidth < 1000;
        return (
            <div style={{ display: small ? "block" : "flex", marginLeft: small ? "25vw" : "5vw", marginBottom: small ? "0" : "3vh" }}>
                {answers.map((answer, i) => (
                    <div key={"answer-" + i} style={{ width: small ? "50vw" : "28vw", marginRight: small ? "0vw" : "1vw", marginLeft: small ? "0vw" : "1vw" }}>
                        <b>{Q_STR_ARR[i]}</b>
                        <p>{answer}</p>
                    </div>
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
            videoSrc={"https://player.vimeo.com/video/479080161"}
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
                                }}>PREVIOUS</button> 
                            : null
                        }
                        <button className={"Episode Episode-One"}
                            onClick={() => {
                                if (currentQuestion === 2) {
                                    localStorage.setItem("wish", answers[0]);
                                    localStorage.setItem("changes", answers[1]);
                                    localStorage.setItem("drawbacks", answers[2]);
                                    if(share) props.firebase.addEp1Answer(answers[0], answers[1], answers[2]);
                                }
                                setCurrentQuestion(currentQuestion + 1)
                            }}
                        >{currentQuestion !== 2 ? "NEXT" : "FINISH"}</button>
                    </div>
                    { currentQuestion === 2 
                        ? <div style={{ display: "inline-block" }}>
                            <label>
                                <input className={"Episode-One"} type="checkbox" checked={share} onChange={
                                    (event) => {
                                        setShare(event.target.checked);
                                        localStorage.setItem("share", event.target.checked ? "true" : "false");
                                    }
                                }/> 
                                Share with other audience members <br/> <i>(Please note that your submission may not be available until tomorrow.)</i>
                            </label>
                        </div> : null
                    }
                </div>
                : <div>
                    {renderAllAnswers()}
                    <div>
                        <button className={"Episode Episode-One"}
                            onClick={() => {history.push("/answers")}}
                        > SEE WHAT OTHER PEOPLE ANSWERED </button>
                    </div>
                </div>
            }
            {
                currentQuestion < 3 && localStorage.getItem("wish") 
                    ? <button className="Episode Episode-One" onClick={() => history.push("/answers")}>ANSWERS</button>
                    : null
            }
        </EpisodeComponent>
    );
}

export const ContextualEpisode1View = withFirebase(Episode1View);