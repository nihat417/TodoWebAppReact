import React from "react";

function TodoCard({openModal}) {
  return (
    <div className="flex flex-col w-[560px] m-2">
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
            <button onClick={() => {openModal("Edit")}} className="flex justify-center m-5 mr-0 items-center bg-yellow-400 w-[99px] p-[20px] rounded-[5px] font-bold hover:bg-yellow-500">Edit</button>
            <button onClick={() => {openModal("Delete")}} className="flex justify-center m-5 items-center bg-yellow-400 w-[124px] p-[20px] rounded-[5px] font-bold hover:bg-yellow-500">Delete</button>
        </div>
      </div>
    </div>
  );
}


export default TodoCard;