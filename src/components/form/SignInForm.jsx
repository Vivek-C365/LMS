import BaseAuthForm from './BaseAuthForm'
import Input from 'antd/es/input/Input'

const SignInForm = () => {
  
  return (
    <BaseAuthForm
      buttonText="SignIn"
      fields={[
        {
          props: {
            name: 'email',
            rules: [{ required: true, message: 'Please input your username!' }],
          },
          component: <Input placeholder="Email" style={{padding: 10}}/>,
        },
        {
          props: {
            name: 'password',
            rules: [{ required: true, message: 'Please input your password!' }],
          },
          component: <Input.Password placeholder="Password" style={{padding: 10}}/>,
        },
      ]}
    />
  )
}

export default SignInForm
