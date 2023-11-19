import { Stack } from "@mui/material";
import { FieldArray } from "formik";
import React, { memo } from "react";
import Educationform from "./Educationform";

export const Education = memo(function Education({ values }) {
  return (
    <>
      <FieldArray
        name="education"
        render={(arrayHelpers) => {
          return (
            <Stack spacing={{ xs: 1 }}>
              <Educationform values={values} arrayHelpers={arrayHelpers} />
            </Stack>
          );
        }}
      />
    </>
  );
});
