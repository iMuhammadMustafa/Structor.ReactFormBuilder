/* eslint-disable @typescript-eslint/no-non-null-assertion */
import HelpText from "./HelpText";
import { HelpTextMockProps } from "./HelpText.mocks";

describe("HelpText", () => {
  it("it should show the text", () => {
    const result = render(<HelpText {...HelpTextMockProps.Base} />);
    const el = result.container.querySelector(`#${HelpTextMockProps.Base.id}-helpText`);

    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent(HelpTextMockProps.Base.text!);
    expect(el).toHaveClass(HelpTextMockProps.Base.cssClasses!);
  });
});
