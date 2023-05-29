import React, { useEffect, useState } from "react";
import "./index.css";
import { Howl } from "howler";

const TypingAnimation = ({ text, duration, loop }) => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [deletePanel, setDeletePanel] = useState(false)

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

  useEffect(()=>{
    if(isDisabled){
      const timeoutSec = setTimeout(() => {
        setDeletePanel(true)
      }, 15000); 
      return () => clearTimeout(timeoutSec);
    }

  },[isDisabled])

  return (
    <>
      <section
        className={`w-screen h-screen opacity-1 flex flex-col justify-evenly items-center ${
          isDisabled && "opacity-0"
        } absolute z-10 transition-all ${deletePanel && "hidden"}`}
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/originals/11/83/7c/11837c0ee094b5e12f33fef3d41a1efa.jpg)",
          backgroundSize: "cover",
        }}
        // onClick={() => setIsDisabled(true)}
      >
        <h1 className="text-white text-4xl text-center">Hola, por favor<br/> activa tu audio <br/>:)</h1>
        <button
          className="text-white bg-purple-500 rounded-xl w-max px-4 py-2"
          onClick={() => setIsDisabled(true)}
          style={{ boxShadow: "2px 5px 25px 5px rgba(255, 0, 130, 0.5)" }}

        >
          Continuar
        </button>
      </section>
      <h1 className="text-green-500 text-[3.3rem] font-bold w-screen h-[350px] px-4 leading-[1.3]" style={{fontFamily: "DS-Digital"}}>
        {typedText}
        <span className="animate-blink">|</span>
      </h1>
    </>
  );
};

export default TypingAnimation;
