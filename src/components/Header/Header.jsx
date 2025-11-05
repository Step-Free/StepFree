import { useState } from "react";
import Logo from "../../assets/Barrier.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="StepFree Logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-2xl font-bold text-blue-600 italic">StepFree</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </a>
          <a
            href="/about"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            About
          </a>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
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

            {isServicesOpen && (
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100">
          <a
            href="/"
            className="block px-6 py-2 text-gray-700 hover:bg-blue-50"
          >
            Home
          </a>
          <a
            href="/about"
            className="block px-6 py-2 text-gray-700 hover:bg-blue-50"
          >
            About
          </a>
          <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className="w-full text-left px-6 py-2 text-gray-700 hover:bg-blue-50 flex justify-between items-center"
          >
            Services
            <svg
              className={`w-4 h-4 transition-transform ${
                isServicesOpen ? "rotate-180" : ""
              }`}
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

          {isServicesOpen && (
            <div className="pl-8">
              <a
                href="/jobs"
                className="block px-6 py-2 text-gray-700 hover:bg-blue-50"
              >
                Jobs
              </a>
              <a
                href="/education"
                className="block px-6 py-2 text-gray-700 hover:bg-blue-50"
              >
                Education
              </a>
              <a
                href="/places"
                className="block px-6 py-2 text-gray-700 hover:bg-blue-50"
              >
                Places
              </a>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
