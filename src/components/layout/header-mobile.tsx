'use client';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';
import { useState } from 'react';

export function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#collections', label: 'Collections' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const closeSheet = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Logo />
        </div>
        
        <div className="flex items-center space-x-2">
          <Button asChild variant="ghost" size="icon" className="h-10 w-10">
            <Link href="tel:+61411106106">
              <Phone className="h-5 w-5" />
              <span className="sr-only">Call Us</span>
            </Link>
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh] rounded-t-2xl">
              <div className="p-6">
                <div className="mb-8 text-center">
                  <Logo />
                </div>
                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-xl font-medium text-foreground/80 hover:text-primary transition-colors py-4 px-4 rounded-xl hover:bg-secondary/50 text-center"
                      onClick={closeSheet}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8 pt-6 border-t">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Call us: <Link href="tel:+61411106106" className="hover:text-primary transition-colors">+61 411 106 106</Link>
                    </p>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 