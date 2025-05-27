import Description from '../../components/common/Description'
import Form from '../../components/common/Form'
import AppsAuth from './AppsAuth'
import Line from '../../components/common/Line'
export default function AuthType({
  title,
  description,
  type,
  routeTitle,
  // route,
  routeText,
}) {
  return (
    <div className="max-w-[460px] top-[97px] left-[490px] gap-2.5 rounded-[20px] p-10 flex flex-col">
      <h3 className="text-center text-xl">{title}</h3>
      <Description text={description} className="text-center" />
      <Form Type={type} />
      <AppsAuth />
      <Line text="or" />
      <Description text={routeText} className="text-center" link={routeTitle} />

      {type == 'SignUp' && (
        <>
          <Line />
          <Description
            text="SignUp as an"
            className="text-center"
            link="Instructor"
          />
        </>
      )}
    </div>
  )
}
