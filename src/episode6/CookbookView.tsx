import React from "react";
import { useHistory } from "react-router";
import { BackgroundVideoComponent } from "../shared/components/BackgroundVideoComponent";

const background = require("../assets/ep6.MP4");

export const CookbookView = (props: any) => {
    const history = useHistory();
    return (
        <div>
            <BackgroundVideoComponent src={background}  backgroundColor={"seashell"}/>
            <div><button 
                style = {{ marginTop: "5vh" }}
                className="Episode Episode-Six" 
                onClick={() => history.push("/episode-six")}
            >EPISODE 6</button></div>
            <iframe 
                title="Cookbook"
                allowFullScreen 
                allow="fullscreen" 
                style={{ border: "none", width: "70vmin", height: "70vmin" }} 
                src="//e.issuu.com/embed.html?backgroundColor=%00000000&backgroundColorFullscreen=%00000000&d=orange_juice_issue_1_b0ceb817d77d59&hideIssuuLogo=true&hideShareButton=true&pageNumber=1&u=ds_demo">
            </iframe>
        </div>
    )
}