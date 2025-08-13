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

export function FooterMobile() {
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
    <footer className="bg-secondary/50 border-t overflow-hidden">
      <div className="container mx-auto px-4 py-8 max-w-full">
        {/* Logo and Description - Centered */}
        <div className="text-center mb-8">
          <Logo />
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
            Exquisite bridal wear that celebrates your unique story. Handcrafted with love, for your most memorable day.
          </p>
        </div>

        {/* Quick Links - Centered */}
        <div className="text-center mb-8">
          <h3 className="font-semibold text-base mb-4 text-foreground">Quick Links</h3>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm py-2 px-2 sm:px-3 rounded-md hover:bg-secondary/50"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info - Centered */}
        <div className="text-center mb-8">
          <h3 className="font-semibold text-base mb-4 text-foreground">Contact Info</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-muted-foreground text-sm">
                Shop 1/240 George St, Liverpool NSW 2170, Australia
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-muted-foreground text-sm">
                info@dulhanexclusives.com
              </span>
            </div>
          </div>
        </div>

        {/* Social Media Links - Prominently displayed and centered */}
        <div className="text-center mb-8">
          <h3 className="font-semibold text-base mb-4 text-foreground">Follow Us</h3>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors p-2 sm:p-3 rounded-full hover:bg-secondary/50"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright - Centered */}
        <div className="text-center pt-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dulhan Exclusives. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 