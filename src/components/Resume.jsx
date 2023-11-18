import { Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const data = {
  name: "Sai Harshith Kashaboyina",
  address: "Plot no 177, Snehapuri Colony Injapur, 501510",
  phone: "09160825838",
  email: "saiharshith987@gmail.com",
  summary:
    "Front End Developer with more than a year of experience working with React, JavaScript, HTML/CSS to deliver exceptional customer experiences. Adept at contributing to a highly collaborative work environment, finding solutions, and determining customer satisfaction.",
  education: [
    {
      degree: "Bachelor of technology",
      fieldStudy: "Computer Science and Engineering",
      startYear: 2016,
      endYear: 2020,
      institution: "Malla Reddy Institute of Technology and Science",
      place: "Hyderabad",
      gpa: "7.14/10",
    },
    {
      degree: "Intermediate (Class XII)",
      fieldStudy: "MPC",
      startYear: 2014,
      endYear: 2016,
      institution: "Gouthami Junior College",
      place: "Nalgonda",
      gpa: "97.7%",
    },
    {
      degree: "Matriculation (Class X)",
      startYear: 2013,
      endYear: 2014,
      institution: "Saandeep High School",
      place: "Nalgonda",
      gpa: "9.8",
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Next JS",
    "TypeScript",
    "Java",
    "Jest, React Testing Library",
  ],
  languages: ["Telugu", "Hindi", "English"],
  websites: [
    { name: "Github", url: "https://github.com/Sahara24" },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/sai-harshith-kashaboyina/",
    },
  ],
  experience: [
    {
      companyName: "F22 Labs",
      jobRole: "Junior Frontend developer",
      city: "Chennai",
      country: "India",
      from: "10/2022",
      to: "",
      isCurrentlyWorking: true,
      description: [
        " Played a pivotal role in the fintech project, focused on comprehensive banking operations management and financial tracking.",
        "Designed and implemented dynamic forms, which form a core part of the application, to enable efficient data entry and processing.",
        "Took charge of state management, ensuring a responsive and highly interactive user interface.",
        "Spearheaded the development of the project, a cutting-edge job searching platform tailored for healthcare professionals, particularly nurses and hospital staff.",
        "Contributed significantly to the project's success by designing and implementing critical features including job posting forms, a user-friendly resume builder, and an on-the-go job post view feature.",
        "Collaborated with designers and back-end developers to implement effective user interfaces.",
        "Created responsive designs to ensure compatibility across multiple devices and browsers.",
        "Worked with version control systems such as Git to track changes in codebase.",
      ],
    },
    {
      companyName: "Amazon",
      jobRole: "Tron Associate",
      city: "Hyderabad",
      country: "India",
      from: "10/2020",
      to: "12/2021",
      isCurrentlyWorking: false,
      description: [
        "Required to watch the video of the stowing activity in a fulfillment center, understand it thoroughly, and make the best use of the human judgement and available resources to indicate the activity captured in the video.",
      ],
    },
  ],
  internship: [
    {
      company: "Newton School",
      from: "1/2022",
      to: "10/2022",
      summary:
        "Full Stack Web Development along with problem-solving. \n Technical Stack Learnt: React, JavaScript, HTML, CSS, and Data Structure with Java. \n Worked on various projects like Movie booking app, Stopwatch, and game.",
    },
  ],
  isCurrentlyWorking: [],
};

function Resume({ className }) {
  const data = useSelector((state) => state.resume.value);
  return (
    <Stack className={`resume ${className}`} flexDirection="row">
      <Stack
        className="h-fit"
        sx={{ width: "30%", borderRight: "2px solid black" }}
        spacing={2}
      >
        <Stack sx={{ fontSize: "14px" }} spacing={0.5}>
          <strong>{data?.email}</strong>
          <strong>{data?.phone}</strong>
          <strong>{data?.address}</strong>
        </Stack>
        <Stack spacing={0.5}>
          <div className="subtitle">Skills</div>
          <ul
            style={{
              fontSize: "14px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {data.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </Stack>
        <Stack spacing={0.5}>
          <div className="subtitle" style={{ marginBottom: "4px" }}>
            Education
          </div>
          {data?.education?.map((item, idx) => (
            <Stack
              key={idx}
              sx={{
                fontSize: "14px",
                paddingBottom:
                  idx === data?.education.length - 1 ? "0px" : "16px",
              }}
              spacing={0.5}
            >
              <div>
                {item.startYear}-{item.endYear}
              </div>
              <div className="boldText">{item.degree}</div>
              {item?.fieldStudy && <div>{item.fieldStudy}</div>}
              <div className="boldText">{item.institution}</div>
              <div>{item.place}</div>
              <div>{item.gpa}</div>
            </Stack>
          ))}
        </Stack>
        <Stack spacing={0.5}>
          <div className="subtitle">Websites and Profiles</div>
          <ul
            style={{
              fontSize: "14px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {data.websites.map((website, idx) => (
              <li key={idx}>
                <a href={website.url} target="_blank">
                  {website.name}
                </a>
              </li>
            ))}
          </ul>
        </Stack>
        <Stack spacing={0.5}>
          <div className="subtitle">Languages</div>
          <ul
            style={{
              fontSize: "14px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {data.languages.map((language, idx) => (
              <li key={idx}>{language}</li>
            ))}
          </ul>
        </Stack>
      </Stack>
      <Stack sx={{ width: "70%", padding: "0 24px" }} spacing={2}>
        <div className="title">{data?.name}</div>
        <Stack spacing={0.5}>
          <div className="subtitle">Summary</div>
          <div style={{ fontSize: "14px" }}>{data?.summary}</div>
        </Stack>
        <Stack spacing={0.5}>
          <div className="subtitle">Experience</div>
          {data?.experience?.map((item, idx) => (
            <Stack
              key={idx}
              sx={{ fontSize: "14px", paddingBottom: "16px" }}
              spacing={0.5}
            >
              <div className="boldText">
                {item.companyName} - {item.jobRole}
              </div>
              <div>
                {item.city}, {item.country}
              </div>
              <div>
                {item.from} - {item.isCurrentlyWorking ? "Current" : item.to}
              </div>
              <ul
                style={{
                  fontSize: "14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                {item.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </Stack>
          ))}
        </Stack>
        <Stack spacing={0.5}>
          <div className="subtitle">Internships and Certifications</div>
          {data?.internship?.map((intern, item) => (
            <Stack spacing={0.5} sx={{ fontSize: "14px" }}>
              <div>{intern?.company}</div>
              <div>
                {intern.from} - {intern.to}
              </div>
              <div>{intern?.summary}</div>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Resume;
