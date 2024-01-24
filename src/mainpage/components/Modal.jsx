import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Modal = ({ closeModal, modalType, modalHandle, email, selectedCard }) => {
  const [title, setTitleLocal] = useState('');
  const [description, setDescriptionLocal] = useState('');

  useEffect(() => {
    setTitleLocal(selectedCard ? selectedCard.title || '' : '');
    setDescriptionLocal(selectedCard ? selectedCard.description || '' : '');
  }, [selectedCard]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (modalType === 'Create') {
      const newCard = {
        id: uuidv4(),
        title: title || 'New Card Title',
        description: description || 'New Card Description',
        author: email,
      };
      closeModal(false);
      modalHandle(newCard);
    } else if (modalType === 'Edit') {
      const updatedCard = {
        ...selectedCard,
        title: title || 'New Card Title',
        description: description || 'New Card Description',
      };
      closeModal(false);
      modalHandle(updatedCard);
    } else {
      closeModal(false);
    }
  };

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center z-99 bg-black bg-opacity-50 '>
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col items-center justify-center ${
          modalType === 'Delete'
            ? 'w-[700px] h-[241px]'
            : 'w-[700px] h-[350px]'
        } shadow shadow-zinc-700 bg-white rounded-[16px]`}>
        <div className='w-[100%] mt-[10px]'>
          <button
            className='bg-red-600 p-2 rounded-full float-right my-0 mx-5'
            onClick={() => {
              closeModal(false);
            }}></button>
        </div>
        <h1 className='text-[1.875rem] font-bold'>
          {modalType === 'Create' ? 'Create' : 'Edit'} CARD
        </h1>

        {(modalType === 'Create' || modalType === 'Edit') && (
          <div className='flex flex-col w-[80%]'>
            <label htmlFor='' className='text-zinc-600'>
              Title:
            </label>
            <input
              required
              className='border border-zinc-300 rounded-[6px] my-2 h-[40px] p-1'
              value={title}
              onChange={(e) => {
                setTitleLocal(e.target.value);
              }}
            />
            <label htmlFor='' className='text-zinc-600'>
              Description:
            </label>
            <input
              required
              className='border border-zinc-300 rounded-[6px] my-2 h-[40px] p-1'
              value={description}
              onChange={(e) => {
                setDescriptionLocal(e.target.value);
              }}
            />
            <div className='flex justify-end h-[20%] items-center mt-[20px]'>
              <button
                className='border border-zinc-300 py-2 px-5 rounded-[5px] font-bold hover:bg-[#DFDFDF]'
                onClick={() => {
                  closeModal(false);
                }}>
                Close
              </button>
              <button
                className='bg-yellow-400 py-2 px-5 rounded-[5px] font-bold mx-2 hover:bg-[#F6AB1A]'>
                {modalType === 'Create' ? 'Create' : 'Edit'}
              </button>
            </div>
          </div>
        )}

        {modalType === 'Delete' && (
          <div className='flex flex-col'>
            <p className='pt-5 pb-5'>Are you sure you want to delete card “Card name”?</p>
            <div className='flex flex-row justify-center'>
              <button
                className='border border-zinc-300 py-2 px-5 w-[124px] h-[61px] rounded-[5px] font-bold hover:bg-[#DFDFDF]'
                onClick={() => {
                  closeModal(false);
                }}>
                Close
              </button>
              <button
                onClick={() => {
                  closeModal(false);
                  modalHandle(undefined);
                }}
                className='bg-yellow-400 py-2 px-5 w-[124px] h-[61px] rounded-[5px] font-bold mx-2 hover:bg-[#FF4C4C]'>
                Delete
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Modal;
