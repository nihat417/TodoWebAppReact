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

  const modalHandle = (newCard) => {
    if (modalType === 'Create') {
      console.log('New Card:', newCard);
      setCards([...cards, newCard]);
      closeModal();
    } else if (modalType === 'Edit' && selectedCard) {
        const updatedCards = cards.map((card) =>
          card.id === selectedCard.id ? newCard : card
        );
        setCards(updatedCards);
        closeModal();
    } else if (modalType === 'Delete' && selectedCard) {
        const updatedCards = cards.filter((card) => card.id !== selectedCard.id);
        setCards(updatedCards);
        closeModal();
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
