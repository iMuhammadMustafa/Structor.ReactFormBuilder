export interface IButtons extends React.HTMLProps<HTMLButtonElement> {
  id: string;
  text?: string;
  type?: "submit" | "reset" | "button" | undefined;
  cssClasses?: string;
  children?: React.ReactNode;
}
