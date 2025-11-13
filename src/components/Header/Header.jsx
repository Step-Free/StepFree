import React from "react";
import { ModeToggle } from "@/components/ThemeProvider/ThemeModeToggle";
import logo from "@/assets/images/logo.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useElementHeight } from "@/hooks/useElementsHeight"; // 👈 import your hook

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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
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
      </nav>

      {/* Mode toggle desktop */}
      <div className="hidden md:block ">
        <ModeToggle />
      </div>

      {/* Mobile Burger Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-64 flex flex-col p-6">
          <SheetHeader>
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Contains links to Home, About, and Our Services
            </SheetDescription>
          </SheetHeader>

          <nav className="flex flex-col gap-4 mt-6">
            {mainNav.map((item, idx) => {
              if (item.dropdown) {
                return (
                  <div key={idx} className="flex flex-col gap-2">
                    <span className=" text-muted-foreground">{item.label}</span>
                    <div className="flex flex-col gap-1 ml-4">
                      {item.dropdown.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className={({ isActive }) =>
                            `block px-2 py-1 text-sm ${
                              isActive
                                ? "text-primary font-semibold"
                                : "text-muted-foreground hover:text-primary"
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
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-primary"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
            <div className="mt-6 flex justify-center">
              <ModeToggle />
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
