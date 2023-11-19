import React from "react";
import { Button, Stack, TextField } from "@mui/material";
import { FieldArray, FastField } from "formik";

function LanguagesForm({ values }) {
  return (
    <>
      <FieldArray
        name="languages"
        render={(arrayHelpers) => {
          return (
            <Stack spacing={{ xs: 1 }}>
              {values.languages.map((language, idx) => (
                <FastField
                  key={idx}
                  as={TextField}
                  label="Add Language"
                  name={`languages.${idx}`}
                  variant="outlined"
                />
              ))}
              <Stack direction="row">
                <Button onClick={() => arrayHelpers.push("")}>
                  Add more languages
                </Button>
                {values?.languages.length > 1 && (
                  <Button
                    onClick={() => {
                      arrayHelpers.pop();
                    }}
                  >
                    Remove
                  </Button>
                )}
              </Stack>
            </Stack>
          );
        }}
      />
    </>
  );
}

const arePropsEqual = (prevProps, nextProps) => {
  return (
    prevProps.values.languages.length === nextProps.values.languages.length &&
    prevProps.values.languages.every(
      (language, index) => language === nextProps.values.languages[index]
    )
  );
};
export const Languages = React.memo(LanguagesForm, arePropsEqual);
