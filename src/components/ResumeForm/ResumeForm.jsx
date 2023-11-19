import React, { memo } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ExpandMore } from "@mui/icons-material";
import { addValues } from "../../slices/resumeSlice";
import {
  BasicDetails,
  Education,
  Skills,
  Experience,
  Languages,
} from "../index";

function ResForm({ className }) {
  const [expanded, setExpanded] = React.useState("panel1");
  const value = useSelector((state) => state.resume.value);

  const dispatch = useDispatch();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Stack alignItems="center" className={className}>
      <Formik initialValues={value} onSubmit={(values) => {}}>
        {({ values }) => {
          dispatch(addValues(values));
          return (
            <Form>
              <Stack
                direction="column"
                flexWrap="wrap"
                maxWidth="500px"
                padding="12px"
              >
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      variant="h5"
                      sx={{ width: "50%", flexShrink: 0 }}
                    >
                      Basic Details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <BasicDetails values={values} />
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography
                      variant="h5"
                      sx={{ width: "50%", flexShrink: 0 }}
                    >
                      Education
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Education values={values} />
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography
                      variant="h5"
                      sx={{ width: "50%", flexShrink: 0 }}
                    >
                      Skills
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Skills values={values} />
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography
                      variant="h5"
                      sx={{ width: "50%", flexShrink: 0 }}
                    >
                      Languages
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Languages values={values} />
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                  >
                    <Typography
                      variant="h5"
                      sx={{ width: "50%", flexShrink: 0 }}
                    >
                      Experience
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Experience values={values} />
                  </AccordionDetails>
                </Accordion>
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </Stack>
  );
}

export const ResumeForm = memo(ResForm);
