import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import orasiusLogo from "@/assets/orasius-logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Programs", to: "/programs" },
  { label: "Methodology", to: "/methodology" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-primary-foreground overflow-visible">
      <div className="container flex items-center justify-between min-h-[64px] md:min-h-[72px] lg:min-h-[80px] py-2 overflow-visible">
        <Link to="/" className="flex items-center gap-2" style={{ flexShrink: 0, flexGrow: 0 }}>
          <img
            src={orasiusLogo}
            alt="ORASIUS Corporate Training & Professional Development"
            className="navbar-logo brightness-0 invert"
            style={{
              height: '40px',
              width: 'auto',
              aspectRatio: 'auto',
              objectFit: 'contain',
              maxHeight: 'none',
              maxWidth: 'none',
              minHeight: '40px',
            }}
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
            <Link to="/contact">Book Discovery Call</Link>
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
                  Book Discovery Call
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
