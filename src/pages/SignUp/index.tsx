import { Formik, Form } from "formik"
import * as Yup from 'yup';

import Button from "../../components/Button/Button"
import Google from "../../assets/images/google.svg"
import Microsoft from "../../assets/images/microsoft.png"
import ImageButton from "../../components/Button/ImageButton"
import GradientContainer from "../../components/GradientContainer/GradientContainer"
import CardContainer from "../../components/CardContainer/CardContainer"
import MyTextInput from "../../components/FormFields/CustomTextInput/CustomTextInput"
import MyCheckBox from "../../components/FormFields/CustomCheckBox/CustomCheckBox"
import { APP_CONSTANTS } from "../../constants/appConstants";
import { signUp } from "../../services/api/signUpService";
import ConfirmEmail from "./ConfirmEmail";
import Loader from "../../components/Loader/Loader";

const SignUp = () => {
  const {data, isLoading, mutate} = signUp();
  const handleSubmit = (email: string) => {
    mutate({email})
  }

  if (isLoading) {
    return <Loader />
  }
  return !data 
    ?
      <GradientContainer heading={APP_CONSTANTS.CREATE_MARKETER_ACCOUNT} gradientClass="min-w-[540px] h-[460px] create-account-gradient">
        <>
          <CardContainer cardClass="min-w-[452px] h-[200px]">
            <Formik
              initialValues={{
                email: '',
                acceptedTerms: false, // added for our checkbox
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email(APP_CONSTANTS.VALIDATION_MESSAGE.EMAIL)
                  .required(APP_CONSTANTS.VALIDATION_MESSAGE.REQUIRED),
                acceptedTerms: Yup.boolean()
                  .required(APP_CONSTANTS.VALIDATION_MESSAGE.REQUIRED)
                  .oneOf([true], ''),
              })}
              onSubmit={(values, { setSubmitting }) => {
                handleSubmit(values.email)
                setSubmitting(false);
              }}
            >
              {({ isValid }) =>
              <Form action="#" method="POST">
                <>
                  <div className="p-6 text-left">
                    <MyTextInput
                      label="Email ID"
                      name="email"
                      type="email"  />
                  </div>
                  <div className="px-6 flex justify-between">
                    <div className="checkbox-wrapper flex items-center">
                      <MyCheckBox label="I agree to Expert9 Terms of Service and Privacy Policy" name="acceptedTerms" />
                    </div>
                    <Button type={'submit'} disabled={!isValid}  customStyle="min-w-[100px] h-10" name={APP_CONSTANTS.SIGN_UP} />
                  </div>
                </>
              </Form>}
            </Formik>
          </CardContainer>
          <div className="min-w-100 text-center pt-8 text-center text-teal-900 text-base font-normal font-['Heebo'] leading-tight tracking-tight">
            {APP_CONSTANTS.CREATE_ACCOUNT_BY_SIGNINGUP}
          </div>
          <div className="my-4">
            <ImageButton alt={APP_CONSTANTS.GSUITE} buttonText={APP_CONSTANTS.GSUITE} src={Google} />
            <ImageButton alt={APP_CONSTANTS.MICROSOFT} buttonText={APP_CONSTANTS.MICROSOFT} src={Microsoft} />
          </div>
        </>
      </GradientContainer>
    : <ConfirmEmail email={data?.email || ''}/>
}

export default SignUp
