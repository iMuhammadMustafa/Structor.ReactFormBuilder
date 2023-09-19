import { memo } from "react";

const FormLabel = memo(function FormLabel(props) {
  return <MemoizedFormLabel {...props} />;
});

function MemoizedFormLabel({ id, label, isRequired, className }) {
  return (
    <label id={id + "-label"} htmlFor={id} className={"form-label " + className}>
      {label} {isRequired && <span className="text-danger">*</span>}
    </label>
  );
}

export default FormLabel;
