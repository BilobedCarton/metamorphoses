import React from "react";

const endpoint = "https://api.cloudinary.com/v1_1/${cloudName}/upload";

type IUploadImageComponentProps = {
    onImageUpload: () => void;
}

// todo actually open upload image dialog

export const UploadImageComponent = (props: IUploadImageComponentProps) => {
    return (
        <button className={"Episode-Two"} style={{width: "180px"}} onClick={() => props.onImageUpload()}>
                <p>Show us your <b>NIGHTMARE</b></p>
        </button>
    );
}