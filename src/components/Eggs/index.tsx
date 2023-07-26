import React, { useEffect, useState } from "react";
import Egg1 from "../../assets/egg1.png";
import Egg2 from "../../assets/egg2.webp";
import Egg3 from "../../assets/egg3.png";
import Cartel from "../../assets/cartel.jpeg";
import styles from "./styles.module.css";

const Eggs = () => {
  const [counter, setCounter] = useState(0);

  const [isVibrating, setIsVibrating] = useState(false);

  const handleImageClick = () => {
    if (counter < 9) {
      setIsVibrating(true);
      setTimeout(() => {
        setIsVibrating(false);
      }, 300);
    }
  };

  return (
    <section className="flex flex-col w-full gap-8 h-screen relative">
      {counter > 9 && (
        <img
          alt="dino"
          src={Cartel}
          className={`${styles["animated-image"]} absolute left-0 top-[15%]`}
        />
      )}
      <h1 className="text-3xl lg:text-4xl text-center text-green-900 ">
        Haz Tap en el huevo para desubrir la sorpresa 🎁
      </h1>
      <div
        onClick={() => setCounter(counter + 1)}
        className="w-full h-[35rem] flex justify-center items-center"
      >
        <img
          src={counter < 5 ? Egg1 : counter > 9 ? Egg3 : Egg2}
          className={`object-cover ${isVibrating ? styles.vibratingImage : ""}`}
          onClick={handleImageClick}
        />
      </div>
      <a
        href="/home"
        className={`${
          counter > 0 ? "opacity-1" : "opacity-0"
        }  w-auto bg-green-400 h-auto items-center justify-center rounded-lg text-blue-500 p-3 transition-all`}
      >
        <button className="text-2xl lg:text-3xl flex justify-center items-center w-full">
          ¡VAMOS...🦕!
        </button>
      </a>
    </section>
  );
};

export default Eggs;
