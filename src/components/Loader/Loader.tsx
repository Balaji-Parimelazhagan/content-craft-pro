import LoaderGif from "../../assets/images/spinner.gif"
import GradientContainer from "../GradientContainer/GradientContainer"

const Loader = () => {
  return (
    <GradientContainer heading={''} gradientClass="min-w-[540px] h-[460px] create-account-gradient">
      <img className="h-16 w-16" src={LoaderGif} alt="" />
    </GradientContainer>
  )
}

export default Loader