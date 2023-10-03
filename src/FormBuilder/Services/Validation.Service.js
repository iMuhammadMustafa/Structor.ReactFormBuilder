export const ValidateFormInputs = async (errors, { name, label, validationSchema }, value) => {
  if (!validationSchema) return errors;
  const builtInErrors = errors.filter(err => err.type === errorTypes.BUILT_IN);
  const customErrors = errors.filter(err => err.type === errorTypes.CUSTOM);

  const inputField = { name, label, value };

  const builtInRulesErrors = validateBuiltInRules(validationSchema, inputField, builtInErrors) ?? [];

  const customRulesErrors =
    (await validateCustomRules(validationSchema.customValidators, inputField, customErrors)) ?? [];

  return [...builtInRulesErrors, ...customRulesErrors];
};

export const validateBuiltInRules = (validationSchema, input, builtInRulesErrors) => {
  if (validationSchema.isRequired) {
    const isValid = input.value ? true : false;
    const errorSchema = { name: "isRequired", message: "This field is required", type: errorTypes.BUILT_IN };
    builtInRulesErrors = updateErrors(isValid, errorSchema, input, builtInRulesErrors);
  }

  if (input.value) {
    if (validationSchema.minLength) {
      const isValid = input.value?.length > validationSchema.minLength;
      const errorSchema = {
        name: "minLength",
        message: `${input.label} cannot be less than ${validationSchema.minLength} characters`,
        type: errorTypes.BUILT_IN,
      };
      builtInRulesErrors = updateErrors(isValid, errorSchema, input, builtInRulesErrors);
    }
    if (validationSchema.maxLength) {
      const isValid = input.value.length < validationSchema.maxLength;
      const errorSchema = {
        name: "maxLength",
        message: `${input.label} cannot be longer than ${validationSchema.maxLength} characters`,
        type: errorTypes.BUILT_IN,
      };
      builtInRulesErrors = updateErrors(isValid, errorSchema, input, builtInRulesErrors);
    }
    if (validationSchema.pattern) {
      const isValid = validationSchema.pattern.test(input.value);
      const errorSchema = {
        name: "pattern",
        message: `${input.label} does not match the required pattern`,
        type: errorTypes.BUILT_IN,
      };
      builtInRulesErrors = updateErrors(isValid, errorSchema, input, builtInRulesErrors);
    }
    if (validationSchema.isEmail) {
      const isValid = validateEmailString(input.value);
      const errorSchema = {
        name: "email",
        message: `${input.label} is not a correct email format`,
        type: errorTypes.BUILT_IN,
      };
      builtInRulesErrors = updateErrors(isValid, errorSchema, input, builtInRulesErrors);
    }
    if (validationSchema.password) {
      const passwordResults = validatePasswordString(input.value, validationSchema.password);
      for (let passwordResult of passwordResults) {
        const errorSchema = {
          name: "password",
          message: `${passwordResult.message}`,
          type: errorTypes.BUILT_IN,
        };
        builtInRulesErrors = updateErrors(passwordResult.isValid, errorSchema, input, builtInRulesErrors);
      }
    }
    if (validationSchema.matchField) {
      const isValid = input.value === validationSchema.matchField.value;
      const errorSchema = {
        name: "matchField",
        message: `Does not match ${validationSchema.matchField.name}`,
        type: errorTypes.BUILT_IN,
      };
      builtInRulesErrors = updateErrors(isValid, errorSchema, input, builtInRulesErrors);
    }
  }
  return [...builtInRulesErrors];
};

export const validateCustomRules = async (customValidators, input, customRulesErrors) => {
  if (!customValidators) return customRulesErrors;
  for (const validator of customValidators) {
    const errorSchema = { name: validator.name, message: validator.errorMessage, type: errorTypes.CUSTOM };
    const isValid = await validator.validate({ input: input.value, options: validator.options });
    customRulesErrors = updateErrors(isValid, errorSchema, input, customRulesErrors);
  }

  return customRulesErrors;
};

export const updateErrors = (isValid, errorSchema, input, errors) => {
  const error = {
    ...errorSchema,
    fieldName: input.name,
    label: input.label,
  };

  const isExist = errors.some(
    err =>
      err.fieldName === input.name &&
      err.type === error.type &&
      err.fieldName === error.fieldName &&
      err.message === error.message
  );

  if (isValid && isExist) {
    return errors.filter(
      err =>
        !(
          err.fieldName === input.name &&
          err.type === error.type &&
          err.fieldName === error.fieldName &&
          err.message === error.message
        )
    );
  }
  if (!isValid && !isExist) {
    return [...errors, error];
  }

  return errors;
};

export const validateEmailString = value => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(value);
};
export const validatePasswordString = (
  value,
  {
    isRequired = false,
    hasNumber = false,
    hasLowerCase = false,
    hasUpperCase = false,
    minLength = 0,
    maxLength = 0,
    hasSymbols = false,
  }
) => {
  const passwordRules = [
    {
      isIncluded: isRequired,
      regEx: new RegExp("(.|\\s)*\\S(.|\\s)*"),
      message: "Password cannot be empty",
    },
    {
      isIncluded: hasNumber,
      regEx: new RegExp("[0-9]+"),
      message: "Password must contain at least one number",
    },
    {
      isIncluded: hasLowerCase,
      regEx: new RegExp("[a-z]+"),
      message: "Password must contain at least one lowercase letter",
    },
    {
      isIncluded: hasUpperCase,
      regEx: new RegExp("[A-Z]+"),
      message: "Password must contain at least one uppercase letter",
    },
    {
      isIncluded: minLength > 0,
      regEx: new RegExp(`^.{${minLength},}$`),
      message: `Password must be at least ${minLength} characters`,
    },
    {
      isIncluded: maxLength > 0,
      regEx: new RegExp(`^.{0,${maxLength}}$`),
      message: `Password must be less than ${maxLength} characters`,
    },
    {
      isIncluded: hasSymbols,
      regEx: new RegExp("[!@#$%^&*()_+=['{\\]};:<>|./?,-]+"),
      message: "Password must contain at least one special character",
    },
  ];

  const results = [];

  passwordRules.forEach(rule => {
    if (rule.isIncluded) {
      results.push({ message: rule.message, isValid: rule.regEx.test(value) });
    }
  });
  return results;
};
export const errorTypes = {
  BUILT_IN: "BUILT_IN",
  CUSTOM: "CUSTOM",
  EXTERNAL: "EXTERNAL",
};

// if (process.env.NODE_ENV === "test") {
//    exports.errorTypes = errorTypes;
// }
