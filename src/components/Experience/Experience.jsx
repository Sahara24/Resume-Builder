import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
} from "@mui/material";
import { FieldArray, FastField } from "formik";
import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { handleCurrrentlyWorking } from "../../slices/resumeSlice";
import { Internship } from "./Internship";
import { Controller, useFieldArray } from "react-hook-form";
import { Description } from "./Description";

function ExperienceForm({ values, control }) {
  const dispatch = useDispatch();
  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "experience", // unique name for your Field Array
  });

  return (
    <>
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
          >
            <Controller
              render={({ field }) => (
                <TextField {...field} label="Company" variant="outlined" />
              )}
              control={control}
              name={`experience.${idx}.companyName`}
            />
            <Controller
              render={({ field }) => (
                <TextField {...field} label="Job Role" variant="outlined" />
              )}
              control={control}
              name={`experience.${idx}.jobRole`}
            />
            <Controller
              render={({ field }) => (
                <TextField {...field} label="City" variant="outlined" />
              )}
              control={control}
              name={`experience.${idx}.city`}
            />
            <Controller
              render={({ field }) => (
                <TextField {...field} label="Country" variant="outlined" />
              )}
              control={control}
              name={`experience.${idx}.country`}
            />
            <h4 style={{ marginBottom: "-20px" }}>Duration</h4>
            <div>
              <Stack
                spacing={{ xs: 1, sm: 2, md: 4 }}
                direction="row"
                alignItems="center "
              >
                <Controller
                  name={`experience.${idx}.from`}
                  render={({ field }) => <TextField {...field} label="From" />}
                  control={control}
                />
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  -
                </span>
                <Controller
                  name={`experience.${idx}.to`}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="To"
                      disabled={values?.experience?.[idx]?.isCurrentlyWorking}
                    />
                  )}
                  control={control}
                />
              </Stack>
              <Controller
                name="isCurrentlyWorking"
                render={({ field }) => (
                  <FormControlLabel
                    {...field}
                    label="Currently Working"
                    control={
                      <Checkbox
                      // checked={values?.experience?.[idx]?.isCurrentlyWorking}
                      // onChange={(e) => {
                      //   dispatch(
                      //     handleCurrrentlyWorking({
                      //       index: idx,
                      //       isChecked: e.target.checked,
                      //     })
                      //   );
                      // }}
                      />
                    }
                  />
                )}
                control={control}
              />
            </div>
            <Description idx={idx} values={values} control={control} />
            {/* <FieldArray
              name={`experience.${idx}.description`}
              render={(arrayHelpers) => {
                return (
                  <Stack spacing={{ xs: 2 }}>
                    <h4>Description</h4>
                    {values.experience?.[idx].description.map(
                      (description, index) => (
                        <Controller
                          key={description}
                          as={TextField}
                          label="Add a point"
                          name={`experience.${idx}.description.${index}`}
                          variant="standard"
                        />
                      )
                    )}
                    <Stack direction="row">
                      <Button onClick={() => arrayHelpers.push("")}>
                        Add another point
                      </Button>
                      {values?.experience?.[idx].description?.length > 1 && (
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
            /> */}
          </Stack>
        ))}
        <div>
          <Button
            onClick={() =>
              append({
                companyName: "",
                jobRole: "",
                city: "",
                country: "",
                from: "",
                to: "",
                isCurrentlyWorking: false,
                descriptions: [{ description: "" }],
              })
            }
          >
            Add more Experience
          </Button>
          {fields.length > 1 && (
            <Button
              onClick={() => {
                remove(fields?.length - 1);
              }}
            >
              Remove
            </Button>
          )}
        </div>
      </Stack>
      <Internship control={control} values={values} />
    </>
  );
}

export const Experience = memo(ExperienceForm);
