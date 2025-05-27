import Modal from '../../components/common/Modal'
import Button from '../../components/common/button'
import AuthType from './AuthType'

export default function AuthPage() {
  return (
    <Modal>
      <Modal.Open opens="signin-modal">
        <Button>SignIn</Button>
      </Modal.Open>
      <Modal.Window name="signin-modal">
        <AuthType
          title="Log Into Account"
          description="Welcome to Learning+, please enter your login details to access your account."
          type="SignIn"
          route="/SignUp"
          routeText="New to Learning+?"
          routeTitle="Sign Up"
        />
      </Modal.Window>

      <Modal.Open opens="signUp-modal">
        <Button>SignUp</Button>
      </Modal.Open>
      <Modal.Window name="signUp-modal">
        <AuthType
          title="Sign In"
          description="Learn on your own time from top
universities and businesses."
          type="SignUp"
          route="/SignIn"
          routeText="Already on Learning+"
          routeTitle="Log In"
        />
      </Modal.Window>
    </Modal>
  )
}
