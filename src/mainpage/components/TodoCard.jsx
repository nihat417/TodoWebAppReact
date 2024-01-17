import React from "react";

function TodoCard({openModal}) {
  return (
    <div className="flex flex-col m-[10px] sm:w-[560px] md:w-1/3 lg:w-[1/4]">
      <div className="bg-gray-100 p-[20px] rounded-[5px]">
        <h1 className="font-bold text-3xl">Card Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="bg-gray-300 w-[560  px]">
        <div className="flex justify-end">
            <button onClick={() => {openModal("Edit")}}   className="flex justify-center m-5 bg-yellow-400 hover:bg-yellow-500 rounded-[10px] items-center font-bold px-[20px] py-[10px] sm:px-[30px] sm:py-[20px] mr-0">Edit</button>
            <button onClick={() => {openModal("Delete")}} className="flex justify-center m-5 bg-yellow-400 hover:bg-yellow-500 rounded-[10px] items-center font-bold px-[20px] py-[10px] sm:px-[30px] sm:py-[20px]">Delete</button>
        </div>
      </div>
    </div>
  );
}


export default TodoCard;