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

function ExperienceForm({ values }) {
  const dispatch = useDispatch();
  return (
    <>
      <FieldArray
        name="experience"
        render={(arrayHelpers) => {
          return (
            <Stack spacing={{ xs: 1 }}>
              {values.experience.map((item, idx) => (
                <Stack
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                  key={item.id}
                  sx={{
                    border: 1,
                    borderColor: "gray",
                    borderRadius: "4px",
                  }}
                  padding="14px"
                >
                  <FastField
                    as={TextField}
                    label="Company"
                    name={`experience.${idx}.companyName`}
                    variant="outlined"
                  />
                  <FastField
                    as={TextField}
                    label="Job Role"
                    name={`experience.${idx}.jobRole`}
                    variant="outlined"
                  />
                  <FastField
                    as={TextField}
                    label="City"
                    name={`experience.${idx}.city`}
                    variant="outlined"
                  />
                  <FastField
                    as={TextField}
                    label="Country"
                    name={`experience.${idx}.country`}
                    variant="outlined"
                  />
                  <h4 style={{ marginBottom: "-20px" }}>Duration</h4>
                  <div>
                    <Stack
                      spacing={{ xs: 1, sm: 2, md: 4 }}
                      direction="row"
                      alignItems="center "
                    >
                      <FastField
                        label="From"
                        name={`experience.${idx}.from`}
                        as={TextField}
                      />
                      <span
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        -
                      </span>
                      <FastField
                        label="To"
                        name={`experience.${idx}.to`}
                        as={TextField}
                        disabled={values?.experience?.[idx]?.isCurrentlyWorking}
                      />
                    </Stack>
                    <div className="text-gray-400 mt-3 text-sm">
                      If currently working leave "To" field empty
                    </div>
                    {/* Will uncomment once fixed */}
                    {/* <FormControlLabel
                      label="Currently Working"
                      name={`values?.experience?.${[idx]}?.isCurrentlyWorking`}
                      control={
                        <Checkbox
                          checked={
                            values?.experience?.[idx]?.isCurrentlyWorking
                          }
                          onChange={(e) => {
                            dispatch(
                              handleCurrrentlyWorking({
                                index: idx,
                                isChecked: e.target.checked,
                              })
                            );
                          }}
                        />
                      }
                    /> */}
                  </div>
                  <FieldArray
                    name={`experience.${idx}.description`}
                    render={(arrayHelpers) => {
                      return (
                        <Stack spacing={{ xs: 2 }}>
                          <h4>Description</h4>
                          {values.experience?.[idx].description.map(
                            (description, index) => (
                              <FastField
                                key={index}
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
                            {values?.experience?.[idx].description?.length >
                              1 && (
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
                </Stack>
              ))}
              <div>
                <Button
                  onClick={() =>
                    arrayHelpers.push({
                      companyName: "",
                      jobRole: "",
                      city: "",
                      country: "",
                      from: "",
                      to: "",
                      isCurrentlyWorking: false,
                      description: [],
                      id: Date.now() * Math.random(),
                    })
                  }
                >
                  Add more Experience
                </Button>
                {values?.experience.length > 1 && (
                  <Button
                    onClick={() => {
                      arrayHelpers.pop();
                    }}
                  >
                    Remove
                  </Button>
                )}
              </div>
            </Stack>
          );
        }}
      />
      <FieldArray
        name="internship"
        render={(arrayHelpers) => {
          return (
            <Stack spacing={{ xs: 2 }}>
              <h3 style={{ marginBottom: "-5px" }}>Interships</h3>
              {values.internship.map((item, idx) => (
                <Stack
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                  key={item.company}
                  sx={{
                    border: 1,
                    borderColor: "gray",
                    borderRadius: "4px",
                  }}
                  padding="14px"
                >
                  <FastField
                    as={TextField}
                    label="Company"
                    name={`internship.${idx}.company`}
                    variant="outlined"
                  />
                  <FastField
                    as={TextField}
                    label="Summary"
                    name={`internship.${idx}.summary`}
                    variant="outlined"
                  />
                  <h4 style={{ marginBottom: "-20px" }}>Duration</h4>
                  <Stack
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    direction="row"
                    alignItems="center "
                  >
                    <FastField
                      label="From"
                      name={`internship.${idx}.from`}
                      as={TextField}
                    />
                    <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                      -
                    </span>
                    <FastField
                      label="To"
                      name={`internship.${idx}.to`}
                      as={TextField}
                    />
                  </Stack>
                </Stack>
              ))}
              <div>
                <Button
                  onClick={() =>
                    arrayHelpers.push({
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
                      arrayHelpers.pop();
                    }}
                  >
                    Remove
                  </Button>
                )}
              </div>
            </Stack>
          );
        }}
      />
    </>
  );
}

export const Experience = memo(ExperienceForm);
