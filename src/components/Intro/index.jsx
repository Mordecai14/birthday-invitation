import React, { useState, useEffect } from "react";
import BgIntro from "../../../public/static/assets/bgintro.jpeg";

const Intro = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <section
      className={`w-screen h-screen opacity-1 ${
        isDisabled && "opacity-0"
      } absolute z-10 transition-all`}
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/11/83/7c/11837c0ee094b5e12f33fef3d41a1efa.jpg)",
        backgroundSize: "cover",
      }}
      onClick={() => setIsDisabled(true)}
    >
      <h1 className="text-white">Hola, por favor activa tu audio :)</h1>
      <button
        className="text-white bg-purple-500 rounded-xl w-max px-4 py-2"
        onClick={() => setIsDisabled(true)}
      >
        Continuar
      </button>
    </section>
  );
};

export default Intro;
