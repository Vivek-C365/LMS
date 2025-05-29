import BaseAuthForm from './BaseAuthForm'
import Input from 'antd/es/input/Input'

const SignUpForm = () => {
  return (
    <BaseAuthForm
      buttonText="SignUp"
      fields={[
        {
          props: {
            name: 'firstname',
            rules: [{ required: true, message: 'Please input your firstname!' }],
          },
          component: <Input placeholder="First Name" style={{padding: 10}}/>,
        },
        {
          props: {
            name: 'lastname',
            rules: [{ required: true, message: 'Please input your lastname!' }],
          },
          component: <Input placeholder="Last Name" style={{padding: 10}}/>,
        },
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

export default SignUpForm;
