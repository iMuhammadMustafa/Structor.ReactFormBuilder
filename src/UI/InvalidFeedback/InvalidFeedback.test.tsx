import InvalidFeedback from "./InvalidFeedback";
import { InvalidFeedbackMockProps } from "./InvalidFeedback.mocks";

describe("InvalidFeedback", () => {
  it("it should show the text", () => {
    const result = render(<InvalidFeedback {...InvalidFeedbackMockProps.base} />);
    const el = result.container.querySelector(`#${InvalidFeedbackMockProps.base.id}-invalidFeedback0`);

    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent(InvalidFeedbackMockProps.base.errors?.[0].text);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expect(el).toHaveClass(InvalidFeedbackMockProps.base.cssClasses!);
  });
});
