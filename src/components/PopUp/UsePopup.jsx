import {useContext } from 'react';
import PopupContext from './PopUpProvider';

const usePopup = () => {
  const context = useContext(PopupContext);
  return context;
};

export default usePopup