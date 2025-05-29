import { useContext } from "react"
import AuthModals from "../../auth/pages/AuthModals"
import ModalContext from "../../context/ModalContext"

const ModalRoot = () => {
  const {activeModal} = useContext(ModalContext);

  if(!activeModal) return null;
  return <AuthModals/>
}

export default ModalRoot
