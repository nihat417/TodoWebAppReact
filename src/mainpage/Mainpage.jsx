import React from "react";
import TodoCard from "./components/TodoCard";
import Header from "./components/Header";

export default function Mainpage({ email, setAuthorized }) {
  return (
    <>
      <Header email={email} setAuthorized={setAuthorized} />
      <button className="bg-yellow-400 py-3 px-10 font-bold rounded-[8px] hover:bg-yellow-500 ml-[68px] mt-[20px]">
        Create card
      </button>
      <div className="flex flex-wrap px-[58px]">
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </>
  );
}
