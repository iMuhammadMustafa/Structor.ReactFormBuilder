/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Label from "./Label";
import { LabelMockProps } from "./Label.mocks";

describe("Label", () => {
  it("it should show the text", () => {
    const result = render(<Label {...LabelMockProps.base} />);
    const el = result.container.querySelector(`#${LabelMockProps.base.id}-label`);

    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent(LabelMockProps.base.text!);
    expect(el).toHaveClass(LabelMockProps.base.cssClasses!);
  });
});
