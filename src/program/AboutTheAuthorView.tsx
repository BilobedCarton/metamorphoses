import React from "react"
import { ProgramViewContainer } from "./components/ProgramViewContainer"
import "./program.css"

const photo = require("../assets/hub/zimmerman.png");

export const AboutTheAuthorView = (props: any) => {
    return (
        <ProgramViewContainer style={{ height: "105vmin" }}>
            <div className="Playwright">
                <div className="Playwright-Title">
                    ABOUT THE PLAYWRIGHT
                </div>
                <div className="Playwright-Body">
                    <div className="Playwright-Photo-Section">
                        <img className="Playwright-Photo" src={photo} alt="Playwright"/>
                        <p className="Playwright-Photo-Text">
                        Mary Zimmerman is an award-winning
                        director and playwright known for her
                        adaptations of classic works of literature
                        and her unique style of creating theatre.
                        <br/> <br/>
                        Zimmerman is unique in not only writing
                        adaptations of plays, but continuing on
                        in the process and directing them as
                        well. She begins the rehearsal process
                        without a script and begins to write bit
                        by bit based on the interactions of the
                        actors during rehearsals. 
                        </p>
                    </div>
                    <p>
                        Zimmerman serves as an Artistic Associate at the Goodman
                        Theatre and the Seattle Repertory Theatre where she has written
                        and directed productions including The Jungle Book, White Snake,
                        Mirror of the Invisible World and The Odyssey. Opera directing
                        credits include Galileo Galilei, Lucia de Lammermoor, Armida, la
                        Sonnambula, Rsualka.
                        <br/><br/>
                        She has won numerous Jeff Awards including the award for New
                        Works for Journey to the West, New Adaptation for The Arabian
                        Nights and Argonautika: The Voyage of Jason and the Argonauts.
                        In 1998, Zimmerman won the MacArthur Fellowship for Theatrical
                        Arts. In 2002, her adaptation of Ovid’s Metamorphosis, landed
                        on Broadway and earned her a Tony Award for Best Direction of a
                        Play.
                        <br/><br/>
                        Zimmerman is a member of the Lookingglass Theatre Company in
                        Chicago, Illinois and is currently a Professor in Performance Studies
                        at her alma mater Northwestern University
                    </p>
                </div>
            </div>
        </ProgramViewContainer>
    );
}