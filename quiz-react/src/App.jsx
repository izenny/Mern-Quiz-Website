import React from "react";
import Questions from "./Pages/Questions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./Pages/Start";
import Result from "./Pages/Result";
import Signup from "./Account/Signup";
const App = () => {
  // function shuffleArray(array) {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  //   }
  //   return array;
  // }

  // // Example usage:
  // const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  // const shuffledOptions = shuffleArray(options);
  // console.log(shuffledOptions);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/quiz" element={<Questions />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
