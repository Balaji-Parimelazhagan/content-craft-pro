import MyTextInput from "../../../components/FormFields/CustomTextInput/CustomTextInput";
import CustomSelect from "../../../components/FormFields/CustomSelect/CustomSelect";

const AboutCompanyFields = () => {
  return(
    <>
      <MyTextInput
        name="companyName" 
        label="Company Name"
        placeHolder="Enter Company Name"
      />
      <CustomSelect
        options={[{label: '1', value: '1'}, {label: '2', value: '2'}]}
        name="verticalDealsWith"  
        label="Vertical Deals With"
        placeholder="Please Select"
      />
      <MyTextInput
        name="website"  
        label="Website"
        placeHolder="Enter Website"
      />
      <CustomSelect
        options={[{label: '1', value: '1'}, {label: '2', value: '2'}]}
        name="companySize" 
        label="Company Size"
        placeholder="Select Company size"
      />
      <CustomSelect
        options={[{label: '1', value: '1'}, {label: '2', value: '2'}]}
        name="country" 
        label="Country"
        placeholder="Select Country"
      />
      <CustomSelect
        name="state"  
        label="State"
        options={[{label: '1', value: '1'}, {label: '2', value: '2'}]}
        placeholder="Select State"
      />
    </>
  )
}

export default AboutCompanyFields;