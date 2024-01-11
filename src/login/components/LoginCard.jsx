import React from "react";

export default function LoginCard() {
  return (
    <div>
      <form className="flex flex-col justify-center items-center w-[700px] h-[310px] shadow shadow-zinc-400 rounded-[13px]">
        <h1 className="text-3xl font-bold mb-5">Login Page</h1>
        <div className="flex flex-col">
          <label htmlFor="">Enter your email</label>
          <input className="border my-2 border-zinc-300 rounded-[6px]"type="email"/>
        </div>
        <button className="bg-yellow-500 py-2 px-4 rounded-[6px] hover:bg-yellow-700">
          submit
        </button>
      </form>
    </div>
  );
}
