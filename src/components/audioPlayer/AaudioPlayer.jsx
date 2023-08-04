import Horns from "../../assets/horn.mp3"
import React, { useEffect, useRef } from "react";

const AudioPlayer = ({audio}) => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play();
  }, []);

  return (
    <audio ref={audioRef} preload="auto" style={{ display: "none" }}>
      <source src={audio} type="audio/mp3" />
      <p>Tu navegador no soporta el elemento de audio.</p>
    </audio>
  );
};

export default AudioPlayer;

