import { Button, Stack, TextField } from "@mui/material";
import { Controller, useFieldArray } from "react-hook-form";
import React, { Fragment, memo, useEffect } from "react";
import { addEmail, addName, addValues } from "../../slices/resumeSlice";
import { useDispatch } from "react-redux";

export const BasicDetails = memo(function BasicDetails({
  values,
  control,
  watch,
}) {
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "websites", // unique name for your Field Array
    }
  );
  const dispatch = useDispatch();

  console.log("render");

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      switch (name) {
        case "name":
          dispatch(addName(value?.name));
          return;
        case "email":
          dispatch(addEmail(value?.email));
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <Stack spacing={{ xs: 2 }}>
      <Controller
        render={({ field }) => (
          <TextField {...field} label="Name" variant="outlined" />
        )}
        control={control}
        name="name"
      />
      <Controller
        render={({ field }) => (
          <TextField {...field} type="email" label="Email" variant="outlined" />
        )}
        control={control}
        name="email"
      />
      <Controller
        render={({ field }) => (
          <TextField {...field} label="Phone" variant="outlined" />
        )}
        control={control}
        name="phone"
      />
      <Controller
        render={({ field }) => (
          <TextField {...field} label="Address" variant="outlined" />
        )}
        control={control}
        name="address"
      />
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            variant="outlined"
            label="Summary"
            multiline
            rows={5}
            placeholder="Summary"
          />
        )}
        control={control}
        name="summary"
      />
      <Stack spacing={{ xs: 2 }}>
        {fields.map((field, idx) => (
          <Fragment key={field.id}>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Name of website"
                  variant="outlined"
                />
              )}
              name={`websites.${idx}.name`}
              control={control}
            />
            <Controller
              render={({ field }) => (
                <TextField {...field} label="Add URL" variant="outlined" />
              )}
              control={control}
              name={`websites.${idx}.url`}
            />
          </Fragment>
        ))}
        <Stack direction="row">
          <Button onClick={() => append({ name: "", url: "" })}>
            Add more websites
          </Button>
          {values?.websites.length > 1 && (
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
    </Stack>
  );
});
