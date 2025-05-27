import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import { CiFacebook } from 'react-icons/ci'
import Button from '../../components/common/button'

export default function AppsAuth() {
  const Buttons = [
    {
      leftIcon: <FcGoogle />,

      title: 'Continue With Google',
    },
    {
      leftIcon: <FaApple />,

      title: 'Continue With Facebook',
    },
    {
      leftIcon: <CiFacebook />,
      title: 'Continue With Apple',
    },
  ]
  return (
    <>
      {Buttons.map((button) => (
        <Button
          leftIcon={button.leftIcon}
          className="pl-12 pr-12 p-1.5 text-center border-1 border-[#EEEEEE]  !bg-[#f7f7f7]  "
          key={button.title}
        >
          <span className='w-full'>{button.title}</span>
        </Button>
      ))}
    </>
  )
}
