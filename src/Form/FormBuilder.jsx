import FieldBuilder from "./FieldBuilder";

export default function FormBuilder(props) {
  const {
    fields,
    values,
    setValues,
    isFormCleared,
    isFormSubmit,
    setIsFormTouched,
    handleInputChange,
    handleInputBlur,
    errors,
  } = {
    ...props,
  };

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
        setValues={setValues}
        handleInputChange={handleInputChange}
        handleInputBlur={handleInputBlur}
        errors={errors.filter(error => error.name === field.name)}
        isFormSubmit={isFormSubmit}
        isFormCleared={isFormCleared}
        setIsFormTouched={setIsFormTouched}
        options={field.options}
        fields={field.fields}
        // isDynamicGroup={field.isDynamicGroup}
      />
    );
  });
}
