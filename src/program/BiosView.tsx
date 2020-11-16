import React from "react";
import { useHistory } from "react-router";
import { ProgramViewContainer } from "./components/ProgramViewContainer"

// const headshots= {
//     somaiya: "1XNR7eUZUirndpDYrhnfQrrIUCUzb1msp",
//     maddie: "13GQwnTrn7B1hqqIO_VFXjJyOJh4TG4Ij",
//     rory: "1xAK1NHwRg-ZM1Y2caTHpWbAUW2193J2B",
//     peri: "1jCTR3J5ioxt10T23zeqvIm1LLCvrHc59",
//     christian: "1qSsmTw-S9EjIbcN4RaC2KQQHnlrYYJkn",
//     madi: "1SxXvviwcwpPs6tGGH4hSqHwXao78DKlV",
//     catherine: "1RhUX9bkINDWNtlmT0gwu554DJFAooUen",
//     kaitlyn: "1OOh6tkxnGyYAV3lbg360B_P4MPvacuSi",
//     evan: "1iYY7Uq2HbVak0kOeC4rJUDpLYxihZ01f",
//     carla: "1rjprqfhV0dOx5qTfJUsn7egHa08gFVcV",
//     ella: "10jNov44v4J_A-_UikQ1-_qU1x2w8BWGZ",
//     alyse: "1mWMFHo5rQAWr-MHj51pougM0kpMtf89a",
//     sydney: "1Maik1MwLrkBiiazqOw7wIFlyENpTnCVw"
// }

export const BiosView = (props: any) => {
    const history = useHistory();

    return (
        <div>
            <button className="Program-Button" style={{ position: "absolute", left: "unset", right: "0vw", top: "0vh" }} onClick={() => history.push("/credits")}> CREDITS </button>
            <ProgramViewContainer>
                <iframe 
                    title="Program"
                    allowFullScreen 
                    allow="fullscreen" 
                    style={{ border: "none", width: "70vmin", height: "70vmin", marginTop: "3vh" }} 
                    src="//e.issuu.com/embed.html?backgroundColor=%00000000&backgroundColorFullscreen=%00000000&d=meta_program_final&hideIssuuLogo=true&hideShareButton=true&pageNumber=1&u=erinmsolomon">
                </iframe>
            </ProgramViewContainer>
        </div>
    );
}