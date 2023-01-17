import { memo } from "react";

const InvalidFeedback = memo(function InvalidFeedback(props) {
  return <MemoizedInvalidFeedback {...props} />;
});
function MemoizedInvalidFeedback({ id, errors }) {
  return (
    errors &&
    errors.map((error, index) => (
      <div key={index} id={id + "-invalidFeedback" + index} className="invalid-feedback">
        {error.message}
      </div>
    ))
  );
}

export default InvalidFeedback;
