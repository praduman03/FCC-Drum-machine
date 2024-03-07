import React, {useState} from 'react'
// import './App.css'

const audioClips = [
  {
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  
  }
]

function App() {
  const [display, setDisplay] = useState("")
  const playSound = (clip) => {
    const playDrums = document.getElementById(clip.keyTrigger);
    if (playDrums) {
      playDrums.play().catch((err) => console.log(err));
    } else {
      console.log(`No audio found for ${clip.keyTrigger}`);
    }
    setDisplay(clip.id);
  };

  const playAudio = (key) => {
    const audio = document.getElementById(key);
    if (audio) {
      audio.play().catch((err) => console.log(err));
      setDisplay(audioClips.find((clip) => clip.keyTrigger === key).id);
    }
  }

  return (
    <div
      className="container"
      onKeyDown={(e) => {playAudio(e.key.toUpperCase())}}
      id="drum-machine"
      style={{
        width:"100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <h1>Drum machine</h1>
      <div
        className="drums"
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "80vh",
          height: "500px",
          gap: "2vh",
          justifyContent: "center",}}
      >
        {audioClips.map((clip) => (
          <button
              key={clip.id}
              style={{ width: "20vh", height: "20vh" }}
              className="drum-pad"
              id={`drum-${clip.keyTrigger}`}
              onClick={() => playSound(clip)}
            >
              <audio
                src={clip.url}
                id={clip.keyTrigger}
                className="clip"
              />
              {clip.keyTrigger}
            </button>
        ))}
      </div>
      <div id='display'>
        <h2>{display}</h2>
      </div>
    </div>
  );
}

export default App
