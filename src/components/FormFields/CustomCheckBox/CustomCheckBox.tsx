import { FieldHookConfig, useField } from "formik";

interface Iprops {
  label: string;
  name?: string;
  id?: string; 
}
const CustomCheckbox = ({ label, ...props }: Iprops) => {
  const [field,] = useField(props as string | FieldHookConfig<any>);
  return (
    <div>
      <>
        <label htmlFor="userAgreement" className="min-w-[200px] flex text-stone-500 text-xs font-normal font-['Heebo'] tracking-tight">
          <input type="checkbox" className="float-left mr-2 rounded checked:bg-black checked:text-black focus-visible:outline-0" {...field} {...props} />
          {label}
        </label>
      </>
    </div>
  );
};

export default CustomCheckbox