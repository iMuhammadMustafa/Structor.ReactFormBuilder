import { memo } from "react";

const HelpText = memo(function HelpText(props) {
  return <MemoizedHelpText {...props} />;
});

function MemoizedHelpText({ id, helpText }) {
  return (
    <div id={id + "-helpText"} className="form-text">
      {helpText}
    </div>
  );
}

export default HelpText;
