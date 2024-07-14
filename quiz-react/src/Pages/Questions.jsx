// import React, { useEffect, useState } from "react";
// import Question from "../Components/Question";
// import { getQuestions } from "../Api/ApiFetch";

// const Questions = () => {
//   const [questionsData, setQuestionsData] = useState([]);
//   const [questionIndex, setQuestionIndex] = useState(0);

//   useEffect(() => {
//     const fetchingQuestions = async (amount, difficulty) => {
//       try {
//         const data = await getQuestions(amount, difficulty);
//         setQuestionsData(data);
//         console.log("fetched questions", data);
//       } catch (error) {
//         console.log("error in fetching questions", error);
//       }
//     };

//     fetchingQuestions(10, "medium");
//   }, []);

//   const nextQuestion = () => {
//     if (questionIndex < questionsData.length - 1) {
//       setQuestionIndex((prevIndex) => prevIndex + 1);
//     }
//   };

//   return (
//     <div className="h-full bg-slate-200">
//       {questionsData.length > 0 && (
//         <Question
//           question={questionsData[questionIndex]}
//           questionIndex={questionIndex}
//           nextQuestion={nextQuestion}
//         />
//       )}
//     </div>
//   );
// };

// export default Questions;
import React from 'react'

const Questions = () => {
  return (
    <div>Questions</div>
  )
}

export default Questions