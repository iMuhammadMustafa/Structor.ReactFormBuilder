import InputGroup from "../Elements/InputGroup";
import TextInput from "../Elements/TextInput";
import { InputTypes } from "./Form.Types";

export default function FormBuilder(props) {
  const fields = props.fields;
  const values = props.values;
  const setValues = props.setValues;
  const isFormSubmit = props.isFormSubmit;
  const isFormCleared = props.isFormCleared;
  const setIsFormTouched = props.setIsFormTouched;
  const handleInputChange = props.handleInputChange;
  const handleInputBlur = props.handleInputBlur;
  const errors = props.errors;

  return fields.map((field, index) => {
    return (
      <FieldBuilder
        key={field.type + index}
        id={field.id}
        name={field.name}
        label={field.label}
        type={field.type}
        helpText={field.helpText}
        placeHolder={field.placeHolder}
        value={values ? values[field.name] : ""}
        //value={values ? (field.type === InputTypes.GROUP ? values : values[field.name]) : ""}
        setValues={setValues}
        handleInputChange={handleInputChange}
        handleInputBlur={handleInputBlur}
        // isValid={errors.filter(error => error.name === field.name).length === 0}
        errors={errors.filter(error => error.name === field.name)}
        isFormSubmit={isFormSubmit}
        isFormCleared={isFormCleared}
        setIsFormTouched={setIsFormTouched}
        // options={field.options}
        fields={field.fields}
        // isDynamic={field.isDynamic}
      />
    );
  });
}

function FieldBuilder(props) {
  switch (props.type) {
    // return <CheckBoxInput {...props} />;
    case InputTypes.CHECKBOX:
    case InputTypes.TEXT:
    case InputTypes.EMAIL:
    case InputTypes.PASSWORD:
      return <TextInput {...props} />;
    // case InputTypes.DROPDOWN:
    //   return <DropDown {...props} />;
    case InputTypes.GROUP:
      return <InputGroup {...props} />;
    //return props.component;
    default:
      return <div>Not A defined Type</div>;
  }
}
