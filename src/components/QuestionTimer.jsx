import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout ? onTimeout() : null;
    }, timeout);

    return () => {
      clearTimeout(timer);
    }
  }, [timeout, onTimeout]);

  return <progress id="question-timer" value={remainingTime} max={timeout} className={mode} />;
}
