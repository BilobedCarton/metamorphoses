import React from "react";

type IQuestionComponentProps = {
    textStyle: React.CSSProperties
    question: string;
    answer: string;
    onAnswerChanged: (answer: string) => void;
}

const QuestionComponentStyle: React.CSSProperties = {
    
}

export function QuestionComponent(props: IQuestionComponentProps) {
    return (
        <div style={QuestionComponentStyle}>
            <p>{props.question}</p>
            <textarea 
                style={props.textStyle}
                value={props.answer} 
                onChange={(event) => props.onAnswerChanged(event.target.value)}
            />
        </div>
    );
}