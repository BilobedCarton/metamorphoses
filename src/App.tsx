
import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Episode1View } from './episode1/view/Episode1View';
import { Episode2View } from './episode2/Episode2View';
import { Episode3View } from './episode3/Episode3View';
import { Episode4View } from './episode4/Episode4View';
import { Episode5View } from './episode5/Episode5View';
import { FlappyPhaetonView } from './episode5/phaeton/FlappyPhaetonView';
import { HubView } from './hub/HubView';

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
              <p>Episode 6</p>
            </Route>
            <Route exact path={"/phaeton"}>
              <FlappyPhaetonView/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
