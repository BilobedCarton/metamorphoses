
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ContextualAnswerView } from './episode1/view/AnswersView';
import { ContextualEpisode1View } from './episode1/view/Episode1View';
import { Episode2View } from './episode2/Episode2View';
import { ContextualNightmareView } from './episode2/NightmareView';
import { Episode3View } from './episode3/Episode3View';
import { UnderworldView } from './episode3/underworld/UnderworldView';
import { Episode4View } from './episode4/Episode4View';
import { Episode5View } from './episode5/Episode5View';
import { FlappyPhaetonView } from './episode5/phaeton/FlappyPhaetonView';
import { CookbookView } from './episode6/CookbookView';
import { Episode6View } from './episode6/Episode6View';
import { HubView } from './hub/HubView';
import { AboutTheAuthorView } from './program/AboutTheAuthorView';
import { BehindTheScenesView } from './program/BehindTheScenesView';
import { BiosView } from './program/BiosView';
import { CreditsView } from './program/CreditsView';
import { DirectorNoteView } from './program/DirectorNoteView';

// export const ep1 = require("https://drive.google.com/uc?export=view&id=1D5-KPp8TzuMPp2zxGFk0_wnL8cGfkf5V")


function App() {
  return (
    <div className="App" style={{ 
      // height: "100vh", 
      // width: "100vw",
    }}>
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"}>
              <HubView/>
            </Route>
            <Route path={"/episode-one/finished=:finished"} component={ContextualEpisode1View}/>
            <Route exact path={"/episode-two"}>
              <Redirect to="/" />
            </Route>
            <Route exact path={"/episode-three"}>
              <Redirect to="/" />
            </Route>
            <Route exact path={"/episode-four"}>
              <Redirect to="/" />
            </Route>
            <Route exact path={"/episode-five"}>
              <Redirect to="/" />
            </Route>
            <Route exact path={"/episode-six"}>
              <Redirect to="/" />
            </Route>
            <Route exact path={"/answers"}>
              <ContextualAnswerView />
            </Route>
            <Route exact path={"/phaeton"}>
              <Redirect to="/" />
            </Route>
            <Route exact path={"/underworld"}>
              <Redirect to="/" />
            </Route>
            <Route exact path={"/director-note"}>
              <DirectorNoteView/>
            </Route>
            <Route exact path={"/mary-zimmerman"}>
              <AboutTheAuthorView/>
            </Route>
            <Route path={"/behind-the-scenes/:from"}>
              <Redirect to="/" />
            </Route>
            <Route exact path={"/credits"}>
              <CreditsView/>
            </Route>
            <Route exact path={"/cookbook"}>
              <Redirect to="/" />
            </Route>
            <Route exact path={"/nightmares"}>
              <Redirect to="/" />
            </Route>
            <Route exact path={"/bios"}>
              <Redirect to="/" />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
