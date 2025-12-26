import QUESTIONS from '../questions';
import Answers from './Answers';
import QuestionTimer from './QuestionTimer';

export default function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) {
  return (
    <div id='question'>
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer}></QuestionTimer>
      <h2>{questionText}</h2>
      <Answers
        handleSelectAnswer={onSelectAnswer}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        answers={answers}
      ></Answers>
    </div>
  );
}
