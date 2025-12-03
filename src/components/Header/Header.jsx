import React, { useState, useEffect } from "react";
import { ModeToggle } from "@/components/ThemeProvider/ThemeModeToggle";
import logo from "@/assets/images/logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

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

const Header = ({ onHeightChange }) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const location = useLocation();
  const { ref: headerRef } = useElementHeight(onHeightChange);
  const [showAvatarMenu, setShowAvatarMenu] = useState(false);

  const user = JSON.parse(sessionStorage.getItem("loggedInUser"));

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  const mainNav = [
    { to: "/main", label: "Home", end: true },
    { to: "/main/about", label: "About" },
    {
      label: "Our Services",
      dropdown: [
        { to: "/main/jobs", label: "Jobs" },
        { to: "/main/places", label: "Accessible Places" },
        { to: "/main/education", label: "Education" },
      ],
    },
  ];

  const handleLogout = () => {
    sessionStorage.removeItem("loggedInUser");
    navigate("/auth/sign-in"); // client-side navigation
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md shadow-sm border-b border-border px-4 py-4 md:py-6 transition-all flex items-center justify-between"
    >
      {/* Left: Logo */}
      <NavLink to="/main" className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-8 h-8 inline" />
        <span className="text-primary text-2xl font-bold italic">StepFree</span>
      </NavLink>

      {/* Center: Desktop Nav */}
      <nav className="hidden md:flex flex-1 justify-center items-center gap-6">
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

                <div className="absolute top-full left-0 rtl:left-auto rtl:right-0 mt-3 w-56 bg-popover text-popover-foreground rounded-md shadow-lg border border-border opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-[100]">
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

      {/* Right: Desktop User & Theme Toggle */}
      <div className="hidden md:flex items-center gap-4 relative">
        {user ? (
          <div className="relative">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setShowAvatarMenu((prev) => !prev)}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                {user.firstName?.[0]}
                {user.lastName?.[0]}
              </div>
              <p className="text-sm font-medium">
                Welcome, <span className="text-primary">{user.firstName}</span>
              </p>
            </div>

            {/* Avatar dropdown */}
            {showAvatarMenu && (
              <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-40 bg-popover border border-border rounded-md shadow-lg z-50">
                <button
                  onClick={handleLogout}
                  className="w-full text-left rtl:text-right px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <NavLink
            to="/auth/sign-in"
            className="text-sm font-medium text-primary underline"
          >
            Login
          </NavLink>
        )}

        <button
          onClick={toggleLanguage}
          className="cursor-pointer px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium hover:bg-accent transition-colors"
        >
          {i18n.language === "en" ? "ع" : "En"}
        </button>
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
          {/* Welcome / Avatar first */}
          {user ? (
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                {user.firstName?.[0]}
                {user.lastName?.[0]}
              </div>
              <p className="text-sm font-medium">
                Welcome, <span className="text-primary">{user.firstName}</span>
              </p>
            </div>
          ) : (
            <NavLink
              to="/auth/sign-in"
              className="text-sm font-medium text-primary underline mb-4 block"
            >
              Login
            </NavLink>
          )}

          {/* Navigation */}
          <nav className="flex flex-col gap-4">
            {mainNav.map((item, idx) => {
              if (item.dropdown) {
                return (
                  <div key={idx} className="flex flex-col gap-2">
                    <span className="text-muted-foreground">{item.label}</span>
                    <div className="flex flex-col gap-1 ml-4 rtl:ml-0 rtl:mr-4">
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

            {/* Mobile Logout */}
            {user && (
              <button
                onClick={handleLogout}
                className="mt-4 px-4 py-2 text-sm text-left rtl:text-right hover:bg-accent hover:text-accent-foreground"
              >
                Log Out
              </button>
            )}
          </nav>

          {/* Mobile Mode Toggle & Lang Switcher at bottom */}
          <div className="mt-6 flex justify-center items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium hover:bg-accent transition-colors"
            >
              {i18n.language === "en" ? "العربية" : "English"}
            </button>
            <ModeToggle />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
