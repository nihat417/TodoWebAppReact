import React, { useContext, useEffect, useState } from "react";
import TodoCard from "./components/TodoCard";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Context from "../ContextWrapper";

export default function Mainpage() {
  const { email, setAuthorized ,cards, setCards , getcards} = useContext(Context)
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);


  useEffect(()=>{getcards();},[cards]);

  const openModal = (e, card) => {
    setModalOpen(true);
    setModalType(e);
    setSelectedCard(card);
    document.body.style.overflow = 'hidden';
  }

  const closeModal = () => {
    setModalOpen(false);
    setModalType('');
    setSelectedCard(null);
    document.body.style.overflow = 'auto';
  }

  const createCard = async (newCard)=>{
    try {
      const request = await fetch("http://localhost:3000/cards",
      {
        method:"Post",
        mode : 'cors',
        body: JSON.stringify(newCard),
        headers : {"Content-type": "application/json"}});
      const response = await request.json();
      setCards([...cards, response]);
      console.log(response);
      closeModal();
    } catch (error) {
      console.log(error);
    }
  }

  const editCard = async (newCard)=>{
    try {
      const request = await fetch(`http://localhost:3000/cards/${selectedCard._id}`, 
      {
        method :'Put',
        mode : "cors",
        body : JSON.stringify(newCard),
        headers :{"Content-type": "application/json"}});
        
        const response = await request.json();
        setCards((prevCards) => prevCards.map((card) => (card.id === selectedCard.id ? response : card)));
        closeModal();
    } catch (error) {
      console.log(error);
    }
  }

  const deleteCard = async ()=>{
    try {
      const request = await fetch(`http://localhost:3000/cards/${selectedCard._id}`,
      {
        method :'Delete',
        mode:"cors"
      })
      if(request.ok){
        const response = await request.json();
        setCards((prevCards) => prevCards.filter((card) => (card.id !== selectedCard.id ? response : card)));
        closeModal();
        console.log(response);
      }
      console.error('Delete request failed:', request.status);
    } catch (error) {
      console.log(error);
    }
  }

  const modalHandle = (newCard) => {
    if (modalType === 'Create') {
      createCard(newCard);
    } else if (modalType === 'Edit' && selectedCard) {
        editCard(newCard);
    } else if (modalType === 'Delete' && selectedCard) {
        deleteCard();
    }
  };

  return (
    <div>
      <Header email={email} setAuthorized={setAuthorized} />
      <div className="flex">
        <button className="bg-yellow-400 hover:bg-yellow-500 my-[20px] ml-[20px] py-2 px-4 sm:ml-[30px] sm:py-3 sm:px-10 font-bold rounded-[8px]" onClick={() => openModal("Create")}>
          Create card
        </button>
      </div>

      {isModalOpen && (<Modal closeModal={closeModal} modalType={modalType} modalHandle={modalHandle} email={email} selectedCard={selectedCard} />)}

      <div className='grid lg:grid-cols-3 md:grid-cols-2 p-10'>
        {cards.length ? (
          cards.map((card) => (
             <TodoCard key={card.id} openModal={openModal} card={card} />
          ))
        ) : (<p className="text-center col-span-3 mt-10">No Cards Found</p>)}
      </div>
    </div>
  );
}
