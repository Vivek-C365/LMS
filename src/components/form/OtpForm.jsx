import { Input, Typography } from 'antd';
import BaseAuthForm from './BaseAuthForm';
import Description from '../common/Description';

export default function OtpForm() {

  return (
    <>
    <Description className='text-center' text="sahilaggarwal@gmail.com"/>
    <BaseAuthForm
      buttonText="Submit"
      fields={[
        {
          props: {
            name: 'otp',
            rules: [{ required: true,  pattern: /^[0-9]+$/, message: 'Only numbers are allowed!'  }],
          },
          component: <Input.OTP style={{padding: 10}} length={6}/>,
        }
      ]}
    />
    </>
  );
}