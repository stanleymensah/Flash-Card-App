import { motion } from "motion/react";

export default function Loader({ currentStep, totalSteps }) {
  const progress = currentStep / totalSteps;

  return (
    <div className="relative w-full h-10 border-2 border-gray-500 rounded-lg overflow-hidden">
      {/* Background bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress * 100}%` }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute top-0 left-0 h-full bg-gray-400"
      />

      {/* Text overlay */}
      <div className="relative z-10 flex justify-between items-center h-full px-2">
        <span className="percent font-semibold">{Math.round(progress * 100)}%</span>
        <span className="counter font-semibold">{currentStep} of {totalSteps}</span>
      </div>
    </div>
  );
}
