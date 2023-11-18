import React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
} from "@mui/material";
import { Field, FieldArray, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addValues, handleCurrrentlyWorking } from "../slices/resumeSlice";

const initialValues = {
  name: "",
  address: "",
  phone: "",
  email: "",
  summary: "",
  education: [{ degree: "", fieldStudy: "", startYear: "", endYear: "" }],
  skills: [""],
  languages: [""],
  websites: [""],
  experience: [
    {
      companyName: "",
      jobRole: "",
      city: "",
      country: "",
      from: "",
      to: "",
      isCurrentlyWorking: false,
      description: [""],
    },
  ],
  internship: [{ company: "", from: "", to: "", summary: "" }],
};

function ResumeForm({ className }) {
  const value = useSelector((state) => state.resume.value);
  const dispatch = useDispatch();
  return (
    <Stack alignItems="center" className={className}>
      <Formik
        initialValues={value}
        onSubmit={(values) => {
          dispatch(addValues(values));
        }}
      >
        {({ values }) => {
          dispatch(addValues(values));
          return (
            <Form>
              <Stack
                spacing={{ xs: 1, sm: 2, md: 4 }}
                direction="column"
                useFlexGap
                flexWrap="wrap"
                maxWidth="500px"
                padding="16px"
              >
                <Field
                  as={TextField}
                  label="Name"
                  variant="outlined"
                  name="name"
                />
                <Field
                  as={TextField}
                  type="email"
                  label="Email"
                  variant="outlined"
                  name="email"
                />
                <Field
                  as={TextField}
                  label="Phone"
                  variant="outlined"
                  name="phone"
                />
                <Field
                  as={TextField}
                  label="Address"
                  variant="outlined"
                  name="address"
                />
                <Field
                  as={TextField}
                  name="summary"
                  variant="outlined"
                  label="Summary"
                  multiline
                  minRows={5}
                  placeholder="Summary"
                />
                <FieldArray
                  name="education"
                  render={(arrayHelpers) => {
                    return (
                      <Stack spacing={{ xs: 1 }}>
                        <h3 style={{ marginBottom: "-5px" }}>Education</h3>
                        {values.education.map((item, idx) => (
                          <Stack
                            spacing={{ xs: 1, sm: 2, md: 4 }}
                            key={idx}
                            sx={{
                              border: 1,
                              borderColor: "gray",
                              borderRadius: "4px",
                            }}
                            padding="14px"
                          >
                            <Field
                              as={TextField}
                              label="Degree"
                              name={`education.${idx}.degree`}
                              variant="outlined"
                            />
                            <Field
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
                              <Field
                                label="From"
                                name={`education.${idx}.startYear`}
                                as={TextField}
                                type="number"
                              />
                              <span
                                style={{ fontSize: "20px", fontWeight: "bold" }}
                              >
                                -
                              </span>
                              <Field
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
                      </Stack>
                    );
                  }}
                />
                <FieldArray
                  name="skills"
                  render={(arrayHelpers) => {
                    return (
                      <Stack spacing={{ xs: 1 }}>
                        {values.skills.map((skill, idx) => (
                          <Field
                            key={idx}
                            as={TextField}
                            label="Add skill"
                            name={`skills.${idx}`}
                            variant="outlined"
                          />
                        ))}
                        <Stack direction="row">
                          <Button onClick={() => arrayHelpers.push("")}>
                            Add more skills
                          </Button>
                          {values?.skills.length > 1 && (
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
                <FieldArray
                  name="languages"
                  render={(arrayHelpers) => {
                    return (
                      <Stack spacing={{ xs: 1 }}>
                        {values.languages.map((language, idx) => (
                          <Field
                            key={idx}
                            as={TextField}
                            label="Add Language"
                            name={`languages.${idx}`}
                            variant="outlined"
                          />
                        ))}
                        <Stack direction="row">
                          <Button onClick={() => arrayHelpers.push("")}>
                            Add more languages
                          </Button>
                          {values?.languages.length > 1 && (
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
                <FieldArray
                  name="websites"
                  render={(arrayHelpers) => {
                    return (
                      <Stack spacing={{ xs: 1 }}>
                        {values.websites.map((website, idx) => (
                          <Field
                            key={idx}
                            as={TextField}
                            label="Add website"
                            name={`websites.${idx}`}
                            variant="outlined"
                          />
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
                <FieldArray
                  name="experience"
                  render={(arrayHelpers) => {
                    return (
                      <Stack spacing={{ xs: 1 }}>
                        <h3 style={{ marginBottom: "-5px" }}>Experience</h3>
                        {values.experience.map((item, idx) => (
                          <Stack
                            spacing={{ xs: 1, sm: 2, md: 4 }}
                            key={idx}
                            sx={{
                              border: 1,
                              borderColor: "gray",
                              borderRadius: "4px",
                            }}
                            padding="14px"
                          >
                            <Field
                              as={TextField}
                              label="Company"
                              name={`experience.${idx}.companyName`}
                              variant="outlined"
                            />
                            <Field
                              as={TextField}
                              label="Job Role"
                              name={`experience.${idx}.jobRole`}
                              variant="outlined"
                            />
                            <Field
                              as={TextField}
                              label="City"
                              name={`experience.${idx}.city`}
                              variant="outlined"
                            />
                            <Field
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
                                <Field
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
                                <Field
                                  label="To"
                                  name={`experience.${idx}.to`}
                                  as={TextField}
                                  disabled={
                                    value?.experience?.[idx]?.isCurrentlyWorking
                                  }
                                />
                              </Stack>
                              <FormControlLabel
                                label="Currently Working"
                                name="isCurrentlyWorking"
                                control={
                                  <Checkbox
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
                              />
                            </div>
                            <FieldArray
                              name={`experience.${idx}.description`}
                              render={(arrayHelpers) => {
                                return (
                                  <Stack spacing={{ xs: 1 }}>
                                    <h4>Description</h4>
                                    {values.experience?.[idx].description.map(
                                      (description, index) => (
                                        <Field
                                          key={index}
                                          as={TextField}
                                          label="Add a point"
                                          name={`experience.${idx}.description.${index}`}
                                          variant="standard"
                                        />
                                      )
                                    )}
                                    <Stack direction="row">
                                      <Button
                                        onClick={() => arrayHelpers.push("")}
                                      >
                                        Add another point
                                      </Button>
                                      {values?.experience?.[idx].description
                                        ?.length > 1 && (
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
                      <Stack spacing={{ xs: 1 }}>
                        <h3 style={{ marginBottom: "-5px" }}>Interships</h3>
                        {values.education.map((item, idx) => (
                          <Stack
                            spacing={{ xs: 1, sm: 2, md: 4 }}
                            key={idx}
                            sx={{
                              border: 1,
                              borderColor: "gray",
                              borderRadius: "4px",
                            }}
                            padding="14px"
                          >
                            <Field
                              as={TextField}
                              label="Company"
                              name={`internship.${idx}.company`}
                              variant="outlined"
                            />
                            <Field
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
                              <Field
                                label="From"
                                name={`internship.${idx}.from`}
                                as={TextField}
                              />
                              <span
                                style={{ fontSize: "20px", fontWeight: "bold" }}
                              >
                                -
                              </span>
                              <Field
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
                <Button variant="outlined" type="submit">
                  Submit
                </Button>
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </Stack>
  );
}

export default ResumeForm;
