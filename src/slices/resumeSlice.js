import { createSlice } from "@reduxjs/toolkit";

const myResume = {
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
        "Played a pivotal role in the fintech project, focused on comprehensive banking operations management and financial tracking.",
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
    handleCurrrentlyWorking: (state, action) => {
      const index = action.payload?.index;
      state.value.experience[index] = action?.payload?.isChecked;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addValues, showResume, handleCurrrentlyWorking } =
  resumeSlice.actions;

export default resumeSlice.reducer;
