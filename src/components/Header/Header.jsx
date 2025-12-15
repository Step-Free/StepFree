import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Menu,
  Globe,
  LogOut,
  User,
  ChevronDown,
  MapPin,
  Briefcase,
  GraduationCap
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ThemeProvider/ThemeModeToggle";
import { useElementHeight } from "@/hooks/useElementsHeight";
import logo from "@/assets/images/logo.svg";

const Header = ({ onHeightChange }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { ref: headerRef } = useElementHeight(onHeightChange);
  const [scrolled, setScrolled] = useState(false);

  // State for user data
  const [user, setUser] = useState(() => JSON.parse(sessionStorage.getItem("loggedInUser") || "null"));

  useEffect(() => {
    const handleUserUpdate = () => {
      setUser(JSON.parse(sessionStorage.getItem("loggedInUser") || "null"));
    };

    window.addEventListener("userUpdated", handleUserUpdate);
    // Also listen for storage events for cross-tab sync
    window.addEventListener("storage", handleUserUpdate);

    return () => {
      window.removeEventListener("userUpdated", handleUserUpdate);
      window.removeEventListener("storage", handleUserUpdate);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/auth/sign-in");
  };

  const mainNav = [
    { to: "/main", label: t("header.home"), end: true },
    { to: "/main/about", label: t("header.about") },
    {
      label: t("header.services"),
      dropdown: [
        { to: "/main/jobs", label: t("header.jobs"), icon: Briefcase },
        { to: "/main/places", label: t("header.places"), icon: MapPin },
        { to: "/main/education", label: t("header.education"), icon: GraduationCap },
      ],
    },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-background/80 backdrop-blur-md shadow-md border-b border-border/50 py-3"
        : "bg-background/60 backdrop-blur-sm border-b border-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">

        {/* LOGO AREA */}
        <NavLink to="/main" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 transition-transform group-hover:scale-110">
            <img src={logo} alt="StepFree" className="w-6 h-6 object-contain" />
          </div>
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            StepFree
          </span>
        </NavLink>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-1 bg-secondary/50 p-1.5 rounded-full border border-border/40">
          {mainNav.map((item, idx) => {
            if (item.dropdown) {
              const isParentActive = item.dropdown.some(
                (child) => location.pathname === child.to
              );
              return (
                <div key={idx} className="relative group">
                  <button
                    className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${isParentActive
                      ? "bg-background shadow-sm text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                      }`}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  <div className="absolute top-full left-0 rtl:left-auto rtl:right-0 mt-3 w-56 p-2 rounded-xl bg-popover/95 backdrop-blur-lg border border-border/50 shadow-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-[100]">
                    {item.dropdown.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-colors ${isActive
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                          }`
                        }
                      >
                        {child.icon && <child.icon className="w-4 h-4" />}
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
                  `px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${isActive
                    ? "bg-background shadow-sm text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="rounded-full w-9 h-9 text-muted-foreground hover:text-foreground hover:bg-accent"
            title={t("header.toggleLanguage")}
          >
            <Globe className="w-4 h-4" />
            <span className="sr-only">{t("header.toggleLanguage")}</span>
          </Button>

          <ModeToggle />

          <div className="w-px h-6 bg-border mx-1" />

          {user ? (
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer p-1 pr-3 rounded-full hover:bg-accent transition-colors border border-transparent hover:border-border/40">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm ring-2 ring-background overflow-hidden relative">
                    {user.profileImage ? (
                      <img src={user.profileImage} alt="User" className="w-full h-full object-cover" />
                    ) : (
                      user.firstName?.[0]?.toUpperCase()
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="text-xs font-semibold leading-none">{user.firstName}</span>
                  </div>
                  <ChevronDown className="w-3 h-3 text-muted-foreground" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">

                <DropdownMenuItem asChild className="cursor-pointer">
                  <NavLink to="/main/profile" className="flex items-center w-full">
                    <User className="w-4 h-4 mr-2" />
                    {t("header.profile")}
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-destructive focus:text-destructive cursor-pointer">
                  <LogOut className="w-4 h-4 mr-2" />
                  {t("header.logout")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild className="rounded-full px-6 font-semibold shadow-lg shadow-primary/20">
              <NavLink to="/auth/sign-in">
                {t("header.login")}
              </NavLink>
            </Button>
          )}
        </div>

        {/* MOBILE MENU TRIGGER */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="rounded-full w-9 h-9"
          >
            <Globe className="w-5 h-5" />
          </Button>

          <ModeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full border-border/60" aria-label={t("header.menu")}>
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] flex flex-col pt-10 px-6">
              <SheetHeader className="absolute top-4 left-4">
                {/* Optional customized header content */}
              </SheetHeader>

              {user ? (
                <div className="flex flex-col items-center gap-3 mb-8 p-4 bg-muted/30 rounded-2xl border border-border/50">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold shadow-lg overflow-hidden relative">
                    {user.profileImage ? (
                      <img src={user.profileImage} alt="User" className="w-full h-full object-cover" />
                    ) : (
                      user.firstName?.[0]
                    )}
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-lg">{user.firstName} {user.lastName}</p>
                    <p className="text-muted-foreground text-sm">{user.email}</p>
                  </div>
                </div>
              ) : (
                <div className="mb-8">
                  <Button asChild className="w-full rounded-full h-11 text-base shadow-md">
                    <NavLink to="/auth/sign-in">
                      {t("header.login")}
                    </NavLink>
                  </Button>
                </div>
              )}

              <nav className="flex flex-col gap-1 flex-1">
                {mainNav.map((item, idx) => {
                  if (item.dropdown) {
                    return (
                      <div key={idx} className="flex flex-col gap-2 py-2">
                        <span className="text-sm font-semibold text-muted-foreground px-4">{item.label}</span>
                        <div className="flex flex-col gap-1 bg-muted/20 rounded-xl p-2">
                          {item.dropdown.map((child) => (
                            <NavLink
                              key={child.to}
                              to={child.to}
                              className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition-colors ${isActive
                                  ? "bg-background text-primary shadow-sm font-semibold"
                                  : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
                                }`
                              }
                            >
                              {child.icon && <child.icon className="w-4 h-4" />}
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
                        `flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all ${isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  );
                })}

                {user && (
                  <>
                    <Button
                      variant="ghost"
                      asChild
                      className="justify-start rounded-xl h-12 px-4 gap-3 mb-1"
                    >
                      <NavLink to="/main/profile">
                        <User className="w-5 h-5" />
                        {t("header.profile")}
                      </NavLink>
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={handleLogout}
                      className="mt-auto justify-start text-destructive hover:text-destructive hover:bg-destructive/10 rounded-xl h-12 px-4 gap-3"
                    >
                      <LogOut className="w-5 h-5" />
                      {t("header.logout")}
                    </Button>
                  </>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
