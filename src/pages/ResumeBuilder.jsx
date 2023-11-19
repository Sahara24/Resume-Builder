import React, { memo } from "react";
import { Resume, ResumeForm } from "../components";

function ResumeBuilder() {
  return (
    <div className="flex w-full h-[845px] bg-gray-200">
      <div className="px-32 py-4 w-9/12">
        <Resume className="scroll-hidden max-h-[800px] overflow-y-scroll bg-white" />
      </div>
      <ResumeForm className="scroll-hidden w-3/12 max-h-[845px] bg-slate-100 drop-shadow-lg  overflow-y-scroll" />
    </div>
  );
}

export default memo(ResumeBuilder);
