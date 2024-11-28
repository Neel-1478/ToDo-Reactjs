import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="digital-clock">
      {time.toLocaleTimeString()} {/* Display the time in HH:MM:SS format */}
    </div>
  );
};

export default DigitalClock;
