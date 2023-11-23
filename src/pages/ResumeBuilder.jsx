import React, { memo } from "react";
import { Resume, ResumeForm } from "../components";
import { useSelector } from "react-redux";

function ResumeBuilder() {
  const preview = useSelector((state) => state.resume.preview);
  return (
    <div className="flex w-full h-[845px] bg-gray-200">
      <div
        className={`${
          preview ? "block" : "hidden"
        } m-auto px-4 xl:px-32 py-4 w-full xl:w-9/12`}
      >
        <Resume className="scroll-hidden max-h-[800px] overflow-y-scroll bg-white" />
      </div>
      <ResumeForm
        className={`${
          preview ? "hidden" : "block"
        } scroll-hidden xl:w-3/12 max-h-[845px] bg-slate-100 drop-shadow-lg  overflow-y-scroll`}
      />
    </div>
  );
}

export default memo(ResumeBuilder);
