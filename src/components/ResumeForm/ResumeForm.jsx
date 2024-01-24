// {
//   name: "",
//   address: "",
//   phone: "",
//   email: "",
//   summary: "",
//   education: [{ degree: "", fieldStudy: "", startYear: "", endYear: "" }],
//   skills: [{ skill: "" }],
//   languages: [{ language: "" }],
//   websites: [{ name: "", url: "" }],
//   experience: [
//     {
//       companyName: "",
//       jobRole: "",
//       city: "",
//       country: "",
//       from: "",
//       to: "",
//       isCurrentlyWorking: false,
//       descriptions: [{ description: "" }],
//     },
//   ],
//   internship: [{ company: "", from: "", to: "", summary: "" }],
// }

import React, { memo, useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ExpandMore } from "@mui/icons-material";
import { addValues, myResume } from "../../slices/resumeSlice";
import {
  BasicDetails,
  Education,
  Skills,
  Experience,
  Languages,
} from "../index";
import { useForm } from "react-hook-form";

function ResForm({ className }) {
  const [expanded, setExpanded] = React.useState("panel1");
  const { control, watch } = useForm({
    defaultValues: myResume,
  });
  const value = useSelector((state) => state.resume.value);

  

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Stack alignItems="center" className={className}>
      <form className="w-full">
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
              <Typography variant="h5" sx={{ width: "50%", flexShrink: 0 }}>
                Basic Details
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <BasicDetails values={value} control={control} watch={watch} />
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
              <Typography variant="h5" sx={{ width: "50%", flexShrink: 0 }}>
                Education
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Education values={value} control={control} />
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
              <Typography variant="h5" sx={{ width: "50%", flexShrink: 0 }}>
                Skills
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Skills values={value} control={control} />
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
              <Typography variant="h5" sx={{ width: "50%", flexShrink: 0 }}>
                Languages
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Languages values={value} control={control} />
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
              <Typography variant="h5" sx={{ width: "50%", flexShrink: 0 }}>
                Experience
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Experience values={value} control={control} />
            </AccordionDetails>
          </Accordion>
        </Stack>
      </form>
    </Stack>
  );
}

export const ResumeForm = memo(ResForm);
