import React from "react";

function Navbar() {
  return (
    <nav class="bg-slate-800 p-4 drop-shadow-lg w-full">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="text-white text-xl font-bold">Logo</div>
        <div class="hidden md:block">
          <a href="#" class="text-white mx-3">
            Home
          </a>
          <a href="#" class="text-white mx-3">
            About
          </a>
          <a href="#" class="text-white mx-3">
            Services
          </a>
          <a href="#" class="text-white mx-3">
            Contact
          </a>
        </div>
        <div class="md:hidden">
          <button class="text-white focus:outline-none">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
