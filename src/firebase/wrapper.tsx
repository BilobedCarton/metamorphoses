import React from "react"
import { FirebaseContext } from "."

export const withFirebase = (InternalComponent: React.FunctionComponent<any>) => (props: any) => {
    return (
        <FirebaseContext.Consumer>
            {firebase => <InternalComponent {...props} firebase={firebase} />}
        </FirebaseContext.Consumer>
    );
}