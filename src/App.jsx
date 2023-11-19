import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import ResumeBuilder from "./pages/ResumeBuilder";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ResumeBuilder />} />
        <Route
          path="*"
          element={
            <div className="text-red-600 text-center text-4xl p-10">
              Page Not Found
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
