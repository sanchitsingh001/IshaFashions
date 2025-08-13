'use client';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';
import { useState } from 'react';

export function HeaderTablet() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#collections', label: 'Collections' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const closeSheet = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur-sm border-b">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <div className="flex items-center">
          <Logo />
        </div>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.slice(0, 2).map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-foreground/80 hover:text-primary transition-colors font-semibold text-base px-3 py-2 rounded-md hover:bg-secondary/50"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button asChild variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
            <Link href="tel:+61411106106">
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">+61 411 106 106</span>
            </Link>
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="p-6">
                <div className="mb-8">
                  <Logo />
                </div>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-3 px-4 rounded-md hover:bg-secondary/50"
                      onClick={closeSheet}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

              </div>
            </SheetContent>
          </Sheet>
          

        </div>
      </div>
    </header>
  );
} 