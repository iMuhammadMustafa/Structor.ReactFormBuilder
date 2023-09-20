/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Label from "./Label";
import LabelMockProps from "./Label.mocks";

describe("Label", () => {
  it("it should show the text", () => {
    const result = render(<Label {...LabelMockProps.Base} />);
    const el = result.container.querySelector(`#${LabelMockProps.Base.id}-label`);

    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent(LabelMockProps.Base.text!);
    expect(el).toHaveClass(LabelMockProps.Base.cssClasses!);
  });
});
