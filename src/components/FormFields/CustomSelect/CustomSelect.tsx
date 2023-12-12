import { FieldHookConfig, useField } from "formik";
import Select, { MultiValue } from "react-select";
import FormFieldContainer from "../FormFieldContainer/FormFieldContainer";

interface Option {
  label: string;
  value: string;
} 

interface Iprops {
  options:  Option[]
  id?: string
  name?: string
  label?: string
  placeholder?: string
}
const CustomSelect = ({ placeholder,label, options, ...props }: Iprops) => {
  const [field, meta, { setValue, setTouched }] = useField(props as string | FieldHookConfig<any>);

  const onChange = (selectedOptions: MultiValue<any>) => {
    setValue(selectedOptions);
  }
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: '#fff',
      borderColor: '#9e9e9e',
      minHeight: '42px',
      height: '30px',
      boxShadow: state.isFocused ? null : null,
      alignContent: 'space-around',
      alignItems: 'space-around'
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: '30px',
      padding: '0 6px'
    }),

    input: (provided, state) => ({
      ...provided,
      margin: '0px',
    }),
    indicatorSeparator: state => ({
      display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: '30px',
    }),
  };
  return (
    <FormFieldContainer touched={meta.touched} error={meta.error ? meta.error['label' as any] : undefined} name={props.id || props.name} label={label} >
      <div>
        <Select
          {...field} {...props} 
          isMulti={false}
          defaultValue={options.find((option) => option.value === field.value)}
          placeholder={placeholder}
          onChange={onChange}
          options={options}
          styles={customStyles}
          onBlur={() => {
            setTouched(true)
            field.onBlur
          }}
        />
      </div>
    </FormFieldContainer>
  );
}

export default CustomSelect