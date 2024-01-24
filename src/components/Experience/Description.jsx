import { Controller, useFieldArray } from "react-hook-form";
import { Button, Stack, TextField } from "@mui/material";

export const Description = ({ idx, control }) => {
  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: `experience.${idx}.descriptions`, // unique name for your Field Array
  });
  return (
    <>
      <Stack spacing={{ xs: 2 }}>
        <h4>Description</h4>
        {fields.map((field, index) => (
          <Controller
            control={control}
            key={field.id}
            render={({ field }) => (
              <TextField {...field} label="Add a point" variant="standard" />
            )}
            name={`experience.${idx}.description.${index}`}
          />
        ))}
        <Stack direction="row">
          <Button onClick={() => append({ description: "" })}>
            Add another point
          </Button>
          {fields?.length > 1 && (
            <Button
              onClick={() => {
                remove(fields?.length - 1);
              }}
            >
              Remove
            </Button>
          )}
        </Stack>
      </Stack>
    </>
  );
};
