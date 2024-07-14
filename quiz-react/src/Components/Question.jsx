import React, { useState } from "react";

const Question = ({ question, questionIndex, nextQuestion }) => {
  const [score, setScore] = useState(0);
  const [submittedAns, setSubmittedAns] = useState("");
  const options = [...question.incorrect_answers, question.correct_answer];

  const submitAns = (option) => {
    if (question.correct_answer === option) {
      setScore((prevScore) => prevScore + 1);
      console.log("Correct answer submitted!");
    } else {
      console.log("Incorrect answer submitted!");
    }
    nextQuestion();
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center w-full">
        <div className="bg-white relative h-fit p-5 w-[75%] lg:w-[80%] rounded-md">
          <h2>
            <span className="mr-2">{`Q ${questionIndex + 1}.`}</span>
            {question.question}
          </h2>
          <div className="bg-slate-400 rounded-full w-12 h-12 flex justify-center items-center absolute -top-10 right-[50%] ">
            <h2>{questionIndex + 1}</h2> {/* Dynamic question number */}
          </div>
        </div>
        <div className="bg-white mt-5 md:w-[45%] p-2 flex flex-wrap justify-center items-center">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={submitAns(option)}
              className="bg-red-800 flex justify-center items-center m-2 w-2/3 md:w-1/3 h-[2.3rem] rounded-md cursor-pointer hover:scale-105 transition duration-150 ease-in-out"
            >
              {option}
            </div>
          ))}
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Question;
