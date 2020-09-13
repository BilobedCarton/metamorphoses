import React from 'react';
import logo from './logo.svg';
import './App.css';
import { EpisodeComponent } from './shared/components/EpisodeComponent';

function App() {
  return (
    <div className="App">
      <EpisodeComponent
        title="Test"
        source="https://player.vimeo.com/video/76979871"
      />
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
