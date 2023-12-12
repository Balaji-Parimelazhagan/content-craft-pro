import GradientContainer from "../../components/GradientContainer/GradientContainer"
import CardContainer from "../../components/CardContainer/CardContainer"

const Login = () => {
  return (
    <GradientContainer heading={'Login'} gradientClass="min-w-[540px] h-[460px] create-account-gradient">
      <>
        <CardContainer cardClass="min-w-[452px] h-[200px]">
          <>
          Login
          </>
        </CardContainer>
      </>
    </GradientContainer>
  )
}

export default Login
