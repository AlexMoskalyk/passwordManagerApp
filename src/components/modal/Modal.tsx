import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

// const modalRoot: any = document.querySelector('#modal-root');

interface IProps {
  modalActive: boolean;
  toggleModal: () => void;
  children: any;
}

const Modal = ({ modalActive, children, toggleModal }: IProps) => {
  //   useEffect(() => {
  //     window.addEventListener('keydown', handleKeyDown);
  //   });

  //   const handleKeyDown = (e: React.KeyboardEvent) => {
  //     if (e.code === 'Escape') {
  //       console.log('Нажали ESC, нужно закрыть модалку');

  //       toggleModal();
  //     }
  //   };
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal__content">{children}</div>
    </div>
  );
};

export default Modal;
