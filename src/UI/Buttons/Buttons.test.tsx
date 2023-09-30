/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Buttons from "./Buttons";
import { ButtonsMockProps } from "./Buttons.mocks";

describe("Buttons", () => {
  it("it should show the submit button", () => {
    const result = render(<Buttons {...ButtonsMockProps.base} />);
    const el = result.container.querySelector(`#${ButtonsMockProps.base.submitId}`);

    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent(ButtonsMockProps.base.submitText!);
    expect(el).toHaveClass(ButtonsMockProps.base.submitCssClasses!);
  });
  it("it should show the clear button", () => {
    const result = render(<Buttons {...ButtonsMockProps.base} />);
    const el = result.container.querySelector(`#${ButtonsMockProps.base.clearId}`);

    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent(ButtonsMockProps.base.clearText!);
    expect(el).toHaveClass(ButtonsMockProps.base.clearCssClasses!);
  });
});
