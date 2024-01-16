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
  }

  const closeModal = () => {
    setModalOpen(false);
    setModalType("");
  }

  // const modalHandle = () => {
  //   if(modalType === "Create"){
      
  //   }
  // }

  return (
    <>
      <Header email={email} setAuthorized={setAuthorized} />
      <button className="bg-yellow-400 py-3 px-10 font-bold rounded-[8px] hover:bg-yellow-500 ml-[68px] mt-[20px]" onClick={()=>openModal("Create")}>
        Create card
      </button>
      
      {isModalOpen && (<Modal closeModal={closeModal} modalType={modalType}/>)}

      <div className="flex flex-wrap justify-around px-[50px]">
        <TodoCard openModal={openModal} />
        <TodoCard openModal={openModal} />
        <TodoCard openModal={openModal} />
        <TodoCard openModal={openModal} />
      </div>
    </>
  );
}
