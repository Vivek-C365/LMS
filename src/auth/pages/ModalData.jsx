import Description from '../../components/common/Description'
import Line from '../../components/common/Line'
import ForgotPasswordForm from '../../components/form/ForgotPasswordForm'
import SignInForm from '../../components/form/SignInForm'
import SignUpForm from '../../components/form/SignUpForm'
import AppsAuth from './AppsAuth'
import OtpForm from '../../components/form/otpForm'

export default function ModalData({
  title,
  description,
  type,
  routeTitle,
  // route,
  routeText,
  bottomText,
  bottomLink,
}) {
  return (
    <div className="max-w-[460px] top-[97px] left-[490px] gap-2.5 rounded-[20px] p-10 flex flex-col">
      <h3 className="font-bold text-[32px] leading-[120%] text-center">
        {title}
      </h3>
      <Description
        text={description}
        className="text-center font-semibold text-[#9A9A9A] text-[16px] "
      />
      {type == 'SignIn' && <SignInForm />}
      {type == 'SignUp' && <SignUpForm />}
      {type == 'Forgot' && <ForgotPasswordForm />}
      {type == 'OTP' && <OtpForm/>}

      {(type == 'SignIn' || type == 'SignUp') && <Line text="or" />}

      {(type == 'SignIn' || type == 'SignUp') && <AppsAuth />}
      {(type == 'SignIn' || type == 'SignUp') && <Description text={routeText} className="text-center" link={routeTitle}/>}

      {(type != 'SignIn') && (
        <>
          <Line />
          <Description
            text={bottomText}
            className="text-center"
            link={bottomLink}
          />
        </>
      )}
    </div>
  )
}
