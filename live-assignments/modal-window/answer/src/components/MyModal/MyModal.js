'use client'

import './MyModal.css'
import { useState } from 'react';

const MyModal = ({ children }) => {
  const [isOpen, setOpen] = useState(true);

  function hideModal() {
    setOpen(false);
  }

  if (isOpen) {
    return (
      <div>
        <div className="my-modal-outer" onClick={hideModal}></div>
        <div className="my-modal-inner">
          {children}
          <button className="my-modal-close-btn" onClick={hideModal}>X</button>
        </div>
      </div>
    );
  }
}

const Header = ({ children }) => {
  return <header className="my-modal-header">{ children }</header>
}
MyModal.Header = Header;

const Body = ({ children }) => {
  return <div className="my-modal-body">{children}</div>
}
MyModal.Body = Body;

export default MyModal;
