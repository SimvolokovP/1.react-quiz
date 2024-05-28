import { questions } from "../data";

export default function Game({ step, onClickVariant }) {
    function stepToPercent(step) {
        return Math.round(step / questions.length * 100);
    }

  return (
    <>
      <div className="progress">
        <div style={{ width: `${stepToPercent(step)}%` }} className="progress__inner"></div>
      </div>
      <h3>{questions[step].title}</h3>
      <ul>
        {questions[step].variants.map((answer, index) => (
          <li onClick={() => onClickVariant(index)} key={answer}>
            {answer}
          </li>
        ))}
      </ul>
    </>
  );
}
