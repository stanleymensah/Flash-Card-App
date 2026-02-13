import { motion } from "motion/react";

export default function Card({ questionObj, showAnswer }) {
  return (
    <div className="content bg-gray-300 h-full rounded-xl flex flex-col items-center justify-center text-center font-bold relative">
      {/* Question */}
      <motion.h1
        key="question"
        initial={{ opacity: 1 }}
        animate={{ opacity: showAnswer ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="text-7xl absolute w-full"
      >
        {questionObj.question}
      </motion.h1>

      {/* Answer */}
      <motion.p
        key="answer"
        initial={{ opacity: 0 }}
        animate={{ opacity: showAnswer ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute w-full text-4xl"
      >
        {questionObj.answer}
      </motion.p>
    </div>
  );
}
