import { useEffect } from "react";

import FormBuilder from "../Form/FormBuilder";

export default function InputGroup(props) {
  const name = props.name;
  const fields = props.fields;
  const isFormSubmit = props.isFormSubmit;
  const isFormCleared = props.isFormCleared;
  const setIsFormTouched = props.setIsFormTouched;
  const groupValues = props.value;
  const handleInputChange = props.handleInputChange;
  const handleInputBlur = props.handleInputBlur;
  const errors = props.errors;
  const label = props.label;
  const setValues = props.setValues;

  //   const handleGroupChange = async e => {
  //     setValues({ ...groupValues, [name]: { [e.target.name]: e.target.value } });
  //     await handleInputChange({ name: e.target.name, parent: name, value: e.target.value });
  //   };
  //   const handleGroupBlur = e => {};

  const handleGroupBlur = async (field, e) => {
    await handleInputBlur({ ...field, parentName: name }, e);
  };
  const handleGroupChange = async (field, e) => {
    await handleInputChange({ ...field, parentName: name }, e);
  };

  useEffect(() => {
    console.log("Value of name");
    console.log(groupValues);
  }, [groupValues]);

  return (
    <div className="card bg-dark">
      {label && <h5 className="card-header">{label}</h5>}
      <div className="card-body">
        <FormBuilder
          fields={fields}
          isFormSubmit={isFormSubmit}
          isFormCleared={isFormCleared}
          setIsFormTouched={setIsFormTouched}
          values={groupValues ? groupValues : ""}
          setValues={setValues}
          handleInputChange={handleGroupChange}
          handleInputBlur={handleGroupBlur}
          errors={errors}
        />
      </div>
    </div>
  );
}
/*
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
        */
