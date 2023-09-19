import { ValidateFormInputs, updateErrors, validateBuiltInRules, validateCustomRules } from "./Validation.Service";

const checkIfUserExists = async ({ input, options }) => {
  const doesExist = await checkExternalUserExists(input, options.val);
  async function checkExternalUserExists(input, val) {
    return input === val;
  }

  return !doesExist;
};

describe("updateErrors Tests", () => {
  const errors = [];
  const errorSchema = {
    errorName: "testError",
    message: `testError message`,
  };
  it("should insert new error into errors array", () => {
    const isValid = false;
    const errorsArr = updateErrors(isValid, errorSchema, {}, errors);

    expect(errorsArr.length).toBe(1);
  });
  it("should remove error from errors array if it became valid", () => {
    let isValid = false;
    let errorsArr = updateErrors(isValid, errorSchema, {}, errors);

    isValid = true;
    errorsArr = updateErrors(isValid, errorSchema, {}, errorsArr);

    expect(errorsArr.length).toBe(0);
  });
  it("should do nothing if error didn't change", () => {
    let isValid = false;
    let errorsArr = updateErrors(isValid, errorSchema, {}, errors);

    isValid = false;
    errorsArr = updateErrors(isValid, errorSchema, {}, errors);

    expect(errorsArr.length).toBe(1);
  });
});

describe("validateBuiltInRules Tests", () => {
  let errors = [];
  it("should return isRequired error", () => {
    const input = {
      name: "username",
      label: "Username",
      validationSchema: { isRequired: true },
    };
    errors = validateBuiltInRules(input.validationSchema, { name: input.name, label: input.label, value: "" }, []);

    expect(errors.length).toEqual(1);

    expect(errors).toEqual(
      expect.arrayContaining([expect.objectContaining({ message: expect.stringContaining("required") })])
    );
  });
  it("should return minLength error", () => {
    const input = {
      name: "username",
      label: "Username",
      validationSchema: { minLength: 5 },
    };
    errors = validateBuiltInRules(input.validationSchema, { name: input.name, label: input.label, value: "1234" }, []);

    expect(errors.length).toEqual(1);

    expect(errors).toEqual(
      expect.arrayContaining([expect.objectContaining({ message: expect.stringContaining("less than") })])
    );
  });
  it("should return maxLength error", () => {
    const input = {
      name: "username",
      label: "Username",
      validationSchema: { maxLength: 5 },
    };
    errors = validateBuiltInRules(
      input.validationSchema,
      { name: input.name, label: input.label, value: "1234567" },
      []
    );

    expect(errors.length).toEqual(1);

    expect(errors).toEqual(
      expect.arrayContaining([expect.objectContaining({ message: expect.stringContaining("longer than") })])
    );
  });
  it("should return pattern error", () => {
    const input = {
      name: "username",
      label: "Username",
      validationSchema: { pattern: /^(0|[1-9][0-9]*)$/ },
    };
    errors = validateBuiltInRules(
      input.validationSchema,
      { name: input.name, label: input.label, value: "abcdefg" },
      []
    );

    expect(errors.length).toEqual(1);

    expect(errors).toEqual(
      expect.arrayContaining([expect.objectContaining({ message: expect.stringContaining("pattern") })])
    );
  });
  it("should return email error", () => {
    const input = {
      name: "username",
      label: "Username",
      validationSchema: { email: true },
    };
    errors = validateBuiltInRules(input.validationSchema, { name: input.name, label: input.label, value: "1234" }, []);

    expect(errors.length).toEqual(1);
    expect(errors).toEqual(
      expect.arrayContaining([expect.objectContaining({ message: expect.stringContaining("format") })])
    );
  });
});
describe("validateCustomRules Tests", () => {
  it("should return custom error", async () => {
    const input = {
      name: "username",
      label: "Username",
      validationSchema: {
        customValidators: [
          {
            name: "checkIfUserExists",
            errorMessage: "Username already exists",
            validate: checkIfUserExists,
            options: { val: "hunter" },
          },
        ],
      },
    };
    const errors = await validateCustomRules(
      input.validationSchema.customValidators,
      { name: input.name, label: input.label, value: "hunter" },
      []
    );

    expect(errors.length).toEqual(1);
    expect(errors).toEqual(
      expect.arrayContaining([expect.objectContaining({ type: expect.stringContaining("CUSTOM") })])
    );
  });
});

