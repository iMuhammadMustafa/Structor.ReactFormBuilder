
import { useEffect } from "react";
import HelpText, { IHelpText } from "../UI/HelpText/HelpText";


interface IFormTestProps {
    children: React.ReactNode;
  }

  /**
   * @param {HelpText} HelpText ...
   */
  const FormTest: React.FC<IFormTestProps> & {
    /** @type {HelpText} */
    HelpText: React.FC<IHelpText>;
  } = ({ children }) => {    
    return (
    <>
        {children} 
    </>
    );
};


 FormTest.HelpText = HelpText;

export default FormTest;
