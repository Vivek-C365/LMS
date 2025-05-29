import BaseAuthForm from './BaseAuthForm'
import Input from 'antd/es/input/Input'

const ForgotPasswordForm = () => {
  
  return (
    <BaseAuthForm
      buttonText="Reset Password"
      fields={[
        {
          props: {
            name: 'email',
            rules: [{ required: true, message: 'Please input your username!' }],
          },
          component: <Input placeholder="Email" style={{padding: 10}}/>,
        }
      ]}
    />
  )
}

export default ForgotPasswordForm