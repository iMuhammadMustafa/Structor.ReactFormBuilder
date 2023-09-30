import FormBuilder from "../../Form/FormBuilder";

export default function InputGroup(props) {
  const {
    name,
    fields,
    isFormSubmit,
    isFormCleared,
    setIsFormTouched,
    value,
    handleInputChange,
    handleInputBlur,
    errors,
    label,
    setValues,
  } = { ...props };

  const handleGroupBlur = async (field, e) => {
    await handleInputBlur({ ...field, parentName: name }, e);
  };
  const handleGroupChange = async (field, e) => {
    await handleInputChange({ ...field, parentName: name }, e);
  };

  return (
    <div className="card bg-dark">
      {label && <h5 className="card-header">{label}</h5>}
      <div className="card-body">
        <FormBuilder
          fields={fields}
          isFormSubmit={isFormSubmit}
          isFormCleared={isFormCleared}
          setIsFormTouched={setIsFormTouched}
          values={value ? value : ""}
          setValues={setValues}
          handleInputChange={handleGroupChange}
          handleInputBlur={handleGroupBlur}
          errors={errors}
        />
      </div>
    </div>
  );
}
