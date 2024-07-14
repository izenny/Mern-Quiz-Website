import React from "react";
import Category from "../Components/Category";

const Start = () => {
  return (
    <div className="h-screen bg-slate-200">
      <div class="flex flex-col h-screen">
        <div class="bg-red-400 p-3 flex justify-between items-center">
          <div>
            <h2 className="text-xl">Quiz</h2>
          </div>
          <div className="">
            <button className="flex bg-white p-2 pl-5 pr-5 rounded-xl hover:scale-105 transition-transform duration-300 ">
              SignUp
            </button>
          </div>
        </div>
        <div class="flex-1 bg-lightblue p-4 overflow-y-scroll ">
          <Category />
        </div>
        <div class="bg-lightgreen p-4">Footer</div>
      </div>
    </div>
  );
};

export default Start;
