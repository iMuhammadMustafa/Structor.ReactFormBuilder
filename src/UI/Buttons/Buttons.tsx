import { memo } from "react";

export interface IButtons {
  submitId?: string;
  clearBtn?: boolean;
  clearId?: string;
  submitText?: string;
  clearText?: string;
  submitCssClasses?: string;
  clearCssClasses?: string;

  onClickSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickClear?: (e: React.MouseEvent<HTMLButtonElement>) => void;

  children?: React.ReactNode;
}

const Buttons: React.FC<IButtons> = ({
  submitId = "form-submit",
  submitText = "Submit",
  submitCssClasses = "btn btn-primary mx-2 btn-sm",
  onClickSubmit,
  clearBtn = false,
  clearId = "form-clear",
  clearText = "Clear",
  clearCssClasses = "btn btn-danger btn-sm",
  onClickClear,
  children,
}) => {
  return (
    <>
      <button id={submitId} type="submit" className={submitCssClasses} onClick={e => onClickSubmit && onClickSubmit(e)}>
        {submitText}
      </button>
      {clearBtn && (
        <button id={clearId} type="button" onClick={onClickClear} className={clearCssClasses}>
          {clearText}
        </button>
      )}
    </>
  );
};

export default memo(Buttons);
