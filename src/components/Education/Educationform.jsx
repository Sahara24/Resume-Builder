import { Button, Stack, TextField } from "@mui/material";
import { FastField } from "formik";
import React, { memo } from "react";

function Educationform({ values, arrayHelpers }) {
  return (
    <div>
      {values.education.map((item, idx) => (
        <Stack
          spacing={{ xs: 1, sm: 2, md: 4 }}
          key={item.id}
          sx={{
            border: 1,
            borderColor: "gray",
            borderRadius: "4px",
          }}
          padding="14px"
          marginBottom={values?.education?.length - 1 === idx ? "0px" : "12px"}
        >
          <FastField
            as={TextField}
            label="Degree"
            name={`education.${idx}.degree`}
            variant="outlined"
          />
          <FastField
            as={TextField}
            label="Field of Study"
            name={`education.${idx}.fieldStudy`}
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
              name={`education.${idx}.startYear`}
              as={TextField}
              type="number"
            />
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>-</span>
            <FastField
              label="To"
              name={`education.${idx}.endYear`}
              as={TextField}
              type="number"
            />
          </Stack>
        </Stack>
      ))}
      <div>
        <Button
          onClick={() =>
            arrayHelpers.push({
              degree: "",
              fieldStudy: "",
              startYear: "",
              endYear: "",
              id: Date.now() * Math.random(),
            })
          }
        >
          Add more Experience
        </Button>
        {values?.education.length > 1 && (
          <Button
            onClick={() => {
              arrayHelpers.pop();
            }}
          >
            Remove
          </Button>
        )}
      </div>
    </div>
  );
}

const arePropsEqual = (prevProps, nextProps) => {
  return (
    prevProps.values.education.length === nextProps.values.education.length &&
    prevProps.values.education.every((prevEdu, index) => {
      const nextEdu = nextProps.values.education[index];
      return (
        prevEdu.degree === nextEdu.degree &&
        prevEdu.fieldStudy === nextEdu.fieldStudy &&
        prevEdu.startYear === nextEdu.startYear &&
        prevEdu.endYear === nextEdu.endYear
      );
    })
  );
};
export default memo(Educationform, arePropsEqual);
