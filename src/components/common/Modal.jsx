// import React from "react";
// import { Modal } from "antd";

// const ModalPage = ({  children, open, onCancel, onOk }) => {
//   return (
//     <>
//       <Modal
//         open={open}
//         onOk={onOk}

//         onCancel={onCancel}
//         footer={null}
//       >
//         {children}
//       </Modal>
//     </>
//   );
// };

// export default ModalPage;

import { cloneElement, createContext, useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { HiXMark } from 'react-icons/hi2'

//Min resaon to use the createportal is used to avoid the conflit with css property overflow set to hiiden

const ModalContext = createContext()

function Modal({ children }) {
  const [openName, setOpenName] = useState('')

  const close = () => setOpenName('')
  const open = setOpenName

  return (
    <ModalContext.Provider
      value={{
        close,
        open,
        openName,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext)

  return cloneElement(children, { onClick: () => open(opensWindowName) })
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext)

  if (name !== openName) return null

  return createPortal(
    <div className="w-full bg-[#0E0E0E4D] fixed top-0 left-0 h-[100vh] overflow-y-auto z-34">
      <div className="py-6 flex justify-center items-center">
        <div className="max-w-[460px] bg-[#FFFFFF] rounded-2xl shadow-xl p-8 transition-all duration-500">
          <button
            onClick={close}
            className="absolute top-3 right-5 bg-none border-none p-1 rounded-sm transition-all duration-200 hover:bg-gray-100"
          >
            <HiXMark className="w-6 h-6 text-gray-500" />
          </button>
          <div>{children}</div>
        </div>
      </div>
    </div>,

    document.body
  )
}

Modal.Open = Open
Modal.Window = Window

export default Modal
