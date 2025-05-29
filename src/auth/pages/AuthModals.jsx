import { useContext } from 'react'
import ModalPage from '../../components/common/Modal'
import ModalData from './ModalData'
import ModalContext from '../../context/ModalContext'

export default function AuthModals() {
  const { activeModal, setActiveModal } = useContext(ModalContext)
  console.log(activeModal);

  const handleOk = () => {
    setActiveModal(null)
  }

  const handleCancel = () => {
    setActiveModal(null)
  }

  return (
    <>
      <ModalPage
        open={activeModal == 'signIn'}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <ModalData
          title="Log Into Account"
          description="Welcome to Learning+, please enter your login details to access your account."
          type="SignIn"
          route="/SignUp"
          routeText="New to Learning+?"
          routeTitle="Sign Up"
         
        />
      </ModalPage>

      <ModalPage
        open={activeModal == 'signUp'}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <ModalData
          title="SignUp"
          description="Learn on your own time from top universities and businesses."
          type="SignUp"
          route="/SignIn"
          routeText="Already on Learning+"
          routeTitle="Log In"
           bottomText='Sign Up as an'
          bottomLink='Instructor'
        />
      </ModalPage>

      <ModalPage
        open={activeModal == 'forgot'}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <ModalData
          title="Forgot Password"
          description="Enter the email address you use on Learning+. We'll send you a OTP to reset your password."
          type="Forgot"
          route="/login"
          bottomText='Back to'
          bottomLink='Login'
        />
      </ModalPage>

      <ModalPage
        open={activeModal == 'otp'}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <ModalData
          title="OTP Verification"
          description="Please enter the 6-digit OTP sent"
          type="OTP"
          route="/login"
          bottomText='Back to'
          bottomLink='Login'
        />
      </ModalPage>
    </>
  )
}
