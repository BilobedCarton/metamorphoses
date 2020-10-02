import React, { useState } from "react"
import { Ep2ImageComponent } from "./Ep2ImageComponent";
import { UploadImageComponent } from "./UploadImageComponent";

export const Ep2InteractiveComponent = (props: any) => {
    const [imageUploaded, setImageUploaded] = useState(false);
    const [title, setTitle] = useState("");
    const [share, setShare] = useState(false)

    return (
        <div>
            { imageUploaded 
                ? <Ep2ImageComponent 
                    src="" 
                    title={title} 
                    share={share}
                    onTitleChanged={setTitle} 
                    onClickDone={()=>{}} 
                    onShareChecked={setShare}/>
                : <UploadImageComponent onImageUpload={() => setImageUploaded(true)}/>
            }
        </div>
    )
}