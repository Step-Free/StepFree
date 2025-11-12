import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/images/logo.svg";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNav = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services/jobs", label: "Jobs" },
    { to: "/services/places", label: "Accessible Places" },
    { to: "/services/education", label: "Education" },
  ];

  return (
    <footer className="bg-background border-t border-border mt-12">
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <span className="text-primary font-bold italic text-lg">
            StepFree
          </span>
        </div>

        {/* Center: Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
          {footerNav.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-muted-foreground hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Section: Social or Contact */}
        <div className="flex items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition"
            aria-label="Twitter"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition"
            aria-label="Twitter"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition"
            aria-label="Twitter"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>

      <Separator className="opacity-50" />

      {/* Bottom Copyright */}
      <div className="text-center p-4 text-xs text-muted-foreground">
        © {currentYear} StepFree. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
