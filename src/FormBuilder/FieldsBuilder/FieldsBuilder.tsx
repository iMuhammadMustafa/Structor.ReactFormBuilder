import FieldBuilder, { IFieldBuilder } from "../FieldBuilder/FieldBuilder";
import { IError } from "../Types/Error";

export interface IFieldsBuilder {
  fields: Array<IFieldBuilder>;
  values?: never;
  setValues?: any;
  isFormCleared?: boolean;
  isFormSubmit?: boolean;
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
        key={field.fieldSchema.type + index}
        value={values ? values[field.fieldSchema.name] : ""}
        // setValues={setValues}
        handleInputChange={handleInputChange}
        handleInputBlur={handleInputBlur}
        errors={errors != undefined ? errors.filter(error => error.fieldName === field.fieldSchema.name) : []}
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
