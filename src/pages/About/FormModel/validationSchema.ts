import * as Yup from 'yup';
import checkoutFormModel from './aboutFormModel';
import { APP_CONSTANTS } from '../../../constants/appConstants';
const {
  formField: {
    firstName,
    lastName,
    password,
    confirmPassword,
    designation,
    contactNumber,
    companyName,
    verticalDealsWith,
    website,
    companySize,
    state,
    country
  }
} = checkoutFormModel;

export default [
  Yup.object({
    [firstName.name]: Yup.string().required(firstName.requiredErrorMessage),
    [lastName.name]: Yup.string().required(lastName.requiredErrorMessage),
    [password.name]: Yup.string()
      .required(password.requiredErrorMessage)
      .matches(APP_CONSTANTS.EMAIL_REGEX , APP_CONSTANTS.VALIDATION_MESSAGE.EMAIL_REGEX_INVALID),
    [confirmPassword.name]: Yup.string()
      .oneOf([Yup.ref(password.name), ''], APP_CONSTANTS.VALIDATION_MESSAGE.PASSWORD_MISSMATCH).required(confirmPassword.requiredErrorMessage),
    [designation.name]: Yup.object().shape({
      label: Yup.string().required(designation.requiredErrorMessage),
      value: Yup.string().required(designation.requiredErrorMessage),
    }).required(designation.requiredErrorMessage),
    [contactNumber.name]: Yup.string()
      .required(contactNumber.requiredErrorMessage),
  }),
  Yup.object({
    [companyName.name]: Yup.string()
      .required(companyName.requiredErrorMessage),
    [verticalDealsWith.name]: Yup.object().shape({
      label: Yup.string().required(verticalDealsWith.requiredErrorMessage),
      value: Yup.string().required(verticalDealsWith.requiredErrorMessage),
    }).required(verticalDealsWith.requiredErrorMessage),
    [website.name]: Yup.string()
      .required(website.requiredErrorMessage),
    [companySize.name]: Yup.object().shape({
      label: Yup.string().required(companySize.requiredErrorMessage),
      value: Yup.string().required(companySize.requiredErrorMessage),
    }).required(companySize.requiredErrorMessage),
    [country.name]: Yup.object().shape({
      label: Yup.string().required(country.requiredErrorMessage),
      value: Yup.string().required(country.requiredErrorMessage),
    }).required(country.requiredErrorMessage),
    [state.name]: Yup.object().shape({
      label: Yup.string().required(state.requiredErrorMessage),
      value: Yup.string().required(state.requiredErrorMessage),
    }).required(state.requiredErrorMessage),
  })
];
