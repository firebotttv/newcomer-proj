import React, { FunctionComponent, ReactNode } from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";

interface FormikFieldProps {
  name: string;
  errorTranslations?: Record<string, ReactNode>;
  maxLength?: number;
}

const FormikField: FunctionComponent<FormikFieldProps & TextFieldProps> = (
  props
) => {
  const [field, meta] = useField(props.name);

  const hasError = !!(meta.error && meta.touched);
  const hasErrorTranslation = meta.error;

  const errorText = hasError ? hasErrorTranslation || meta.error : null;
  if (!props.hidden) {
    return (
      <TextField
        {...props}
        {...field}
        error={hasError}
        helperText={errorText || props.helperText}
        inputProps={{
          maxLength: props.maxLength || null,
        }}
      />
    );
  }

  return null;
};

export default FormikField;
