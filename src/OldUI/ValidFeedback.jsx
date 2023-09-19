import { memo } from "react";

const ValidFeedback = memo(function ValidFeedback({ id }) {
  return (
    <div id={id + "-validFeeback"} className="valid-feedback">
      Looks good!
    </div>
  );
});

export default ValidFeedback;
