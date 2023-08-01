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
  const containerClass =
    "flex flex-col border-blue-700 rounded-xl px-6 py-3 border text-yellowGreen border-babyBlue shadow-md ";

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2 className="mt-14 text-3xl text-babyBlue mb-5">
        Días restantes para la <br />
        Dino-Fiesta...
      </h2>
      <div className="max-w-max h-auto grid grid-cols-2 justify-center items-center gap-5 mt-5">
        <div className={containerClass}>
          <label className="text-4xl">{timeLeft.days}</label>
          <label className="font-mono">Días</label>
        </div>
        <div className={containerClass}>
          <label className="text-4xl">{timeLeft.hours}</label>
          <label className="font-mono">Horas</label>
        </div>
        <div className={containerClass}>
          <label className="text-4xl">{timeLeft.minutes}</label>
          <label className="font-mono">Minutos</label>
        </div>
        <div className={containerClass}>
          <label className="text-4xl">{timeLeft.seconds}</label>
          <label className="font-mono">Segundos</label>
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;
