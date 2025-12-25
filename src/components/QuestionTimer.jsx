import { useEffect, useState } from 'react';

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout();
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout]);

  useEffect(() => {
    setRemainingTime(timeout);
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [timeout, onTimeout]);

  return <progress max={timeout} value={remainingTime} id='question-time' />;
}
