import { useRef } from 'react';

export default function Answers({
  handleSelectAnswer,
  selectedAnswer,
  answerState,
  answers,
}) {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id='answers'>
      {shuffledAnswers.current.map((ans) => {
        const isSelected = selectedAnswer === ans;
        let cssClass = '';

        if (answerState === 'answered' && isSelected) {
          cssClass = 'selected';
        }

        if (
          (answerState === 'correct' || answerState === 'wrong') &&
          isSelected
        )
          cssClass = answerState;
        return (
          <li className='answer' key={ans}>
            <button
              onClick={() => handleSelectAnswer(ans)}
              className={cssClass}
            >
              {ans}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
