import { useState } from "react";
import Game from "./components/Game";
import Result from "./components/Result"
import "./index.scss";
import { questions } from "./data";

function App() {
  const [step, useStep] = useState(0);
  const [correct, useCorrent] = useState(0);
  const targetQuetion = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    useStep((value) => (value += 1));

    if (index === targetQuetion.correct) {
      useCorrent((value) => value += 1);
    }
    console.log(correct);
  };

  return (
    <div className="App">
      { step !== questions.length ? <Game step={step} onClickVariant={onClickVariant} /> : <Result correct={correct} />}
    </div>
  );
}

export default App;
