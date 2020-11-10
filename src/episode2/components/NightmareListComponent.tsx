import React, { useEffect, useState } from "react";
import _ from "lodash";
import { NightmareComponent } from "./NightmareComponent";
import { ImageMetadata } from "../../firebase/firebase";

type INightmareListComponentProps = {
    items: ImageMetadata[]
}

export const NightmareListComponent = (props: INightmareListComponentProps) => {
    const [ columns, setColumns ] = useState(Math.floor(window.innerWidth / 360));

    useEffect(() => {
        const calculateColumns = () => {
            const newColumns = Math.floor(window.innerWidth / 360);
            setColumns(newColumns);
        };

        window.addEventListener('resize', calculateColumns);
    }, []);

    return (
        <div className="Nightmare-List-Container">
            {_.map(props.items, (item, i) => {
                return (
                    <NightmareComponent 
                        style={{ gridColumn: columns > 0 ? i % columns + 1 : "auto" }}
                        title={item.title} 
                        fileUrl={item.url} 
                        key={"nightmare-" + item.key}
                    />
                )
            })} 
        </div>
    );
}