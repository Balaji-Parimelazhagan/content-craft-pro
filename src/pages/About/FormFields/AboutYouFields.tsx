import MyTextInput from "../../../components/FormFields/CustomTextInput/CustomTextInput";
import CustomSelect from "../../../components/FormFields/CustomSelect/CustomSelect";

const AboutYouFields = () => {
  return(
    <>
      <MyTextInput
        placeHolder="Enter First Name"
        label="First Name"
        name="firstName"  
      />
      <MyTextInput
        placeHolder="Enter Last Name"
        label="Last Name"
        name="lastName"
      />
      <MyTextInput
        placeHolder="Enter Password"
        type="password"
        label="Password"
        name="password"
      />
      <MyTextInput
        placeHolder="Confirm Password"
        type="password"
        label="Confirm Password"
        name="confirmPassword"
      />
      <CustomSelect
        options={[{label: '1', value: '1'}, {label: '2', value: '2'}]}
        placeholder="Enter Designation"
        label="Designation"
        name="designation"
      />
      <MyTextInput
        placeHolder="Enter Contact Number"
        label="Contact Number"
        name="contactNumber"
      />
    </>
  )
}

export default AboutYouFields;