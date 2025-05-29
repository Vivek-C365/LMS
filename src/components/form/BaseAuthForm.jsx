import Button from '../common/button'
import { Form } from 'antd'
import Description from '../common/Description'
import { useContext } from 'react'
import ModalContext from '../../context/ModalContext'


const onFinish = (values) => {
  console.log('Success:', values)
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}
export default function BaseAuthForm({ fields, buttonText }) {
   const {setActiveModal} = useContext(ModalContext);

  function handleForm(){
     if(buttonText == "Reset Password"){
         setActiveModal('otp');
    }
    if(buttonText == "SignIn"){
      setActiveModal('forgot');
    }
  }
  
  return (
    <div className=" w-full mt-2">
      <Form
        name="basic"
        style={{
          width: '100%',
          gap: 2 // Ensures it doesn't overflow on small screens
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {fields.map((field) => (
          <Form.Item style={{ marginBottom: 12, borderRadius: 10 }} key={field.name} {...field.props}>
            {field.component}
          </Form.Item>
        ))}

        {buttonText=='SignIn' && (<Description className="font-normal text-base leading-[150%] mt-[-8px] tracking-normal text-right" type="no" link="Forget Password?" onClick={()=>handleForm()} />)}
        

        <Form.Item>
          <Button className="w-full bg-[var(--color-primary)] !rounded-[10px] !p-2.5 text-center mt-3" onClick={()=>handleForm()}>
            {buttonText}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
