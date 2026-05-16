import { Link } from "react-router-dom";
import { Linkedin, Youtube, Instagram, Twitter } from "lucide-react";
import orasiusLogo from "@/assets/orasius-logo-new.png";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/orasius", Icon: Linkedin },
  { label: "YouTube", href: "https://www.youtube.com/@orasius", Icon: Youtube },
  { label: "Instagram", href: "https://www.instagram.com/orasius", Icon: Instagram },
  { label: "X (Twitter)", href: "https://x.com/orasius", Icon: Twitter },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img
              src={orasiusLogo}
              alt="ORASIUS Corporate Training & Professional Development"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-3 text-sm text-primary-foreground/60 leading-relaxed">
              Enterprise HR, talent acquisition, leadership and workforce development training for global organisations.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`ORASIUS on ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-primary-foreground/20 text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground/40 transition-colors"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Programs", to: "/programs" },
                { label: "Methodology", to: "/methodology" },
                { label: "About", to: "/about" },
                { label: "Contact", to: "/contact" },
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
              <li>
                <a href="tel:+17862436792" className="hover:text-primary-foreground transition-colors">
                  Phone: +1 786 2436792
                </a>
              </li>
              <li>
                <a href="mailto:info@orasius.com" className="hover:text-primary-foreground transition-colors break-all">
                  Email: info@orasius.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918884386913"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  WhatsApp: +91 8884386913
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Privacy Policy", to: "/privacy-policy" },
                { label: "Terms & Conditions", to: "/terms" },
                { label: "Data Security", to: "/data-security" },
                { label: "Refund & Cancellation", to: "/refund-policy" },
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
