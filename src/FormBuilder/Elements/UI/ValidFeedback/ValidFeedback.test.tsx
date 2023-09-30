import ValidFeedback from "./ValidFeedback";

describe("ValidFeedback", () => {
  it("it should show the text", () => {
    const result = render(<ValidFeedback id="test" text="this is a test" cssClasses="validClass" />);
    const el = result.container.querySelector("#test-validFeeback");

    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent("this is a test");
    expect(el).toHaveClass("validClass");
    expect(testScreen.getAllByText(/this is a test/)[0]).toBeInTheDocument();
  });
});
