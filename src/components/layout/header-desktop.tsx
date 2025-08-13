'use client';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

export function HeaderDesktop() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#collections', label: 'Collections' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto flex h-24 items-center justify-between px-6 lg:px-8">
        <div className="flex items-center">
          <Logo />
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-foreground/80 hover:text-primary transition-colors font-semibold text-base relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button asChild variant="ghost" size="sm" className="hidden lg:flex items-center gap-2">
            <Link href="tel:+61411106106">
              <Phone className="h-4 w-4" />
              +61 411 106 106
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
} 