import { Logo } from "@/components/logo";
import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

// Custom TikTok icon component
const TikTokIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export function FooterDesktop() {
  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/p/Isha-Fashions-Sydney-100089806684908/", 
      label: "Facebook" 
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/dulhanexclusivesbyisha/", 
      label: "Instagram" 
    },
    { 
      icon: TikTokIcon, 
      href: "https://www.tiktok.com/@dulhanexclusivesbyisha", 
      label: "TikTok" 
    },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "#collections", label: "Collections" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Logo />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Exquisite bridal wear that celebrates your unique story. Handcrafted with love, for your most memorable day.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground text-sm">
                  Shop 1/240 George St, Liverpool NSW 2170, Australia
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground text-sm">
                  info@dulhanexclusives.com
                </span>
              </div>
            </div>
          </div>

          {/* Social Media Links - Prominently displayed */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-foreground">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary/50"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Dulhan Exclusives. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 