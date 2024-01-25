import React, { useContext, useEffect, useState } from "react";
import TodoCard from "./components/TodoCard";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Context from "../ContextWrapper";

export default function Mainpage() {
  const { email, setAuthorized } = useContext(Context)
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [cards, setCards] = useState([]);
  const [filterCards, setFilterCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);


  useEffect(()=>{
    const getcards = async ()=>{
      const request = await fetch(`http://localhost:3000/cards/${email}`);
      const response = await request.json();
      setCards(response);
    }
    getcards();
  },[cards]);

  useEffect(() => {
    setFilterCards(cards.filter((card) => card.author === email));
  }, [cards, email]);

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
      const response = await request.json();
      setCards((prevCards) => prevCards.filter((card) => (card.id !== selectedCard.id ? response : card)));
      closeModal();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }


  const modalHandle = (newCard) => {
    if (modalType === 'Create') {
      console.log('New Card:', newCard);
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

      <div className="flex flex-wrap justify-center">
        {filterCards.length ? (
          filterCards.map((card) => (
             <TodoCard key={card.id} openModal={openModal} card={card} />
          ))
        ) : (<p className="text-center col-span-3 mt-10">No Cards Found</p>)}
      </div>
    </div>
  );
}
