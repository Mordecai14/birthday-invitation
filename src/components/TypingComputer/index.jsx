import React, { useEffect, useState } from "react";
import "./index.css";

const TypingAnimation = ({ text, duration, loop }) => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
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
  }, [typedText, isDeleting, currentIndex, text, duration, loop]);

  return (
    <h1 className="text-green-500 text-5xl font-bold text-center w-screen h-[350px]">
      {typedText}
      <span className="animate-blink">|</span>
    </h1>
  );
};

export default TypingAnimation;
