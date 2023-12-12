import checkoutFormModel from './aboutFormModel';
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

export default {
  [firstName.name]: '',
  [lastName.name]: '',
  [password.name]: '',
  [confirmPassword.name]: '',
  [designation.name]: '',
  [contactNumber.name]: '',
  [companyName.name]: '',
  [verticalDealsWith.name]: '',
  [website.name]: '',
  [companySize.name]: '',
  [state.name]: '',
  [country.name]: '',
};
