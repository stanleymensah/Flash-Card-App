export default function NavButtons({
  currentStep,
  setCurrentStep,
  totalSteps,
  showAnswer,
  setShowAnswer,
}) {
  return (
    <div className="flex justify-center mt-4">
      <div className="bg-gray-300 rounded-xl flex space-x-4 px-4 py-2 items-center w-full max-w-md justify-between">
        <button
          className="text-gray-600 cursor-pointer"
          type="button"
          onClick={() => setCurrentStep(Math.max(currentStep - 1, 1))}
        >
          &lsaquo; Previous
        </button>

        <button
          className="text-blue-600 font-semibold"
          type="button"
          onClick={() => setShowAnswer((prev) => !prev)}
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>

        <button
          className="text-gray-600 cursor-pointer"
          type="button"
          onClick={() => setCurrentStep(Math.min(currentStep + 1, totalSteps))}
        >
          Next &rsaquo;
        </button>
      </div>
    </div>
  );
}
