import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const timeLeft = targetTime - now;

    if (timeLeft < 0) {
      // El tiempo objetivo ya ha pasado
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2 className="mt-14 text-2xl">
        Días restantes para la <br />
        Dino-fiesta...
      </h2>
      <div className="max-w-max h-auto grid grid-cols-2 justify-center items-center gap-5 mt-5">
        <div className="flex flex-col border-blue-700 rounded-xl p-3 border">
          <label className="text-xl">{timeLeft.days}</label>
          <label className="font-mono text-xs">dino-días</label>
        </div>
        <div className="flex flex-col border-blue-700 rounded-xl p-3 border">
          <label className="text-xl">{timeLeft.hours}</label>
          <label className="font-mono text-xs">dino-horas</label>
        </div>
        <div className="flex flex-col border-blue-700 rounded-xl p-3 border">
          <label className="text-xl">{timeLeft.minutes}</label>
          <label className="font-mono text-xs">dino-minutos</label>
        </div>
        <div className="flex flex-col border-blue-700 rounded-xl p-3 border">
          <label className="text-xl">{timeLeft.seconds}</label>
          <label className="font-mono text-xs">dino-segundos</label>
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;
