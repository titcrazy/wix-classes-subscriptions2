'use client';
// components/CountUpTimer.js
import { useState, useEffect } from 'react';
import { NumberBox } from 'app/components/NumberBox/NumberBox.tsx';

const CountUpTimer = () => {
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    const startDate = new Date('2023-06-02T21:28:00Z').getTime();

    const updateTimer = () => {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - startDate;
      setTimeElapsed(elapsedTime);
    };

    // Update the timer every second
    const intervalId = setInterval(updateTimer, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30.44); // Average days in a month
    const years = Math.floor(months / 12);

    const remainingMonths = months % 12;
    const remainingDays = Math.floor(days % 30.44); // Remaining days after subtracting years and months
    const remainingHours = hours % 24;
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;

    return {
      years,
      remainingMonths,
      remainingDays,
      remainingHours,
      remainingMinutes,
      remainingSeconds,
    };
  };

  const {
    years,
    remainingMonths,
    remainingDays,
    remainingHours,
    remainingMinutes,
    remainingSeconds,
  } = formatTime(timeElapsed);

  return (
    <div className="relative mt-5 md:mt:5 rounded-xl">
      <div className="grid grid-cols-3 gap-2 py-4 px-20 md:flex md:items-center md:mt-2 rounded-xl md:px-2 md:py-6 justify-center">
        <NumberBox num={years} unit="Years" flip={false} />
        <span className="hidden text-3xl -mt-5 md:inline-block md:text-3xl font-normal text-gray-50v">
          :
        </span>
        <NumberBox num={remainingMonths} unit="Months" flip={false} />
        <span className="hidden text-3xl -mt-5 md:inline-block md:text-3xl font-normal text-gray-50">
          :
        </span>
        <NumberBox num={remainingDays} unit="Days" flip={false} />
        <span className="hidden text-3xl -mt-5 md:inline-block md:text-3xl font-normal text-gray-50">
          :
        </span>
        <NumberBox num={remainingHours} unit="Hours" flip={false} />
        <span className="hidden text-3xl -mt-5 md:inline-block md:text-3xl font-normal text-gray-50">
          :
        </span>
        <NumberBox num={remainingMinutes} unit="Minutes" flip={false} />
        <span className="hidden text-3xl -mt-5 md:inline-block md:text-3xl font-normal text-gray-50">
          :
        </span>
        <NumberBox num={remainingSeconds} unit="Seconds" flip={false} />
      </div>
    </div>
  );
};

export default CountUpTimer;
