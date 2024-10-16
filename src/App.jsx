import { useState } from 'react'
import { useEffect } from 'react';
import { sounds } from './sounds';
import './App.scss'

function App() {
  const [sound, setSound] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
  }, []);

  const playSound = (event) => {
    const id = event.target.innerText;
    const name = event.target.id;
    document.getElementById(id).play();
    setSound(name)  ;   
  }

  const handleKey = (event) => {
    const id = event.key.toUpperCase();
    const pad = document.querySelectorAll('.drum-pad');

    for (const key in pad) {
      if(pad[key].innerText === id) {
        setSound(pad[key].id);
        document.getElementById(id).play();
       } 
    }
  }

  return (
    <>
      <h1>Drum Machine</h1>
      <div id="drum-machine" className="container text-center p-5 ">
        <div id="display" className=" p-2">{sound}</div>
        <div id="pad-button" className="">
          {sounds.map((val, i) => (
            <button key={i} className="drum-pad btn btn-dark btn-lg col-3" id={val.name} onClick={playSound}>{val.key}
              <audio className="clip" id={val.key} src={val.sound}></audio>
            </button>
          ))
          }
        </div>
      </div>
    </>
  )
}

export default App
