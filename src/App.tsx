
import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Episode1View } from './episode1/view/Episode1View';
import { Episode2View } from './episode2/Episode2View';
import { Episode3View } from './episode3/Episode3View';
import { UnderworldView } from './episode3/Underworld/UnderworldView';
import { Episode4View } from './episode4/Episode4View';
import { Episode5View } from './episode5/Episode5View';
import { FlappyPhaetonView } from './episode5/phaeton/FlappyPhaetonView';
import { Episode6View } from './episode6/Episode6View';
import { HubView } from './hub/HubView';
import { AboutTheAuthorView } from './program/AboutTheAuthorView';
import { BehindTheScenesView } from './program/BehindTheScenesView';
import { CreditsView } from './program/CreditsView';
import { DirectorNoteView } from './program/DirectorNoteView';



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
            <Route exact path={"/episode-one"}>
              <Episode1View/>
            </Route>
            <Route exact path={"/episode-two"}>
              <Episode2View/>
            </Route>
            <Route exact path={"/episode-three"}>
              <Episode3View/>
            </Route>
            <Route exact path={"/episode-four"}>
              <Episode4View/>
            </Route>
            <Route exact path={"/episode-five"}>
              <Episode5View/>
            </Route>
            <Route exact path={"/episode-six"}>
              <Episode6View/>
            </Route>
            <Route exact path={"/phaeton"}>
              <FlappyPhaetonView/>
            </Route>
            <Route exact path={"/underworld"}>
              <UnderworldView/>
            </Route>
            <Route exact path={"/director-note"}>
              <DirectorNoteView/>
            </Route>
            <Route exact path={"/mary-zimmerman"}>
              <AboutTheAuthorView/>
            </Route>
            <Route exact path={"/behind-the-scenes"}>
              <BehindTheScenesView/>
            </Route>
            <Route exact path={"/credits"}>
              <CreditsView/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
