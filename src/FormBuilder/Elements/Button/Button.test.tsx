/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Buttons from "./Button";
import { ButtonsMockProps } from "./Button.mocks";

describe("Buttons", () => {
  it("it should show the submit button", () => {
    const result = render(<Buttons {...ButtonsMockProps.Submit} />);
    const el = result.container.querySelector(`#${ButtonsMockProps.Submit.id}`);

    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent(ButtonsMockProps.Submit.text!);
    expect(el).toHaveClass(ButtonsMockProps.Submit.cssClasses!);
  });
  it("it should show the clear button", () => {
    const result = render(<Buttons {...ButtonsMockProps.Clear} />);
    const el = result.container.querySelector(`#${ButtonsMockProps.Clear.id}`);

    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent(ButtonsMockProps.Clear.text!);
    expect(el).toHaveClass(ButtonsMockProps.Clear.cssClasses!);
  });
});
