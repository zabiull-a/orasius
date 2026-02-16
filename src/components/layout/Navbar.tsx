import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import orasiusLogo from "@/assets/orasius-logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "What We Do", to: "/what-we-do" },
  { label: "Programs", to: "/programs" },
  { label: "Trainers", to: "/trainers" },
  { label: "Why Choose Us", to: "/why-choose-us" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-primary-foreground">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={orasiusLogo}
            alt="ORASIUS Corporate Training & Professional Development"
            className="h-14 w-auto brightness-0 invert"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors rounded-md",
                pathname === link.to
                  ? "text-primary-foreground bg-primary-foreground/15"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Button asChild size="sm" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden border-t border-primary-foreground/10 bg-primary">
          <nav className="container flex flex-col py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-3 py-2.5 text-sm font-medium rounded-md transition-colors",
                  pathname === link.to
                    ? "text-primary-foreground bg-primary-foreground/15"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button asChild size="sm" className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
