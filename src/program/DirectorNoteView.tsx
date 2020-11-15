import React from "react"
import { ProgramViewContainer } from "./components/ProgramViewContainer"
import "./program.css"

export const DirectorNoteView = (props: any) => {
    return (
        <ProgramViewContainer style={{height: "100vh", minHeight: "575px"}}>
            <div className="Director-Note">
                <div className="Director-Note-Title">
                    A NOTE FROM THE DIRECTOR
                </div>
                <div className="Director-Note-Body">
                    Mary Zimmerman’s <i>Metamorphoses</i>, written in 1996, explores the
                    central human experiences of love, loss, and the transformation one
                    undergoes in the interim. This adaptation of Ovid’s allows us the
                    opportunity to analyze our relationships to our identity, to each other,
                    and to our natural and world. With water as a key actor in the play,
                    a mutable, inconstant, and healing element, the canonical myths of
                    Metamorphoses are given new life through each production, each
                    production its own adaptation.
                    <br/>
                    <br/>
                    Through a feminist lens, Zimmerman chooses to place this series of
                    vignettes within the hands of women narrators. By having women
                    tell stories previously dictated by men, she invites the audience to
                    view this story through a woman’s perspective. However, the need
                    for queer theatre stems from the destruction of the gender binary
                    which the patriarchy relies on to suppress queer, trans, and nonbinary people. 
                    As a queer artist, it was vital that this canonical text,
                    so rooted in patriarchal ideology, was brought to life by the unique
                    experiences of LGBTQIA+ artists.
                    <br/>
                    <br/>
                    Of course, this production has seen its own transformation
                    in the wake of COVID-19, which has transformed our society.
                    Theatre, however, has always been, since the Greeks, a key tool in
                    understanding our society. The creative team of Metamorphoses
                    believes that it is essential to explore the form of theatre itself in
                    relation to this period of social distancing and uncertainty alongside
                    overcoming the challenges that theatre has previously and will
                    continue to face after COVID, including representation, accessibility,
                    and sustainability.
                    <br/>
                    <br/>
                    Essential to this process has been the collaboration with and
                    inspiration from the ensemble as co-creators in the design and
                    technical aspects of the production. I’d like to give special thanks to
                    the Brigham family for allowing us to safely film at their home and
                    for introducing us to the beauty of Hull, MA; and to the team of
                    designers, staff, and students who together reimagined what theatre
                    could look like.
                </div>
                <div className="Director-Note-Footer">
                    - Des Bennett
                </div>
            </div>
        </ProgramViewContainer>
    )
}