import { useMemo, useState } from 'react';
import ModalContext from './ModalContext';


export const ModalContextProvider = ({children}) => {
  const [activeModal, setActiveModal] = useState(null);

  const contextValue = useMemo(() => ({
    activeModal,
    setActiveModal
  }), [activeModal]);

  return (
    <ModalContext.Provider value={{contextValue, activeModal, setActiveModal}}>
      {children}
    </ModalContext.Provider>
  )
}
