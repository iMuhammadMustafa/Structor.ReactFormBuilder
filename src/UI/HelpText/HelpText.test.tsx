/* eslint-disable @typescript-eslint/no-non-null-assertion */
import HelpText from "./HelpText";
import { HelpTextMockProps } from "./HelpText.mocks";

describe("HelpText", () => {
  it("it should show the text", () => {
    const result = render(<HelpText {...HelpTextMockProps.base} />);
    const el = result.container.querySelector(`#${HelpTextMockProps.base.id}-helpText`);

    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent(HelpTextMockProps.base.text!);
    expect(el).toHaveClass(HelpTextMockProps.base.cssClasses!);
  });
});
