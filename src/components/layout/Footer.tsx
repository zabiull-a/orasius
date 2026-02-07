import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <span className="font-display text-xl font-bold tracking-tight">
              IELENT
            </span>
            <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
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
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
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
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Phone: +XX XXXX XXXX</li>
              <li>Email: info@ielent.com</li>
              <li>Office Address Line 1</li>
              <li>City, State, Country</li>
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
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} IELENT. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
