import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import { Controller, useFieldArray } from "react-hook-form";

export const Internship = ({ control, values }) => {
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "internship", // unique name for your Field Array
    }
  );
  return (
    <Stack spacing={{ xs: 2 }}>
      <h3 style={{ marginBottom: "-5px" }}>Interships</h3>
      {fields.map((field, idx) => (
        <Stack
          spacing={{ xs: 1, sm: 2, md: 4 }}
          key={field.id}
          sx={{
            border: 1,
            borderColor: "gray",
            borderRadius: "4px",
          }}
          padding="14px"
        >
          <Controller
            render={({ field }) => (
              <TextField {...field} label="Company" variant="outlined" />
            )}
            control={control}
            name={`internship.${idx}.company`}
          />
          <Controller
            render={({ field }) => (
              <TextField {...field} label="Summary" variant="outlined" />
            )}
            control={control}
            name={`internship.${idx}.summary`}
          />
          <h4 style={{ marginBottom: "-20px" }}>Duration</h4>
          <Stack
            spacing={{ xs: 1, sm: 2, md: 4 }}
            direction="row"
            alignItems="center"
          >
            <Controller
              name={`internship.${idx}.from`}
              render={({ field }) => <TextField {...field} label="From" />}
              control={control}
            />
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>-</span>
            <Controller
              name={`internship.${idx}.to`}
              render={({ field }) => <TextField {...field} label="To" />}
              control={control}
            />
          </Stack>
        </Stack>
      ))}
      <div>
        <Button
          onClick={() =>
            append({
              company: "",
              from: "",
              to: "",
              summary: "",
            })
          }
        >
          Add more Interships
        </Button>
        {values?.internship.length > 1 && (
          <Button
            onClick={() => {
              remove(fields.length - 1);
            }}
          >
            Remove
          </Button>
        )}
      </div>
    </Stack>
  );
};
