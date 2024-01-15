import React from "react";

export default function Header({email,setAuthorized}) {
  return (
    <div className="flex bg-gray-300 top-0 left-0 w-full h-16 justify-between items-center">
      <div className="flex m-[10px] font-bold">
        <p className="font-bold text-xl ml-[50px]">{email}</p>
      </div>
      <div className="flex font-bold">
      <button onClick={()=>{setAuthorized(false)}} className="bg-yellow-400 py-3 px-10 font-bold rounded-[8px] mr-[68px] hover:bg-yellow-500">
        Log out
      </button>
      </div>
    </div>
  );
}


