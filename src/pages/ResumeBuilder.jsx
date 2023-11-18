import React from "react";
import Resume from "../components/Resume";
import ResumeForm from "../components/ResumeForm";

function ResumeBuilder() {
  return (
    <div className="flex w-full">
      <Resume className="w-2/3" />
      <ResumeForm className="w-1/3" />
    </div>
  );
}

export default ResumeBuilder;
