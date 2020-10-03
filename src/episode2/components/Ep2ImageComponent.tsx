import React, { useState } from "react";

type IEp2ImageComponentProps = {
    src: string;
    title: string;
    share: boolean
    onTitleChanged: (value: string) => void;
    onShareChecked: (checked: boolean) => void;
    onClickDone: () => void;
}

export const Ep2ImageComponent = (props: IEp2ImageComponentProps) => {
    const [done, setDone] = useState(false);

    return (
        <div style={{ display: "inline" }}>
            <img src={props.src} alt={"Hello there"} style={{ width: "250px" }}/>
            { !done ?
                <div>
                    <div>
                        <input 
                            className="Episode-Two"
                            type="text" 
                            value={props.title}
                            placeholder="Give it a title..."
                            onChange={(event) => props.onTitleChanged(event.target.value)}
                        />
                    </div>
                    <div style={{ display: "inline-block" }}>
                        <label>
                            <input className={"Episode-Two"} type="checkbox" checked={props.share} onChange={
                                (event) => props.onShareChecked(event.target.checked)
                            }/> 
                            Share with other audience members
                        </label>
                    </div>
                    <div>
                        <button 
                            className="Episode-Two" 
                            style={{ marginTop: "10px" }}
                            onClick={() => { props.onClickDone(); setDone(true) }}
                        > Finish </button>
                    </div>
                </div>
                : <div>
                    <p>{ props.title }</p>
                </div>
            }
        </div>
    );
}