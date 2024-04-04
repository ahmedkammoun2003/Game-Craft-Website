import React, { useEffect, useState } from "react";
import styles from "../style";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-12-31`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
  
    timerComponents.push(
      <div key={interval} className="flex flex-col text-8xl mx-10 my-14">
        <span className="font-poppins font-bold my-6">{timeLeft[interval]}</span>
        <span className="text-4xl font-semibold">{interval}</span>
      </div>
    );
  });
  

  return (
    <div className="flex flex-col items-center justify-center ">
  <button  type="button" className={` mt-9 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-orange2-gradient rounded-[10px] outline-none ${styles}`}>
  <a href="#register">Register</a>
  </button>
  <div className="flex justify-center items-center text-indigo-50 rounded-md shadow-lg">
    {timerComponents.length ? timerComponents : <span>Time's up!</span>}
  </div>
</div>

  );
};

export default CountdownTimer;
