import React, { useEffect, useState } from "react";
import "./index.css";

const TypingAnimation = ({ text, duration, loop }) => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (!isDisabled) {
      return;
    }
    const timeout = setTimeout(() => {
      let newText = typedText;

      if (isDeleting) {
        newText = text.substring(0, typedText.length - 1);
      } else {
        newText = text.substring(0, typedText.length + 1);
      }

      setTypedText(newText);

      if (!isDeleting && newText === text) {
        if (loop) {
          setIsDeleting(true);
        }
      } else if (isDeleting && newText === "") {
        setIsDeleting(false);
        setCurrentIndex(currentIndex + 1);
      }
    }, duration);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentIndex, text, duration, loop, isDisabled]);

  return (
    <>
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
      <h1 className="text-green-500 text-5xl font-bold text-center w-screen h-[350px]">
        {typedText}
        <span className="animate-blink">|</span>
      </h1>
    </>
  );
};

export default TypingAnimation;
