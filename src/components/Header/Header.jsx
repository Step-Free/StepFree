import React from "react";
import { ModeToggle } from "@/components/ThemeProvider/ThemeModeToggle";
import logo from "@/assets/images/logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useElementHeight } from "@/hooks/useElementsHeight";
// import AuthModal from "./AuthModel"; 

const Header = ({ onHeightChange }) => {
  const location = useLocation();
  const { ref: headerRef } = useElementHeight(onHeightChange);

  const mainNav = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About" },
    {
      label: "Our Services",
      dropdown: [
        { to: "/services/jobs", label: "Jobs" },
        { to: "/services/places", label: "Accessible Places" },
        { to: "/services/education", label: "Education" },
      ],
    },
  ];

  return (
    <header
      ref={headerRef}
      className="sticky top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md shadow-sm border-b border-border flex items-center justify-between px-4 py-4 md:py-6 transition-all"
    >
      {/* Logo */}
      <NavLink to="/" className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-8 h-8 inline" />
        <span className="text-primary text-2xl font-bold italic">StepFree</span>
      </NavLink>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-4">
        {mainNav.map((item, idx) => {
          if (item.dropdown) {
            const isParentActive = item.dropdown.some(
              (child) => location.pathname === child.to
            );

            return (
              <div key={idx} className="relative group">
                <span
                  className={`text-sm font-medium transition flex items-center gap-1 cursor-pointer select-none ${
                    isParentActive
                      ? "text-primary underline"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>

                <div className="absolute top-full left-0 mt-3 w-56 bg-popover text-popover-foreground rounded-md shadow-lg border border-border opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-[100]">
                  {item.dropdown.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className={({ isActive }) =>
                        `block px-4 py-2.5 text-sm rounded-md transition-colors ${
                          isActive
                            ? "bg-primary text-primary-foreground font-semibold"
                            : "hover:bg-accent hover:text-accent-foreground text-muted-foreground"
                        }`
                      }
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <NavLink
              key={idx}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-primary underline"
                    : "text-muted-foreground hover:text-primary"
                }`
              }
            >
              {item.label}
            </NavLink>
          );
        })}

        {/* Login / Register باستخدام المودال */}
        <div className="ml-4 flex items-center gap-2">
          {/* <AuthModal /> زر يظهر المودال مباشرة */}
        </div>
      </nav>

      {/* Mode toggle desktop */}
      <div className="hidden md:block ">
        <ModeToggle />
      </div>

      {/* Mobile Burger Menu */}
      {/* ممكن تضيف AuthModal هنا بنفس الطريقة لو حابب */}
    </header>
  );
};

export default Header;
