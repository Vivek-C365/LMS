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

import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

//Min resaon to use the createportal is used to avoid the conflit with css property overflow set to hiiden

export default function Modal({ children, onClose }) {
  return createPortal(
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-8 transition-all duration-500">
        <button
          onClick={onClose}
          className="absolute top-3 right-5 bg-none border-none p-1 rounded-sm transition-all duration-200 hover:bg-gray-100"
        >
          <HiXMark className="w-6 h-6 text-gray-500" />
        </button>
        <div>{children}
         Modal Window</div>
      </div>,

     document.body
  );
}
