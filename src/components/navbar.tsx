"use client"
import React from "react"

type NavbarProps = {
  setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // other props...
};
export function Navbar({setNavbarOpen}: NavbarProps) {
  const [open, setOpen] = React.useState(false)
  const handleToggle = () => {
    setOpen(!open);
    setNavbarOpen(!open); // Pass the state to the parent
  };
  return (
    <nav className="  flex w-full h-20 border-b-2 bg-slate-100 shadow-2xl shadow-slate-500 items-center p-4">
      <div className="text-black text-2xl md:text-xl font-medium  p-4 hover:underline transition-transform duration-300 ease-in-out hover:scale-105 ">
        Deepanshu Tyagi
      </div>
      <div className=" hidden md:flex md:ml-auto">
        <span className="md:text-black md:flex md:space-x-5 md:mr-5 md:text-xl  md:font-medium p-4 ">

          <a href="#introduction" className="hover:underline transition-transform duration-300 ease-in-out hover:scale-105">Home</a>
          <a href="#about" className="hover:underline transition-transform duration-300 ease-in-out hover:scale-105">About</a>
          <a href="#skills" className="hover:underline transition-transform duration-300 ease-in-out hover:scale-105">Skills</a>
          <a href="#projects" className="hover:underline transition-transform duration-300 ease-in-out hover:scale-105 ">Project</a>
          <a href="#contact" className="hover:underline transition-transform duration-300 ease-in-out hover:scale-105">Contact</a>

        </span>
      </div>
      <div className=" md:hidden flex flex-col m-auto">
  {/* Button to toggle the menu */}
  <div className="md:hidden text-black text-xl flex ml-auto absolute right-0 top-1  p-4">
    <button  onClick={handleToggle}>
      {open ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 transition-transform duration-300 ease-in-out transform rotate-180 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 transition-transform duration-300 ease-in-out"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </button>
  </div>

  {/* The collapsible menu */}
  <div
    className={`transition-all duration-300 ease-in-out overflow-hidden absolute top-20 right-0  ${
      open ? 'max-h-screen w-60 text-black text-xl font-medium ' : 'max-h-0'
    }`}
  >
    {open && (
      <ul className="bg-gray-100 p-4 rounded-lg shadow-md space-y-2  ">
        <li className="text-black text-lg hover:underline transition-transform duration-300 ease-in-out hover:scale-105"><a href="#introduction" onClick={handleToggle}>Home</a></li>
        <li className="text-black text-lg hover:underline transition-transform duration-300 ease-in-out hover:scale-105"><a href="#about" onClick={handleToggle}>About</a></li>
        <li className="text-black text-lg hover:underline transition-transform duration-300 ease-in-out hover:scale-105"><a href="#skills" onClick={handleToggle}>Skills</a></li>
        <li className="text-black text-lg hover:underline transition-transform duration-300 ease-in-out hover:scale-105"><a href="#projects" onClick={handleToggle}>Project</a></li>
        <li className="text-black text-lg hover:underline transition-transform duration-300 ease-in-out hover:scale-105"><a href="#contact" onClick={handleToggle}>Contact</a></li>
        </ul>
    )}
  </div>
</div>

    </nav>
  )
}





