import { memo } from "react";

const InValidFeedback = memo(function InValidFeedback(props) {
  return <MemoizedInValidFeedback {...props} />;
});
function MemoizedInValidFeedback({ id, errors }) {
  return (
    errors &&
    errors.map((error, index) => (
      <div key={index} id={id + "-invalidFeedback" + index} className="invalid-feedback">
        {error.message}
      </div>
    ))
  );
}

export default InValidFeedback;
