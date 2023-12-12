import Button from "../../../components/Button/Button"
import GradientContainer from "../../../components/GradientContainer/GradientContainer"
import CardContainer from "../../../components/CardContainer/CardContainer"
import { APP_CONSTANTS } from "../../../constants/appConstants"

interface Iprops {
  email: string
}

const ConfirmEmail = ({email}: Iprops) => {
  const renderText = (className: string, value: any) => {
    return (
      <span className={`${className} text-base font-normal font-['Heebo'] leading-7 tracking-tight`}>
        {value}<br/>
      </span>)
  }
  return (
    <GradientContainer heading={APP_CONSTANTS.CONFIRM_EMAIL} gradientClass="min-w-[540px] h-[368px] create-account-gradient">
      <CardContainer cardClass=" h-60"> 
        <div className="flex flex-col justify-around items-center">
          <div className="mt-10 text-center">
            {renderText('text-neutral-800', APP_CONSTANTS.CONFIRMATION_EMAIL_SENT)}
            {renderText('text-blue-600', email)}
            {renderText('text-neutral-800', APP_CONSTANTS.CHECK_INBOX)}
          </div> 
          <Button purpose={'secondary'} customStyle="w-[126px] h-10 mt-4" name={APP_CONSTANTS.OPEN_INBOX} />
        </div>
      </CardContainer>
    </GradientContainer>
  )
}

export default ConfirmEmail
