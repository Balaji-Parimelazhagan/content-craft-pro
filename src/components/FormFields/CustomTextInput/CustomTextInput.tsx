import { FieldHookConfig, useField } from "formik";
import FormFieldContainer from "../FormFieldContainer/FormFieldContainer";

interface Iprops {
  label: string;
  placeHolder?: string;
  name?: string;
  type?: string;
  id?: string; 
}
 
const CustomTextInput = ({ label,type = 'text', placeHolder, ...props }: Iprops) => {
  const [field, meta] = useField(props as string | FieldHookConfig<any>);
  return (
    <FormFieldContainer touched={meta.touched} error={meta.error} name={props.id || props.name} label={label} >
      <input
        id={props.id}
        type={type}
        placeholder={placeHolder}
        {...field} {...props} 
        className={`
          ${meta.touched && meta.error ? 'border-orange-500' : 'border-neutral-300'}
          min-w-[400px] block min-w-full rounded-md border font-['Heebo'] shadomin-w-inner px-3 bg-white
          `} 
      />
    </FormFieldContainer>
  );
};

 export default CustomTextInput