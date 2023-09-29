import FieldBuilder, { IFieldBuilder } from "../FieldBuilder/FieldBuilder";
import { IError } from "../Types/Error";

export interface IFieldsBuilder {
  fields: Array<IFieldBuilder>;
  values?: any;
  setValues?: any;
  isFormCleared?: boolean;
  isFormSubmit?: boolean;
  setIsFormTouched?: any;
  handleInputChange?: any;
  handleInputBlur?: any;
  errors?: Array<IError>;
  children?: React.ReactNode;
}

export default function FieldsBuilder(props: IFieldsBuilder) {
  const { fields, values, isFormCleared, isFormSubmit, handleInputChange, handleInputBlur, errors } = {
    ...props,
  };

  return fields.map((field, index) => {
    return (
      <FieldBuilder
        {...field}
        key={field.type + index}
        value={values ? values[field.name] : ""}
        // setValues={setValues}
        handleInputChange={handleInputChange}
        handleInputBlur={handleInputBlur}
        errors={errors && errors.filter(error => error.field === field.name)}
        isFormSubmit={isFormSubmit}
        isFormCleared={isFormCleared}
        // setIsFormTouched={setIsFormTouched}

        // id={field.id}
        // name={field.name}
        // label={field.label}
        // type={field.type}
        // helpText={field.helpText}
        // placeHolder={field.placeHolder}

        // options={field.options}
        // fields={field.fields}

        // isDynamicGroup={field.isDynamicGroup}
      />
    );
  });
}
