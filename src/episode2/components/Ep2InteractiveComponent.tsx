import React, { useState } from "react"
import { Ep2ImageComponent } from "./Ep2ImageComponent";
import { UploadImageComponent } from "./UploadImageComponent";

export const Ep2InteractiveComponent = (props: any) => {
    const [title, setTitle] = useState("");
    const [share, setShare] = useState(false);
    const [image, setImage] = useState<string | ArrayBuffer | null>(null)

    const onImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const [file] = e.target.files;
        if(file) {
            const reader = new FileReader();
            
            reader.onload = (e) => {
                e.target && setImage(e.target.result);
            }
            reader.readAsDataURL(file);
        }

    }

    return (
        <div>
            { image
                ? <Ep2ImageComponent 
                    src={image as string} 
                    title={title} 
                    share={share}
                    onTitleChanged={setTitle} 
                    onClickDone={()=>{}} 
                    onShareChecked={setShare}/>
                : <UploadImageComponent onImageUpload={onImageUpload}/>
            }
        </div>
    )
}