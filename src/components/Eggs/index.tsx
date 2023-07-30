import React, { useEffect, useState } from "react";
import Egg1 from "../../assets/eggs/huevo1.svg";
import Egg2 from "../../assets/eggs/huevo2.svg";
import Egg3 from "../../assets/eggs/huevoroto.svg";
import Cartel from "../../assets/eggs/dinosaurio_opcion1.svg";
import styles from "./styles.module.css";
import Confetti from "react-confetti";

const Eggs = () => {
  const [counter, setCounter] = useState(0);
  const [isVibrating, setIsVibrating] = useState(false);
  const [wHeight, setWHeight] = useState(0);
  const [wWidth, setWWidth] = useState(0);

  const handleImageClick = () => {
    setCounter(counter + 1);
    if (counter < 8) {
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
      {counter >= 9 && <Confetti width={wWidth} height={wHeight} />}
      <p
        className={`absolute top-[60%] left-[30%] md:top-[23%] md:left-[8%] lg:top-[33%] lg:left-[11%] text-center text-lime-600 text-cl lg:text-2xl ${
          styles.animatedText
        } opacity-0 ${counter >= 9 && "opacity-100"} transition-all`}
      >
        !Estás invitad@!
        <br />A la súper Dino-Fiesta
      </p>

      <h1 className="text-3xl md:text-5xl lg:text-6xl lg:mt-10 text-center text-lime-700 ">
        Haz Tap en el huevo para descubrir la sorpresa 🎁
      </h1>
      <img
        src={returnImages()}
        // src={Cartel}
        className={`object-cover ${isVibrating && styles.vibratingImage} ${
          counter < 9 && "sm:h-[40%]"
        } ${counter >= 9 && "sm:h-[65%]"} mt-5 lg:mt-10`}
        onClick={handleImageClick}
      />
      <a
        href="/home"
        className={`${counter > 8 ? "opacity-1" : "opacity-0"} ${
          counter > 7 ? "scale-100" : "scale-0"
        } hover:scale-125
           bg-green-400 h-auto rounded-lg text-blue-500 p-3 transition duration-700 ease-in-out text-3xl md:text-4xl flex justify-center items-center w-full md:w-[70%]`}
      >
        ¡VAMOS...🦕!
      </a>
    </section>
  );
};

export default Eggs;
