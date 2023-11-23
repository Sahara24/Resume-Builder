import { createSlice } from "@reduxjs/toolkit";

const myResume = {
  name: "Alexandra Johnson",
  address: "123 Main Street, Anytown, 12345",
  phone: "555-987-6543",
  email: "alexandra.johnson@example.com",
  summary:
    "Experienced Front End Developer passionate about crafting engaging user experiences. Skilled in React, JavaScript, and CSS, dedicated to delivering high-quality results and driving customer satisfaction.",
  education: [
    {
      degree: "Bachelor of Science",
      fieldStudy: "Computer Science",
      startYear: 2015,
      endYear: 2019,
      institution: "Tech University",
      place: "Anytown",
      gpa: "3.8/4.0",
    },
    {
      degree: "High School Diploma",
      startYear: 2013,
      endYear: 2015,
      institution: "Anytown High School",
      place: "Anytown",
      gpa: "4.0",
    },
  ],
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "SASS",
    "Python",
    "Git",
  ],
  languages: ["English", "Spanish", "French"],
  websites: [
    { name: "GitHub", url: "https://github.com/alex_j" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/alexandra-johnson/",
    },
  ],
  experience: [
    {
      companyName: "Tech Solutions Inc.",
      jobRole: "Frontend Developer",
      city: "Anytown",
      country: "USA",
      from: "06/2022",
      to: "",
      isCurrentlyWorking: true,
      description: [
        "Contributing to the development of a robust e-commerce platform, focusing on user interface enhancements and performance optimization.",
        "Collaborating with cross-functional teams to integrate new features and improve existing ones.",
        "Implementing responsive designs for optimal user experience across devices.",
        "Utilizing version control systems such as Git for codebase management.",
      ],
    },
    {
      companyName: "Online Mart",
      jobRole: "Web Developer",
      city: "Anothercity",
      country: "USA",
      from: "09/2020",
      to: "05/2022",
      isCurrentlyWorking: false,
      description: [
        "Developed and maintained the company's website, implementing new features and resolving bugs.",
        "Collaborated with designers to create visually appealing and user-friendly interfaces.",
        "Ensured website responsiveness and compatibility across various browsers.",
      ],
    },
  ],
  internship: [
    {
      company: "Tech Academy",
      from: "01/2021",
      to: "08/2021",
      summary:
        "Focused on full-stack development, gaining hands-on experience with React, JavaScript, HTML, CSS, and Node.js.",
    },
  ],
};
const emptyState = {
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

const initialState = {
  value: myResume,
  showResume: false,
  preview: true,
};

export const resumeSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addValues: (state, action) => {
      state.value = action.payload;
    },
    showResume: (state, action) => {
      state.showResume = action.payload;
    },
    handlePreview: (state, action) => {
      state.preview = action.payload;
    },
    handleCurrrentlyWorking: (state, action) => {
      const index = action.payload?.index;
      state.value.experience[index] = action?.payload?.isChecked;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addValues, showResume, handlePreview, handleCurrrentlyWorking } =
  resumeSlice.actions;

export default resumeSlice.reducer;
