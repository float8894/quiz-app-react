import { useEffect, useState } from 'react';

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('SETTING TIMEOUT');
    const timer = setTimeout(() => {
      onTimeout();
    }, timeout);

    return () => {
      console.log('CLEARING TIMEOUT');
      clearTimeout(timer);
    };
  }, [onTimeout]);

  useEffect(() => {
    console.log('SETTING INTERVAL');
    setRemainingTime(timeout);
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);

    return () => {
      console.log('CLEARING INTERVAL');
      clearInterval(interval);
    };
  }, [timeout, onTimeout]);

  return <progress max={timeout} value={remainingTime} id='question-time' />;
}
