import React from "react";
import resumeImg from "../../assets/resume.png";

export function Navbar() {
  return (
    <nav className="bg-slate-800 p-4 drop-shadow-lg w-full sticky">
      <div className="max-w-full mx-auto flex justify-between items-center px-8">
        <img src={resumeImg} alt="resume" width={40} height={40} />
        <div className="hidden md:block">
          <button
            onClick={() => {
              window.print();
            }}
            className="text-white text-xl mx-3 border rounded-lg px-4 py-2"
          >
            Download
          </button>
        </div>
      </div>
    </nav>
  );
}

