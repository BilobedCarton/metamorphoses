import React from "react";

type IEp2ImageComponentProps = {
    src: string;
    title: string;
    share: boolean;
    done: boolean;
    onTitleChanged: (value: string) => void;
    onShareChecked: (checked: boolean) => void;
    onClickDone: () => void;
}

export const Ep2ImageComponent = (props: IEp2ImageComponentProps) => {
    return (
        <div style={{ display: "inline"}}>
            { !props.done ?
                <div>
                    <img src={props.src} alt={"Your nightmare"} style={{ width: "min(80vmin, 500px)" }}/>
                    <div>
                        <input 
                            className="Episode-Two"
                            type="text" 
                            value={props.title}
                            placeholder="Give it a title..."
                            maxLength={100}
                            onChange={(event) => props.onTitleChanged(event.target.value)}
                        />
                    </div>
                    <div style={{ display: "inline-block" }}>
                        <label>
                            <input className={"Episode-Two"} type="checkbox" checked={props.share} onChange={
                                (event) => props.onShareChecked(event.target.checked)
                            }/> 
                            Share with other audience members <br/> <i>(Please note that your submission may not be available until tomorrow.)</i>
                        </label>
                    </div>
                    <div>
                        <button 
                            className="Episode Episode-Two" 
                            style={{ marginTop: "10px" }}
                            onClick={() => { props.onClickDone(); }}
                        > Finish </button>
                    </div>
                </div>
                : <div style={{ marginTop: "2vh" }}>
                    <div>
                        <b style={{ fontSize: "min(3vh, 3rem)" }}>{ props.title }</b>
                    </div>
                    <img src={props.src} alt={"Your nightmare."} style={{ width: "min(80vmin, 500px)" }}/>
                </div>
            }
        </div>
    );
}