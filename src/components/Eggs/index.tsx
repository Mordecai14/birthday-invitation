import React, { useEffect, useState } from "react";
import Egg1 from "../../assets/eggs/huevo1.svg";
import Egg2 from "../../assets/eggs/huevo2.svg";
import Egg3 from "../../assets/eggs/huevoroto.svg";
import Cartel from "../../assets/eggs/dinosaurio_opcion1.svg";
import styles from "./styles.module.css";
import Confetti from "react-confetti";
import useWindowSize from "./useWindowSize";
import AudioPlayer from "../audioPlayer/AaudioPlayer";
import Horns from "../../assets/horn.mp3";
import Golpe1 from "../../assets/golpe1.mp3";
import Golpe2 from "../../assets/golpe2.mp3";
import Crack from "../../assets/crack.mp3";

const Eggs = () => {
  const [counter, setCounter] = useState(0);
  const [isVibrating, setIsVibrating] = useState(false);
  const [wHeight, setWHeight] = useState(0);
  const [wWidth, setWWidth] = useState(0);
  const { width, height } = useWindowSize();

  const golpes = [Golpe1, Golpe2]; // Arreglo con los nombres de los sonidos disponibles

  const handleImageClick = () => {
    setCounter(counter + 1);
    if (counter < 8) {
      const randomSound = golpes[Math.floor(Math.random() * golpes.length)];
      // Reproducir el sonido seleccionado
      const audio = new Audio(Crack);
      audio.play();
      setIsVibrating(true);
      setTimeout(() => {
        setIsVibrating(false);
      }, 300);
    }
  };

  const returnImages = () => {
    let currentImg: string;
    if (counter < 3) {
      currentImg = Egg1;
    }
    if (counter >= 3 && counter < 6) {
      currentImg = Egg2;
    }
    if (counter >= 6 && counter < 9) {
      currentImg = Egg3;
    }
    if (counter >= 9) {
      currentImg = Cartel;
    }
    return currentImg;
  };
  useEffect(() => {
    returnImages();
  }, [counter]);

  useEffect(() => {
    setWHeight(window.innerHeight);
    setWWidth(window.innerWidth);
  }, []);

  return (
    <section className="flex flex-col w-full h-screen relative justify-start items-center">
      {counter >= 9 && (
        <>
          <Confetti
            width={width}
            height={height}
            className={styles.Confetti_class}
            colors={["#94DFE6", "#EBDCC7", "#B5EECB", "#F8EA8C", "#00a6be"]}
          />
          <AudioPlayer audio={Horns} tipo={"audio/mp3"} />
        </>
      )}
      <p
        className={`absolute top-[65%] left-[30%] md:top-[23%] md:left-[8%] lg:top-[33%] lg:left-[11%] text-center text-[#66c4e0] text-cl lg:text-2xl opacity-0 ${
          counter >= 9 && "opacity-100"
        } transition-all animate-jump animate-infinite animate-duration-[2000ms] animate-ease-in`}
      >
        !Estás invitad@!
        <br />A la súper Dino-Fiesta
      </p>

      <h1
        className={`${
          counter >= 9 ? "hidden" : "flex"
        } text-2xl md:text-5xl lg:text-6xl text-center text-[#82bc4b]`}
      >
        Haz click en el huevo para descubrir la sorpresa
        <br />
      </h1>
      <img
        src={returnImages()}
        // src={Cartel}
        className={`object-cover ${isVibrating && styles.vibratingImage} ${
          counter < 9 && "sm:h-[40%]"
        } ${
          counter >= 9 &&
          "sm:h-[65%] mt-16 animate-fade-up animate-once animate-delay-0 animate-ease-in animate-alternate"
        } lg:h-[60%] mt-14 lg:mt-10`}
        onClick={handleImageClick}
      />
      <a
        href="/home"
        className={`${counter > 8 ? "opacity-1" : "opacity-0"} ${
          counter > 7 ? "scale-100" : "scale-0"
        } lg:hover:scale-125
           bg-yellowGreen text-blueAqua h-auto rounded-lg p-3 transition duration-700 ease-in-out text-3xl md:text-4xl flex justify-center items-center w-[98%] md:w-[70%] shadow-2xl`}
      >
        Haz click aquí...🦕!
      </a>
    </section>
  );
};

export default Eggs;
