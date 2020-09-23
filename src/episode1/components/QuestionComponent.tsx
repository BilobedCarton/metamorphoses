import React from "react";
import { AutoSizeTextAreaComponent } from "../../shared/components/AutoSizeTextAreaComponent";

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
            <AutoSizeTextAreaComponent
                style={props.textStyle}
                value={props.answer}
                onValueChanged={props.onAnswerChanged}
            />
            {/* <textarea 
                rows={1}
                style={props.textStyle}
                value={props.answer} 
                onChange={(event) => props.onAnswerChanged(event.target.value)}
            /> */}
        </div>
    );
}