import InvalidFeedback from "./InvalidFeedback";
import { InvalidFeedbackMockProps } from "./InvalidFeedback.mocks";

describe("InvalidFeedback", () => {
  it("it should show the text", () => {
    const result = render(<InvalidFeedback {...InvalidFeedbackMockProps.Base} />);
    const el = result.container.querySelector(`#${InvalidFeedbackMockProps.Base.id}-invalidFeedback0`);

    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent(InvalidFeedbackMockProps.Base.errors![0].text);
    expect(el).toHaveClass(InvalidFeedbackMockProps.Base.cssClasses!);
  });
});
