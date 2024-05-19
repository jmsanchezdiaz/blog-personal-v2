import { ChangeEvent, FormEvent, useState } from "react";

type FormErrors<T extends object> = {
  [key in keyof T]?: string[];
};

const useForm = <T extends object>(initialState: T) => {
  const [formState, setFormState] = useState<T>(initialState);
  const [formErrors, setFormErrors] = useState<FormErrors<T> | undefined>();

  const setFieldValue = (name: keyof T, value: T[keyof T]) => {
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFieldValue(name as keyof T, value as T[keyof T]);
  };

  const setErrorField = (
    name: keyof FormErrors<T>,
    value: undefined | string[]
  ) => {
    const newState = {
      ...formErrors,
      [name]: value
    };

    setFormErrors(newState);
  };

  const reset = (event?: FormEvent<HTMLFormElement>) => {
    setFormState(initialState);
    setFormErrors({});
    event && event.currentTarget.reset();
  };

  return {
    formState,
    ...formState,
    formErrors,
    ...formErrors,
    setFormErrors,
    handleChange,
    reset,
    setFieldValue,
    setErrorField
  };
};

export default useForm;
