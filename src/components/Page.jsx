import Header from "./Header";
import Loader from "../ui/loader";
import Card from "../ui/card";
import NavButtons from "../ui/NavButtons";
import { useState } from "react";
import { questions } from "./questions";

export default function Page() {
  const totalSteps = questions.length;
  const [currentStep, setCurrentStep] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="flex flex-col gap-3 p-3 w-full">
      <Header />
      <div className="flex flex-col gap-3 justify-center items-center w-full">
        <Loader currentStep={currentStep} totalSteps={totalSteps} />
        <div className="card w-full">
          <div className="container h-screen border-2 border-gray-500 rounded-xl p-2 flex flex-col gap-2">
            <Card
              questionObj={questions[currentStep - 1]}
              showAnswer={showAnswer}
            />

            <NavButtons
              currentStep={currentStep}
              showAnswer={showAnswer}
              setShowAnswer={setShowAnswer}
              totalSteps={totalSteps}
              setCurrentStep={(step) => {
                setCurrentStep(step);
                setShowAnswer(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
