import React, { useRef } from "react";

type IUploadImageComponentProps = {
    onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// todo actually open upload image dialog

export const UploadImageComponent = (props: IUploadImageComponentProps) => {
    const imageUploader = useRef<HTMLInputElement>(null);

    return (
        <div>
            <input 
                ref={imageUploader} 
                type="file" 
                onChange={props.onImageUpload} 
                multiple={false} 
                accept="image/*"
                style={{ display:"none" }}
            />
            <button className={"Episode Episode-Two"} style={{width: "28vw"}} onClick={() => imageUploader!.current!.click()}>
                <p>SHOW US YOUR <b style={{ fontWeight: "bolder" }}>NIGHTMARE</b></p>
            </button>
        </div>
        
    );
}