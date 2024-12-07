import {createContext, useState } from "react";

const PopupContext = createContext();

export const PopupProvider = ({ children, fetchChecklists }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const openPopup = (id) => {
    setDeleteId(id);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setDeleteId(null);
  };

  return (
    <PopupContext.Provider value={{ 
      isOpen, 
      openPopup, 
      closePopup, 
      deleteId,
      fetchChecklists 
    }}>
      {children}
    </PopupContext.Provider>
  );
};

export default PopupContext