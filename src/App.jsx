import React, { useEffect, useState } from 'react';
import song from './static/music/contoh.mpeg';
import InvitationPage from './containers/InvitationPage';
import StartedPage from './containers/StartedPage';
import './App.scss';

const App = () => {
  const [audio] = useState(new Audio(song))
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying]);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'}</button>
      </header>
      <InvitationPage />
      <StartedPage />
    </div>
  );
}

export default App;
