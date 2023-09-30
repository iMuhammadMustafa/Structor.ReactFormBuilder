interface IValidationSchema {
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  isRequired?: boolean;
  isEmail?: boolean;
  password?: IPasswordValidationSchema;
  matchField?: {
    name: string;
    value: string;
  };
  customValidators?: Array<ICustomValidator>;
}

interface IPasswordValidationSchema {
  isRequired?: boolean;
  hasNumber?: boolean;
  hasLowerCase?: boolean;
  hasUpperCase?: boolean;
  minLength?: number;
  maxLength?: number;
  hasSymbols?: boolean;
}
interface ICustomValidator {
  name: string;
  errorMessage: string;
  validate: ({ input, options }: any) => Promise<boolean>;
}
