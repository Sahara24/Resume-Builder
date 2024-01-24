import { Button, Stack, TextField } from "@mui/material";
import { FieldArray, FastField } from "formik";
import React, { memo, useCallback } from "react";
import { Controller, useFieldArray } from "react-hook-form";

const SkillField = React.memo(({ skill, idx }) => {
  return (
    <FastField
      as={TextField}
      label="Add skill"
      name={`skills.${idx}`}
      variant="outlined"
    />
  );
});

function SkillsForm({ values, control }) {
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "skills", // unique name for your Field Array
    }
  );
  const handlePushSkill = useCallback((arrayHelpers) => {
    arrayHelpers.push("");
  }, []);

  const handlePopSkill = useCallback((arrayHelpers) => {
    arrayHelpers.pop();
  }, []);

  return (
    <Stack spacing={{ xs: 1 }}>
      {fields?.map((field, idx) => (
        <Controller
          key={field.id}
          render={({ field }) => (
            <TextField {...field} label="Add skill" variant="outlined" />
          )}
          control={control}
          name={`skill.${idx}`}
        />
      ))}
      <Stack direction="row">
        <Button onClick={() => append({ skill: "" })}>Add more skills</Button>
        {values?.skills.length > 1 && (
          <Button onClick={() => remove(fields.length - 1)}>Remove</Button>
        )}
      </Stack>
    </Stack>
  );
}

const arePropsEqual = (prevProps, nextProps) => {
  return (
    prevProps.values.skills.length === nextProps.values.skills.length &&
    prevProps.values.skills.every(
      (language, index) => language === nextProps.values.skills[index]
    )
  );
};

export const Skills = memo(SkillsForm, arePropsEqual);
