import React, { useState } from "react";
import TodoCard from "./components/TodoCard";
import Header from "./components/Header";
import Modal from "./components/Modal";

export default function Mainpage({ email, setAuthorized }) {
  const [isModalOpen,setModalOpen] = useState(false);
  const [modalType,setModalType] = useState("");

  const openModal = (e) => {
    setModalOpen(true);
    setModalType(e);
    document.body.style.overflow = 'hidden';
  }

  const closeModal = () => {
    setModalOpen(false);
    setModalType("");
    document.body.style.overflow = 'auto';
  }

  // const modalHandle = () => {
  //   if(modalType === "Create"){
      
  //   }
  // }

  return (
    <>
      <Header email={email} setAuthorized={setAuthorized} />
      <div className="flex">
        <button className="bg-yellow-400 hover:bg-yellow-500 my-[20px] ml-[20px] py-2 px-4 sm:ml-[30px] sm:py-3 sm:px-10 font-bold rounded-[8px]" onClick={()=>openModal("Create")}>
          Create card
        </button>
      </div>
      
      {isModalOpen && (<Modal closeModal={closeModal} modalType={modalType}/>)}

      <div className="flex flex-wrap justify-center">
        <TodoCard openModal={openModal} />
        <TodoCard openModal={openModal} />
        <TodoCard openModal={openModal} />
        <TodoCard openModal={openModal} />
        <TodoCard openModal={openModal} />
      </div>
    </>
  );
}
