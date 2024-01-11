import React from "react";

export default function Header() {
  return (
    <div className="flex bg-gray-300 fixed top-0 left-0 w-full h-16 justify-between items-center">
      <div className="flex m-[10px] font-bold">
        <p>example.com</p>
      </div>
      <div className="flex font-bold">
        <button className="bg-yellow-500 w-full w-full min-w-[202px]  px-4 py-2 m-[10px] rounded">
          Log out
        </button>
      </div>
    </div>
  );
}
