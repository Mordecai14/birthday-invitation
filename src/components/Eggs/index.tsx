import React, { useEffect, useState } from "react";
import Egg1 from "../../assets/eggs/huevo1.svg";
import Egg2 from "../../assets/eggs/huevo2.svg";
import Egg3 from "../../assets/eggs/huevo3.svg";
import Egg4 from "../../assets/eggs/huevo4.svg";
import Cartel from "../../assets/dinosaurio.svg";
import styles from "./styles.module.css";

const Eggs = () => {
  const [counter, setCounter] = useState(0);

  const [isVibrating, setIsVibrating] = useState(false);

  const handleImageClick = () => {
    setCounter(counter + 1);
    if (counter < 8) {
      setIsVibrating(true);
      setTimeout(() => {
        setIsVibrating(false);
      }, 300);
    }
  };

  return (
    <section className="flex flex-col w-full gap-8 h-screen relative justify-around items-center">
      <h1 className="text-3xl md:text-5xl lg:text-3xl text-center text-lime-700 ">
        Haz Tap en el huevo para descubrir la sorpresa 🎁
      </h1>
      <img
        src={counter < 3 ? Egg1 : counter > 7 ? Cartel : Egg2}
        className={`object-cover ${
          isVibrating ? styles.vibratingImage : ""
        } lg:w-[60%]`}
        onClick={handleImageClick}
      />

      <a
        href="/home"
        className={`${counter > 7 ? "opacity-1" : "opacity-0"} ${
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
