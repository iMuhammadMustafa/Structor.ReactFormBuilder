import { memo } from "react";

import { IError } from "@/Types/Error";

interface IDevInfo {
  isTouched: boolean;
  isSubmitted: boolean;
  errors: Array<IError>;
  values: any;
}

function DevInfo({ isTouched, isSubmitted, errors, values }: IDevInfo) {
  return (
    <div className="my-4">
      <p>isTouched: {JSON.stringify(isTouched)}</p>
      <p>isSubmitted: {JSON.stringify(isSubmitted)}</p>
      <p>errors: {JSON.stringify(errors)}</p>
      <p>values: {JSON.stringify(values)}</p>
    </div>
  );
}

export default memo(DevInfo);
