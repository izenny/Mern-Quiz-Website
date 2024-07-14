import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { fetchCategories } from "../Api/ApiFetch";
const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const categoryFetch = () => {
      try {
        const catagoriesDta = fetchCategories();
        setCategories(catagoriesDta);
      } catch (error) {
        console.log("error in fetching categories.jsx");
      }
    };
  }, []);
  const selectCategory = () => {};
  return (
    <div className="h-full flex-wrap flex justify-center items-center ">
      <div className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer">
        <h2 className="text-5xl font-serif">
          <IoIosAdd />
        </h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
      <div
        className="bg-slate-400 m-2 w-[12rem] h-[7rem] flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={selectCategory}
      >
        <h2 className="text-2xl font-serif">JavaScript</h2>
      </div>
    </div>
  );
};

export default Category;
