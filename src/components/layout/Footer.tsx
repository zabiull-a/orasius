import { Link } from "react-router-dom";
import orasiusLogo from "@/assets/orasius-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img
              src={orasiusLogo}
              alt="ORASIUS Corporate Training & Professional Development"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-3 text-sm text-primary-foreground/60 leading-relaxed">
              Global training and professional development for future-ready
              professionals and organizations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", to: "/about" },
                { label: "What We Do", to: "/what-we-do" },
                { label: "Programs", to: "/programs" },
                { label: "Trainers", to: "/trainers" },
                { label: "Why Choose Us", to: "/why-choose-us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>Phone: +1 786 2436792</li>
              <li>Email: info@orasius.com</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Terms & Conditions", to: "/terms" },
                { label: "Code of Conduct", to: "/code-of-conduct" },
                { label: "Ethics & Compliance", to: "/ethics" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} ORASIUS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
