import { Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export function Resume({ className }) {
  const data = useSelector((state) => state.resume.value);
  console.log({ data });
  return (
    <Stack className={`resume ${className}`} flexDirection="row">
      <Stack
        className="h-fit"
        sx={{ width: "30%", borderRight: "2px solid black" }}
        spacing={2}
      >
        <Stack sx={{ fontSize: "14px" }} spacing={0.5} maxWidth={"240px"}>
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
              listStyleType: "disc",
            }}
          >
            {data.skills.map((item, idx) => (
              <li key={item?.skill}>{item?.skill}</li>
            ))}
          </ul>
        </Stack>
        <Stack spacing={0.5}>
          <div className="subtitle" style={{ marginBottom: "4px" }}>
            Education
          </div>
          {data?.education?.map((item, idx) => (
            <Stack
              key={item.degree}
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
              listStyleType: "disc",
            }}
          >
            {data.websites.map((website, idx) => (
              <li key={website.name}>
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
              listStyleType: "disc",
            }}
          >
            {data.languages.map((item, idx) => (
              <li key={item?.language}>{item?.language}</li>
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
              key={item.companyName}
              sx={{
                fontSize: "14px",
                paddingBottom:
                  idx === data?.experience.length - 1 ? "0px" : "16px",
              }}
              spacing={0.5}
            >
              <div className="boldText">
                {item.companyName} - {item.jobRole}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>
                  {item.city}, {item.country}
                </span>
                <span>
                  {item.from} - {item.isCurrentlyWorking ? "Current" : item.to}
                </span>
              </div>
              <ul
                style={{
                  fontSize: "14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  listStyleType: "disc",
                }}
              >
                {item.descriptions?.map((desc, idx) => (
                  <li style={{}} key={desc?.description}>
                    {desc?.description}
                  </li>
                ))}
              </ul>
            </Stack>
          ))}
        </Stack>
        <Stack spacing={0.5}>
          <div className="subtitle">Internships and Certifications</div>
          {data?.internship?.map((intern, idx) => {
            return (
              <Stack
                key={intern.company}
                spacing={0.5}
                sx={{ fontSize: "14px" }}
              >
                <div>{intern?.company}</div>
                <div>
                  {intern.from} - {intern.to}
                </div>
                <div>{intern?.summary}</div>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
}
