import React from "react";


function TodoCard({openModal,card}) {
  return (
    <div className="flex flex-col m-[10px] sm:w-[560px] [md:w-1/3] lg:w-[1/4]">
      <div className="bg-gray-100 p-[20px] rounded-[5px]">
        <h1 className="font-bold text-3xl">{card.title}</h1>
        <p>{card.description}</p>
      </div>
      <div className="bg-gray-300 w-[560  px]">
        <div className="flex justify-end">
            <button onClick={() => {openModal("Edit",card)}}   className="flex justify-center m-5 bg-yellow-400 hover:bg-yellow-500 rounded-[10px] items-center font-bold px-[20px] py-[10px] sm:px-[30px] sm:py-[20px] mr-0">Edit</button>
            <button onClick={() => {openModal("Delete",card)}} className="flex justify-center m-5 bg-yellow-400 hover:bg-yellow-500 rounded-[10px] items-center font-bold px-[20px] py-[10px] sm:px-[30px] sm:py-[20px]">Delete</button>
        </div>
      </div>
    </div>
  );
}


export default TodoCard;