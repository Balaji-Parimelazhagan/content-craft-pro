import { ErrorMessage } from "formik";
import { ReactElement } from "react";

interface Iprops {
  children: ReactElement,
  touched: boolean,
  error?: string,
  name?: string,
  label?: string,
}

const FormFieldContainer = ({ children, name, label, touched, error }: Iprops) => {
  return (
    <div className="min-h-[6.2rem]">
      <label 
        className="px-3 text-black text-opacity-60 text-xs font-normal font-['Heebo'] leading-3 tracking-tight" 
        htmlFor={name}
      >
        {label}
      </label>
      <div className="mt-2">
        {children}
      </div>
      {
        touched && error ? (
          <p className="pt-2 px-3 whitespace-break-spaces text-orange-600 text-xs font-normal font-['Heebo'] leading-tight tracking-tight">
            {error}
          </p>
        ): null
      }
    </div>
  )
}

export default FormFieldContainer;