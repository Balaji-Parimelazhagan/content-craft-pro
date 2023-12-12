import { Form, Formik } from "formik"

import Button from "../../components/Button/Button"
import GradientContainer from "../../components/GradientContainer/GradientContainer"
import CardContainer from "../../components/CardContainer/CardContainer"
import { useState } from "react";
import formInitialValues from "./FormModel/formInitialValues";
import validationSchema from "./FormModel/validationSchema";
import AboutCompanyFields from "./FormFields/AboutCompanyFields";
import AboutYouFields from "./FormFields/AboutYouFields";
import { APP_CONSTANTS } from "../../constants/appConstants";

const aboutHeading = (name: string) => {
  return (
    <div className="text-center text-teal-900 text-2xl font-light font-BricolageGrotesque leading-loose tracking-tight">
      {APP_CONSTANTS.HI}{name}.<br/>{APP_CONSTANTS.ACCOUNT_VERIFIED}
    </div>
  )
}

const About = () => {

  const [aboutCompany, setAboutCompany] = useState(false);
  const validation = aboutCompany ?  validationSchema[1] : validationSchema[0];
  return (
    <GradientContainer heading={aboutHeading('Willem Dafoe')} gradientClass="min-w-[600px] h-[368px] about-you-gradient">
      <CardContainer> 
        <div className="flex flex-col justify-around items-center px-6 pb-8">
          <>
            <div className=" mt-6 text-center text-teal-900 text-xl font-normal font-Heebo">{aboutCompany ? APP_CONSTANTS.ABOUT_COMPANY : APP_CONSTANTS.ABOUT_YOU}</div>
            <Formik
              initialValues={formInitialValues}
              validationSchema={validation}
              onSubmit={(values, { setSubmitting, setTouched }) => {
                if (!aboutCompany) {
                  setAboutCompany(true)
                  setTouched({});
                  setSubmitting(false);
                }
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isValid }) =>
                <Form action="#" method="POST">
                  <div className="grid grid-cols-2 gap-4 gap-y-0">
                    {aboutCompany ? <AboutCompanyFields /> : <AboutYouFields />}
                  </div>
                  <div className={`flex w-100 items-center ${aboutCompany ? 'justify-between' : 'justify-end'}`}>
                    { aboutCompany && <Button type={'button'} purpose="text" customStyle="min-w-[100px] h-10" name={APP_CONSTANTS.PERSONAL_DETAILS} /> }
                    <Button type={'submit'} disabled={!isValid}  customStyle="min-w-[100px] h-10" name={aboutCompany ? APP_CONSTANTS.CONFIRM : APP_CONSTANTS.NEXT} />
                  </div>
                </Form>
              }
            </Formik>
          </>
        </div>
      </CardContainer>
    </GradientContainer>
  )
}

export default About
