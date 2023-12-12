import { APP_CONSTANTS } from "../../../constants/appConstants";

export default {
  formId: 'aboutForm',
  formField: {
    firstName: {
      name: "firstName",
      label: "First Name",
      requiredErrorMessage: APP_CONSTANTS.VALIDATION_MESSAGE.REQUIRED
    },
    lastName: {
      name: "lastName",
      label: "Last Name",
      requiredErrorMessage: APP_CONSTANTS.VALIDATION_MESSAGE.REQUIRED
    },
    password: {
      name: "password",
      label: "Password",
      requiredErrorMessage: APP_CONSTANTS.VALIDATION_MESSAGE.REQUIRED
    },
    confirmPassword: {
      name: "confirmPassword",
      label: "Confirm Password",
      requiredErrorMessage: APP_CONSTANTS.VALIDATION_MESSAGE.REQUIRED
    },
    designation: {
      name: "designation",
      label: "Designation",
      requiredErrorMessage: APP_CONSTANTS.VALIDATION_MESSAGE.REQUIRED
    },
    contactNumber: {
      name: "contactNumber",
      label: "Contact Number",
      requiredErrorMessage: APP_CONSTANTS.VALIDATION_MESSAGE.REQUIRED
    },
    companyName: {
      name: "companyName",
      label: "Company Name",
      requiredErrorMessage: APP_CONSTANTS.VALIDATION_MESSAGE.REQUIRED
    },
    verticalDealsWith: {
      name: "verticalDealsWith",
      label: "Vertical Deals With",
      requiredErrorMessage: APP_CONSTANTS.VALIDATION_MESSAGE.REQUIRED
    },
    website: {
      name: "website",
      label: "Website",
      requiredErrorMessage: APP_CONSTANTS.VALIDATION_MESSAGE.REQUIRED
    },
    companySize: {
      name: "companySize",
      label: "Company Size",
      requiredErrorMessage: APP_CONSTANTS.VALIDATION_MESSAGE.REQUIRED
    },
    country: {
      name: "country",
      label: "Country",
      requiredErrorMessage: APP_CONSTANTS.VALIDATION_MESSAGE.REQUIRED
    },
    state: {
      name: "state",
      label: "State",
      requiredErrorMessage: APP_CONSTANTS.VALIDATION_MESSAGE.REQUIRED
    }
  }
};
