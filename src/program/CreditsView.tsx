import React from "react"
import { ProgramViewContainer } from "./components/ProgramViewContainer"

export const CreditsView = (props: any) => {
    return (
        <ProgramViewContainer>
            <div className="Credits">
                <p>
                    NORTHEASTERN UNVIERSITY
                    <br/>
                    DEPARTMENT OF THEATRE PRESENTS
                </p>
                <p>
                    METAMORPHOSES
                    <br/><br/>
                    by Mary Zimmerman
                </p>
                <p>
                    Directed by
                    <br/>
                    <b>Desir&eacute; Bennett</b>
                </p>
                <div className="Credits-Columns">
                    <div style={{ marginRight: "2vw", minWidth: "30vw" }}>
                        <p>
                            <b>Oliver Wason</b>
                            <br/>
                            Lighting &amp; Scenic Designer
                        </p>
                        <p>
                            <b>Jesse Timm</b>
                            <br/>
                            Sound Designer
                        </p>
                        <p>
                            <b>Josephine Ojakli</b>
                            <br/>
                            Production Assistant
                        </p>
                    </div>
                    <div style={{ minWidth: "30vw" }}>
                        <p>
                            <b>Frances McSherry</b>
                            <br/>
                            Costume Designer
                        </p>
                        <p>
                            <b>Matthew Hosking</b>
                            <br/>
                            Digital Experience Designer
                        </p>
                        <p>
                            <b>Miranda Acosta</b>
                            <br/>
                            Props Director
                        </p>
                    </div>
                </div>
                <p>
                    <b>Julia Chase &amp; Riley Cohen</b>
                    <br/>
                    Video Editing
                </p>
                <div className="Credits-Columns">
                    <div style={{ marginRight: "2vw", minWidth: "30vw" }}>
                        <p>
                            <b>Rachel Erwin</b>
                            <br/>
                            Costume Assistant
                        </p>
                    </div>
                    <div style={{ minWidth: "30vw" }}>
                        <p>
                            <b>Erin Solomon</b>
                            <br/>
                            Production Stage Manager
                        </p>
                    </div>
                </div>
                <div style={{ fontWeight: "lighter" }}>
                    <i>
                        SCENES FROM METAMORPHOSES is produced by special arrangement with
                        Bruce Ostler, BRET ADAMS, LTD., 448 West 44th Street, New York, NY 10036. 
                        <br/>
                        www.bretadamsltd.net 
                        <br/><br/>
                        METAMORPHOSES was originally produced by
                        <br/>
                        Lookingglass Theatre Company, Chicago, October 1998
                        <br/><br/>
                        Premiered in New York City by
                        <br/>
                        The Second Stage Theatre, New York, September, 2001
                        <br/>
                        Carole Rothman, Artistic Director; Carol Fisherman, Managing Director;
                        <br/>
                        Alexander Fraser, Executive Director
                        <br/><br/>
                        OVID’S METAMORPHOSES translated by David Slavitt,
                        <br/>
                        Johns Hopkins University Press, 1994
                    </i>
                </div>
            </div>
        </ProgramViewContainer>
    )
}