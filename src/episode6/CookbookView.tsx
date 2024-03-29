import React from "react";
import { useHistory } from "react-router";
import { BackgroundVideoComponent } from "../shared/components/BackgroundVideoComponent";

const background = require("../assets/ep6.MP4"); // "https://drive.google.com/uc?export=view&id=18GTrF1c3t8Vpru1lKMbfjhrIlsusX2Bi";

export const CookbookView = (props: any) => {
    const history = useHistory();
    return (
        <div>
            <BackgroundVideoComponent src={background}  backgroundColor={"seashell"}/>
            <div>
                <button 
                    style = {{ marginTop: "5vh" }}
                    className="Episode Episode-Six" 
                    onClick={() => history.push("/episode-six")}
                >EPISODE 6</button>
                <button 
                    style = {{ marginTop: "5vh" }}
                    className="Episode Episode-Six" 
                    onClick={() => history.push("/")}
                >HOME</button>
            </div>
            <iframe 
                title="Cookbook"
                allowFullScreen 
                allow="fullscreen" 
                style={{ border: "none", width: "70vmin", height: "70vmin", marginTop: "3vh" }} 
                src="//e.issuu.com/embed.html?backgroundColor=%00000000&backgroundColorFullscreen=%00000000&d=meta_cookbook&hideIssuuLogo=true&hideShareButton=true&pageNumber=1&u=erinmsolomon">
            </iframe>
        </div>
    )
}