describe("Input Service Validation Tests", () => {
  const input = {
    name: "username",
    label: "Username",
    validationSchema: {
      isRequired: true,
      minLength: 5,
      maxLength: 10,
    },
  };
  const inputEmailPattern = {
    name: "username",
    label: "Username",
    validationSchema: {
      email: true,
    },
  };
  const inputPasswordPattern = {
    name: "password",
    label: "Password",
    validationSchema: {
      password: {
        hasNumber: true,
        hasLowerCase: true,
        hasUpperCase: true,
        hasSymbols: true,
        minLength: 5,
        maxLength: 10,
      },
    },
  };
  const inputCustomValidator = {
    name: "username",
    label: "Username",
    validationSchema: {
      customValidators: [
        {
          name: "checkIfUserExists",
          errorMessage: "Username already exists",
          validate: checkIfUserExists,
          options: { val: "Mohamed" },
        },
      ],
      isRequired: true,
      minLength: 5,
      maxLength: 10,
    },
  };

  it("should return error if value is null", async () => {
    const errors = await ValidateFormInputs([], input, "");

    expect(errors.length).toBe(1);
    expect(errors).toEqual(expect.arrayContaining([expect.objectContaining({ message: "This field is required" })]));
  });
  it("should return error if value not null and less than 5", async () => {
    const errors = await ValidateFormInputs([], input, "123");

    expect(errors.length).toBe(1);
    expect(errors).toEqual(
      expect.arrayContaining([expect.objectContaining({ message: "Username cannot be less than 5 characters" })])
    );
  });
  it("should return error if value not null and more than 10", async () => {
    const errors = await ValidateFormInputs([], input, "123456789101");

    expect(errors.length).toBe(1);
    expect(errors).toEqual(
      expect.arrayContaining([expect.objectContaining({ message: "Username cannot be longer than 10 characters" })])
    );
  });
  it("should return error if value not null and does not match email pattern", async () => {
    const errors = await ValidateFormInputs([], inputEmailPattern, "123456");

    expect(errors.length).toBe(1);
    expect(errors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ message: expect.stringContaining("is not a correct email format") }),
      ])
    );
  });
  it("should return error if value not null and does not match custom validator", async () => {
    const errors = await ValidateFormInputs([], inputCustomValidator, "Mohamed");

    expect(errors.length).toBe(1);
    expect(errors).toEqual(expect.arrayContaining([expect.objectContaining({ message: "Username already exists" })]));
  });
  it("should return error if value not null and doesn't pass password rules", async () => {
    const errors = await ValidateFormInputs([], inputPasswordPattern, "ab");

    expect(errors.length).toEqual(4);

    expect(errors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ message: expect.stringContaining("must contain at least one number") }),
      ])
    );
    expect(errors).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({ message: expect.stringContaining("must contain at least one lowercase letter") }),
      ])
    );
    expect(errors).toEqual(
      expect.arrayContaining([expect.objectContaining({ message: expect.stringContaining("must be at least") })])
    );
    expect(errors).not.toEqual(
      expect.arrayContaining([expect.objectContaining({ message: expect.stringContaining("must be less than") })])
    );
    expect(errors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ message: expect.stringContaining("must contain at least one special character") }),
      ])
    );
  });
  it("should not return errors", async () => {
    const errors = await ValidateFormInputs([], input, "123456");

    expect(errors.length).toBe(0);
  });
  it("should return empty array if no errors", async () => {
    const errors = await ValidateFormInputs([], input, "1234567");

    expect(errors.length).toBe(0);
  });
});
