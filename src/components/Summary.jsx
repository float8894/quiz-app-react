import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions';

export default function Summary({ userAnswers }) {
  const total = userAnswers.length;
  const skipped = userAnswers.filter((ans) => ans === null).length;
  const correct = userAnswers.filter((ans, i) => {
    return ans === QUESTIONS[i].answers[0];
  }).length;
  const incorrect = total - skipped - correct;

  return (
    <div id='summary'>
      <img src={quizCompleteImg} alt='Trophy with a star on it' />
      <h2>Quiz Completed!</h2>
      <div id='summary-stats'>
        <p>
          <span className='number'>{Math.round((skipped / total) * 100)}%</span>
          <span className='text'>skipped</span>
        </p>
        <p>
          <span className='number'>{Math.round((correct / total) * 100)}%</span>
          <span className='text'>answered correctly</span>
        </p>
        <p>
          <span className='number'>
            {Math.round((incorrect / total) * 100)}%
          </span>
          <span className='text'>answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, i) => {
          let cssClass = 'user-answer ';

          if (answer === null) cssClass += 'skipped';
          else if (answer === QUESTIONS[i].answers[0]) cssClass += 'correct';
          else cssClass += 'wrong';

          return (
            <li key={i}>
              <h3>{i + 1}</h3>
              <p className='question'>{QUESTIONS[i].text}</p>
              <p className={cssClass}>{answer ?? 'Skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
