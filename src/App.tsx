
import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Episode1View } from './episode1/view/Episode1View';
import { Episode2View } from './episode2/Episode2View';
import { HubView } from './hub/HubView';

const ep1 = require("./assets/ep1.mp4");


function App() {

  return (
    <div className="App" style={{ 
      height: "100vh", 
      width: "100vw",
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
              <p>Episode 3</p>
            </Route>
            <Route exact path={"/episode-four"}>
              <p>Episode 4</p>
            </Route>
            <Route exact path={"/episode-five"}>
              <p>Episode 5</p>
            </Route>
            <Route exact path={"/episode-six"}>
              <p>Episode 6</p>
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
