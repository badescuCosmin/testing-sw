import { useState } from 'react';

interface ISchema {
  [k: string]: {
    isRequired?: boolean;
    rules: {
      test: RegExp;
      error: string;
    }[];
  };
}

interface IPayload {
  name: string;
  value: string;
}

interface ValidationResultWithEmpty {
  [fieldName: string]: string[] | [];
}

const validate = (schema: ISchema, { name, value }: IPayload) => {
  const { rules } = schema[name];
  return rules.reduce<string[]>((prev, curr) => {
    if (!curr.test.test(value)) {
      prev.push(curr.error);
    }
    return prev;
  }, []);
};

export const useValidate = (schema: ISchema) => {
  const [formErrors, setFormErrors] = useState<ValidationResultWithEmpty>({});
  const [values, setValues] = useState<{ [k: string]: string }>({});

  const filter = Object.keys(schema).filter(
    k => schema[k].isRequired && !formErrors[k],
  );

  const isFormValid =
    !filter.length && !Object.values(formErrors).filter(v => v.length).length;

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    const errors = validate(schema, { name, value });
    setFormErrors({ ...formErrors, [name]: errors });
    return;
  };

  return {
    handleChange,
    isFormValid,
    values,
    formErrors,
  };
};
