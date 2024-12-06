import React, { useState, useEffect } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0); // State for count
  const [isRunning, setIsRunning] = useState<boolean>(false); // State for counter status

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (isRunning) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    // Cleanup function to clear the interval
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning]);

  const startCounter = () => setIsRunning(true);
  const stopCounter = () => setIsRunning(false);

  return (
    <div className="flex gap-4 flex-col items-center justify-center h-24 mb-4 backdrop-blur-2xl border-cyan-900 w-ful">
      <h1 className="text-3xl">Counter: {count}</h1>
      <div className="flex gap-4">
        <button onClick={startCounter} className="text-center bg-blue-500 text-white px-24 py-2 rounded-md">
          Start
        </button>
        <button onClick={stopCounter} className="text-center bg-red-400 text-white px-24 py-2 rounded-md ">Stop</button>
      </div>
    </div>
  );
};

export default Counter;
