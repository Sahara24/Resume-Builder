import { Button, Stack, TextField } from "@mui/material";
import { FieldArray, FastField } from "formik";
import React, { Fragment, memo } from "react";

export const BasicDetails = memo(function BasicDetails({ values }) {
  return (
    <Stack spacing={{ xs: 2 }}>
      <FastField as={TextField} label="Name" variant="outlined" name="name" />
      <FastField
        as={TextField}
        type="email"
        label="Email"
        variant="outlined"
        name="email"
      />
      <FastField as={TextField} label="Phone" variant="outlined" name="phone" />
      <FastField
        as={TextField}
        label="Address"
        variant="outlined"
        name="address"
      />
      <FastField
        as={TextField}
        name="summary"
        variant="outlined"
        label="Summary"
        multiline
        rows={5}
        placeholder="Summary"
      />
      <FieldArray
        name="websites"
        render={(arrayHelpers) => {
          return (
            <Stack spacing={{ xs: 2 }}>
              {values.websites.map((website, idx) => (
                <Fragment key={website.url}>
                  <FastField
                    key={website.name}
                    as={TextField}
                    label="Name of website"
                    name={`websites.${idx}.name`}
                    variant="outlined"
                  />
                  <FastField
                    key={website.url}
                    as={TextField}
                    label="Add URL"
                    name={`websites.${idx}.url`}
                    variant="outlined"
                  />
                </Fragment>
              ))}
              <Stack direction="row">
                <Button onClick={() => arrayHelpers.push("")}>
                  Add more websites
                </Button>
                {values?.websites.length > 1 && (
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
  );
});
