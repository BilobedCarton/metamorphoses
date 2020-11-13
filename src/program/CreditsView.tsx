import React from "react"
import { useHistory } from "react-router"
import { ProgramViewContainer } from "./components/ProgramViewContainer"

export const CreditsView = (props: any) => {
    const history = useHistory();

    return (
        <ProgramViewContainer style={{ height: "240vh", minHeight: "1200px" }}>
            <button className="Program-Button" style={{ position: "fixed", left: "unset", right: "0vw", top: "0vh" }} onClick={() => history.push("/bios")}> Bios </button>
            <div className="Credits">
                <p className="Credits-Text-Medium">
                    NORTHEASTERN UNVIERSITY
                    <br/>
                    DEPARTMENT OF THEATRE PRESENTS
                </p>
                <div>
                    <p className="Credits-Text-Largest">SCENES FROM <b>METAMORPHOSES</b></p>
                    <p className="Credits-Text-Larger">
                        based on the Myths of Ovid <br/>
                        written and originally directed by <br/>
                        <b>Mary Zimmerman</b>
                    </p>
                </div>
                <p className="Credits-Text-Large">
                    Directed by
                    <br/>
                    <b>Desir&eacute; Bennett</b>
                </p>
                <div className="Credits-Columns  Credits-Text-Medium">
                    <div className="Credits-Column">
                        <p className="Credits-Column-Row">
                            <b>Oliver Wason</b>
                            <br/>
                            Lighting &amp; Scenic Designer
                        </p>
                        <p className="Credits-Column-Row">
                            <b>Jesse Timm</b>
                            <br/>
                            Sound Designer
                        </p>
                        <p className="Credits-Column-Row">
                            <b>Julia Chase &amp; Riley Cohen</b>
                            <br/>
                            Video Editing
                        </p>
                    </div>
                    <div className="Credits-Column">
                        <p className="Credits-Column-Row">
                            <b>Frances McSherry</b>
                            <br/>
                            Costume Designer
                        </p>
                        <p className="Credits-Column-Row">
                            <b>Matthew Hosking</b>
                            <br/>
                            Digital Experience Designer
                        </p>
                        <p className="Credits-Column-Row">
                            <b>Erin Solomon</b>
                            <br/>
                            Production Stage Manager
                        </p>
                    </div>
                </div>
                <div className="Credits-Text-Smaller">
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
                <div style={{ textAlign: "left", marginTop: "5vmin"}}>
                    <p className="Credits-Text-Large"><b>CAST</b></p>
                    <div className="Credits-Text-Small" style={{ display: "flex" }}>
                        <div>
                            <i>1st Laundress, Narrator 1, Sailor, Lucina</i> <br/>
                            <i>Midas, Sailor, Erysichthon, Cinyras, Eros</i> <br/>
                            <i>Alcyone, Eurydice, Erysichthon’s Mother, Nursemaid</i> <br/>
                            <i>3rd Laundress, Narrator 3, Scientist, Hunger</i> <br/>
                            <i>Therapist, Poseidon, Oread, Sleep, Fate, Woman at the Door, Narrator 4</i> <br/>
                            <i>Midas’ Daughter, Sailor, Spirit of the Tree, Phaeton</i> <br/>
                            <i>2nd Laundress, Narrator 2, Narcissus</i> <br/>
                            <i>Woman at the Water, Ceres, Myrrha, A, Hermes</i> <br/>
                            <i>Aphrodite, Fate, Baucis, Buyer</i> <br/>
                            <i>Iris, Persephone, Q, Pomona, Narrator 5</i> <br/>
                            <i>Servant, Ceyx/Morpheus, Orpheus, Apollo</i> <br/>
                            <i>Bacchus, Hades, Sailor, Psyche, Philemon</i> <br/>
                            <i>Silenus, Sisyphean, Vertumnus, Zeus</i>
                        </div>
                        <div style={{ textAlign: "right", position: "absolute", right: 0 }}>
                            Alyse Clinton <br/>
                            Christian "Mish" Culbert <br/>
                            Maddie Elsea <br/>
                            Kaitlyn Fiery <br/>
                            Ella Garfunkel <br/>
                            Catherine “Kitcat” Giorgetti <br/>
                            Peri Griffiths <br/>
                            Sydney Maloney <br/>
                            Carla McDonough <br/>
                            Rory O’Neill <br/>
                            Evan Penn <br/>
                            Somaiya Rowland <br/>
                            Madi Vespa Williams <br/>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: "left", marginTop: "5vmin", lineHeight: "1.7vmin"}}>
                    <p className="Credits-Text-Large"><b>PRODUCTION STAFF</b></p>
                    <br/>
                    <div className="Credits-Text-Small" style={{ display: "flex", lineHeight: 1 }}>
                        <div>
                            Production Stage Manager <br/> <br/>
                            Prop Director <br/> <br/>
                            Production Assistant <br/> <br/>
                            Video Editing <br/> <br/> <br/>
                            Costume Assistant <br/> <br/>
                            Scene Shop <br/> <br/> <br/> <br/>
                            Costume Shop <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                            Headshot Photography <br/> <br/>
                            Production Marketing <br/> <br/>
                            Production Coordinator <br/> <br/>
                            Technical Director <br/> <br/>
                            Costume Shop Manager <br/> <br/>
                            Operations Manager <br/> <br/>
                            Department Chair
                        </div>
                        <div style={{ textAlign: "right", position: "absolute", right: 0 }}>
                            Erin Solomon <br/> <br/>
                            Miranda Acosta <br/> <br/>
                            Josephine Ojakli <br/> <br/>
                            Julia Chase <br/>
                            Riley Cohen <br/> <br/>
                            Rachel Erwin <br/> <br/>
                            Andrew D’Arcangelo <br/>
                            Maddie Elsea <br/>
                            Julian Perez <br/> <br/>
                            Constance Davis <br/>
                            Maren Flessen <br/>
                            Lara Graber-Mitchell <br/>
                            Rachel Li <br/>
                            Jake Peterson <br/>
                            Brenna Thornton <br/>
                            Lindsy Weaver <br/> <br/>
                            Shira Weiss <br/> <br/>
                            Amanda Brea &amp; Sydney Fells <br/> <br/>
                            Herbert Moore <br/> <br/>
                            Mätthew Williams <br/> <br/>
                            Margaret Koerber <br/> <br/>
                            Marti McIntosh <br/> <br/>
                            Antonio Ocampo-Guzman <br/> <br/>
                        </div>
                    </div>
                </div>
            </div>
        </ProgramViewContainer>
    )
}