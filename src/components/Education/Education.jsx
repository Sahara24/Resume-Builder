import { Button, Stack, TextField } from "@mui/material";
import { FieldArray } from "formik";
import React, { memo } from "react";
import Educationform from "./Educationform";
import { Controller, useFieldArray } from "react-hook-form";

export const Education = memo(function Education({ values, control }) {
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "education", // unique name for your Field Array
    }
  );
  return (
    <Stack spacing={{ xs: 1 }}>
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
          marginBottom={values?.education?.length - 1 === idx ? "0px" : "12px"}
        >
          <Controller
            render={({ field }) => (
              <TextField label="Degree" variant="outlined" {...field} />
            )}
            control={control}
            name={`education.${idx}.degree`}
          />
          <Controller
            render={({ field }) => (
              <TextField {...field} label="Field of Study" variant="outlined" />
            )}
            control={control}
            name={`education.${idx}.fieldStudy`}
          />
          <h4 style={{ marginBottom: "-20px" }}>Duration</h4>
          <Stack
            spacing={{ xs: 1, sm: 2, md: 4 }}
            direction="row"
            alignItems="center "
          >
            <Controller
              name={`education.${idx}.startYear`}
              render={({ field }) => (
                <TextField {...field} type="number" label="From" />
              )}
              control={control}
            />
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>-</span>
            <Controller
              name={`education.${idx}.endYear`}
              render={({ field }) => (
                <TextField {...field} label="To" type="number" />
              )}
              control={control}
            />
          </Stack>
        </Stack>
      ))}
      <div>
        <Button
          onClick={() =>
            append({
              degree: "",
              fieldStudy: "",
              startYear: "",
              endYear: "",
            })
          }
        >
          Add more Experience
        </Button>
        {values?.education.length > 1 && (
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
});
