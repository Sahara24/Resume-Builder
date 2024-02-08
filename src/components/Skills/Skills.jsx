import { Button, Stack, TextField } from "@mui/material";
import { FieldArray, FastField } from "formik";
import React, { memo, useCallback } from "react";

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

function SkillsForm({ values }) {
  const handlePushSkill = useCallback((arrayHelpers) => {
    arrayHelpers.push("");
  }, []);

  const handlePopSkill = useCallback((arrayHelpers) => {
    arrayHelpers.pop();
  }, []);

  return (
    <>
      <FieldArray
        name="skills"
        render={(arrayHelpers) => {
          return (
            <Stack spacing={{ xs: 1 }}>
              {values.skills.map((skill, idx) => (
                <SkillField key={idx} skill={skill} idx={idx} />
              ))}
              <Stack direction="row">
                <Button onClick={() => handlePushSkill(arrayHelpers)}>
                  Add more skills
                </Button>
                {values?.skills.length > 1 && (
                  <Button onClick={() => handlePopSkill(arrayHelpers)}>
                    Remove
                  </Button>
                )}
              </Stack>
            </Stack>
          );
        }}
      />
    </>
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
