import FormLabel from "../UI/FormLabel";
import HelpText from "../UI/HelpText";
import InvalidFeedback from "../UI/InvalidFeedback";
import ValidFeedback from "../UI/ValidFeedback";

export default function DropDown(props) {
  const { id, name, placeHolder, label, value, options, helpText, isTouched, handleChange, handleBlur, errors } = {
    ...props,
  };

  return (
    <div className="mb-3 row">
      <FormLabel id={id || name} label={label} className="col-sm-2" />
      <div className="col-sm-10">
        <select
          className={`form-select ${isTouched && errors.length === 0 && "is-valid"} ${
            isTouched && errors.length > 0 && "is-invalid"
          }`}
          aria-label="Default select"
          id={id || name}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value || ""}
        >
          <option value="">{placeHolder ?? label}</option>
          {options?.map(option => {
            return (
              <option key={name + "option" + option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>

        {helpText && <HelpText id={id || name} helpText={helpText} />}
        {errors.length === 0 && <ValidFeedback id={id || name} />}
        {errors.length > 0 && <InvalidFeedback id={id || name} errors={errors} />}
      </div>
    </div>
  );
}
