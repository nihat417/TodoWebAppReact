import React from "react";


function TodoCard({openModal,card}) {
  return (
    <>
    <div className='w-auto md:mr-8 my-5'>
      <div className='border border-zinc-300 rounded-[5px]'>
        <div className='bg-[#efefef] p-[15px] md:p-[30px]'>
          <h1 className="text-xl truncate  md:text-3xl font-bold">{card.title}</h1>
          <p className='my-2 text-clip overflow-hidden text-justify font-bold text-[#555] text-sm md:text-base'>{card.description}</p>
        </div>
      </div>
      <div className="bg-gray-300 w-[560  px]">
        <div className="flex justify-end">
            <button onClick={() => {openModal("Edit",card)}}   className="flex justify-center m-5 bg-yellow-400 hover:bg-yellow-500 rounded-[10px] items-center font-bold px-[20px] py-[10px] sm:px-[30px] sm:py-[20px] mr-0">Edit</button>
            <button onClick={() => {openModal("Delete",card)}} className="flex justify-center m-5 bg-yellow-400 hover:bg-yellow-500 rounded-[10px] items-center font-bold px-[20px] py-[10px] sm:px-[30px] sm:py-[20px]">Delete</button>
        </div>
      </div>
    </div>
    </>
  );
}


export default TodoCard;