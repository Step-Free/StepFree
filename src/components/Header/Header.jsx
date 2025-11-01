import { useState } from "react";
import Logo from "../../assets/Barrier.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        
      
        <div className="flex items-center ">
          <img
            src={Logo}
            alt="StepFree Logo"
            className="w-15 h-15 object-contain"
          />
          <h1 className="text-2xl font-bold text-blue-600 italic">StepFree</h1>
        </div>

      
        <nav className="hidden md:flex items-center space-x-10">
          <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </a>
          <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
            About
          </a>

        
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

          
            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100">
                <a
                  href="/jobs"
                  className="block px-4 py-2 hover:bg-blue-50 text-gray-700"
                >
                  Jobs
                </a>
                <a
                  href="/education"
                  className="block px-4 py-2 hover:bg-blue-50 text-gray-700"
                >
                  Education
                </a>
                <a
                  href="/places"
                  className="block px-4 py-2 hover:bg-blue-50 text-gray-700"
                >
                  Places
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
