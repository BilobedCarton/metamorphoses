import React, { useEffect, useState } from "react"
import { useHistory } from "react-router";
import Firebase, { withFirebase } from "../../firebase";
import { Ep2ImageComponent } from "./Ep2ImageComponent";
import { UploadImageComponent } from "./UploadImageComponent";

type IEp2InteractiveComponentProps = {
    firebase: Firebase;
}

type ImageMetadata = {
    title: string;
    key: string;
}

const Ep2InteractiveComponent = (props: IEp2InteractiveComponentProps) => {
    const [ title, setTitle ] = useState("");
    const [ share, setShare ] = useState(localStorage.getItem("share") ? localStorage.getItem("share") === "true" : false);
    const [ image, setImage ] = useState<string | ArrayBuffer | null>(null);
    const [ imageFile, setImageFile ] = useState<File | null>(null);
    const [ done, setDone ] = useState(false);
    const [ scrollToBottom, setScrollToBottom ] = useState(false);

    const history = useHistory();

    const onImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const [file] = e.target.files;
        if(file) {
            setImageFile(file);

            const reader = new FileReader();
            
            reader.onload = (e) => {
                e.target && setImage(e.target.result);
                setScrollToBottom(true);
            }
            reader.readAsDataURL(file);

        }
    }

    useEffect(() => {
        const imageUid = localStorage.getItem("imageUid")
        if(imageUid) {
            let imageMetadata: ImageMetadata | null = null;
            props.firebase.ep2ImageMetadataEntryRef(imageUid!).on("value", (snapshot) => {
                imageMetadata = snapshot.val();
                setTitle(imageMetadata!.title);
                props.firebase.ep2ImageFileRef(imageMetadata!.key).getDownloadURL().then((url) => setImage(url));
                setDone(true);
            });
            return () => props.firebase.ep2ImageMetadataEntryRef(imageUid!).off();
        }
        if(scrollToBottom && !imageUid) {
            window.scrollTo(0, document.body.scrollHeight);
        }
    }, [scrollToBottom, props.firebase])

    return (
        <div>
            { done
                ? <div>
                    <button className="Episode Episode-Two" onClick={() => history.push("/nightmares")}>SEE PEOPLE'S NIGHTMARES</button>
                </div>
                : null
            }
            { image
                ? <Ep2ImageComponent 
                    src={image as string} 
                    title={title} 
                    share={share}
                    done={done}
                    onTitleChanged={setTitle} 
                    onClickDone={()=>{
                        if(share) {
                            const imageUid = props.firebase.addEp2Image(imageFile, title);
                            if(imageUid === null) throw new Error("Image failed to upload.");
                            localStorage.setItem("imageUid", imageUid!);
                        }
                        setDone(true);
                    }} 
                    onShareChecked={(checked) => {
                        setShare(checked);
                        localStorage.setItem("share", checked ? "true" : "false");
                    }}/>
                : <UploadImageComponent onImageUpload={onImageUpload}/>
            }
        </div>
    )
}

export const ContextualEp2InteractiveComponent = withFirebase(Ep2InteractiveComponent);