import { useCallback, useState } from 'react';

import quizCompleteImg from '../assets/quiz-complete.png';

import QUESTIONS from '../questions';
import QuestionTimer from './QuestionTimer';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prev) => [...prev, selectedAnswer]);
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id='summary'>
        <img src={quizCompleteImg} alt='Trophy with a star on it' />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id='quiz'>
      <div id='question'>
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        ></QuestionTimer>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id='answers'>
          {shuffledAnswers.map((ans) => (
            <li className='answer' key={ans}>
              <button onClick={() => handleSelectAnswer(ans)}>{ans}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
