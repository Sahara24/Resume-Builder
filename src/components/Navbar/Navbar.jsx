import React from "react";
import resumeImg from "../../assets/resume.png";
import { useDispatch, useSelector } from "react-redux";
import { handlePreview } from "../../slices/resumeSlice";

export function Navbar() {
  const dispatch = useDispatch();
  const preview = useSelector((state) => state?.resume?.preview);
  function printfn() {
    window.print();
  }
  function handlePreviewfn(bool) {
    return () => {
      dispatch(handlePreview(bool));
    };
  }
  return (
    <nav className="bg-slate-800 p-4 drop-shadow-lg w-full sticky">
      <div className="max-w-full mx-auto flex justify-between items-center px-8">
        <img
          src={resumeImg}
          alt="resume"
          width={40}
          height={40}
          onClick={handlePreviewfn(false)}
        />
        <div className="hidden md:block">
          <button
            onClick={printfn}
            className="text-white text-xl mx-3 border rounded-lg px-4 py-2"
          >
            Download
          </button>
        </div>
        <div className="md:hidden">
          {preview ? (
            <button
              onClick={printfn}
              className="text-white text-xs mx-3 border rounded-lg px-2 py-1"
            >
              Download
            </button>
          ) : (
            <button
              onClick={handlePreviewfn(true)}
              className="text-white text-xs mx-3 border rounded-lg px-2 py-1"
            >
              Preview{" "}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
