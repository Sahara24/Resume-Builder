import { Checkbox, FormControlLabel, Stack } from "@mui/material";
import ResumeForm from "./components/ResumeForm";
import { useDispatch, useSelector } from "react-redux";
import { showResume } from "./slices/resumeSlice";
import Resume from "./components/Resume";
import ResumeBuilder from "./pages/ResumeBuilder";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Stack sx={{ maxWidth: "2480px", margin: "auto" }}>
        <ResumeBuilder />
        {/* <Stack
      sx={{ width: "100%" }}
      direction="row"
      justifyContent="space-between"
    >
      <h1>Resume Builder</h1>
      <FormControlLabel
        control={
          <Checkbox
            onChange={(e) => {
              dispatch(showResume(e.target.checked));
            }}
          />
        }
        label="Preview"
      />
    </Stack>
    {resumeStore?.showResume ? (
      <Resume />
    ) : (
      <Stack sx={{ maxWidth: "600px", margin: "auto" }}>
        <ResumeForm />
      </Stack>
    )} */}
      </Stack>
    </>
  );
}

export default App;
