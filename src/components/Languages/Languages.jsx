import React from "react";
import { Button, Stack, TextField } from "@mui/material";
import { Controller, useFieldArray } from "react-hook-form";

function LanguagesForm({ values, control }) {
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "languages", // unique name for your Field Array
    }
  );
  return (
    <>
      <Stack spacing={{ xs: 1 }}>
        {fields.map((field, idx) => (
          <Controller
            key={field.id}
            render={({ field }) => (
              <TextField {...field} label="Add Language" variant="outlined" />
            )}
            control={control}
            name={`language.${idx}`}
          />
        ))}
        <Stack direction="row">
          <Button onClick={() => append({ language: "" })}>
            Add more languages
          </Button>
          {values?.languages.length > 1 && (
            <Button
              onClick={() => {
                remove(fields.length - 1);
              }}
            >
              Remove
            </Button>
          )}
        </Stack>
      </Stack>
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
