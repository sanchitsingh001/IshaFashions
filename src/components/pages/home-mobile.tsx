import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, MapPin, Phone, Star, Users, Award, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function HomeMobile() {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Brides' },
    { icon: Star, value: '4.9', label: 'Customer Rating' },
    { icon: Award, value: '15+', label: 'Years Experience' },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center text-center text-white overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/images/free-photo-of-elegant-indian-bridal-portrait-with-jewelry.jpeg"
          alt="Elegant Indian bridal portrait with traditional jewelry"
          data-ai-hint="indian bride jewelry"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative z-20 p-6 max-w-sm mx-auto">
          <h1 className="text-3xl font-bold font-headline leading-tight tracking-tight mb-4">
            Where Dreams are Woven in Silk & Gold
          </h1>
          <p className="text-base text-gray-200 leading-relaxed mb-8">
            Discover exquisite bridal wear that celebrates your unique story. Handcrafted with love, for your most memorable day.
          </p>
          <Button asChild size="lg" className="h-12 px-8 text-base w-full bg-primary hover:bg-primary/90">
            <Link href="#contact">
              Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6 max-w-full">
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="about" className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-full">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold font-headline tracking-tight text-primary mb-4">Timeless Elegance, Modern Grace</h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
              At Dulhan Exclusives, we believe every bride deserves to feel like royalty. Our collections are a tribute to the rich heritage of bridal couture.
            </p>
          </div>
          
          {/* Vertical Image Gallery */}
          <div className="space-y-6">
            {/* Image 1 */}
            <div className="group cursor-pointer w-full">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <Image 
                  src="/images/free-photo-of-elegant-traditional-indian-bridal-portrait.jpeg" 
                  alt="Elegant traditional Indian bridal portrait" 
                  width={500}
                  height={600}
                  className="object-cover aspect-[3/4] w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint="traditional bridal portrait"
                />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-center text-gray-800">Bridal Collection</h3>
            </div>

            {/* Image 2 */}
            <div className="group cursor-pointer w-full">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <Image 
                  src="/images/Two-Bridal-Indian-Models-with-Traditional-Dress-and-Jewelry-23043-pixahive.jpg" 
                  alt="Two bridal Indian models with traditional dress and jewelry" 
                  width={500}
                  height={600}
                  className="object-cover aspect-[3/4] w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint="bridal models traditional dress"
                />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-center text-gray-800">Wedding Wear</h3>
            </div>

            {/* Image 3 */}
            <div className="group cursor-pointer w-full">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <Image 
                  src="/images/unnamed.webp" 
                  alt="Bridal outfit fabric" 
                  width={500}
                  height={600}
                  className="object-cover aspect-[3/4] w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint="wedding dress fabric"
                />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-center text-gray-800">Designer Pieces</h3>
            </div>

            {/* Image 4 */}
            <div className="group cursor-pointer w-full">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <Image 
                  src="/images/2024-04-15.webp" 
                  alt="Bridal fashion collection" 
                  width={500}
                  height={600}
                  className="object-cover aspect-[3/4] w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint="bridal fashion collection"
                />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-center text-gray-800">Fashion Collection</h3>
            </div>

            {/* Image 5 */}
            <div className="group cursor-pointer w-full">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <Image 
                  src="/images/2024-09-09.webp" 
                  alt="Exclusive bridal designs" 
                  width={500}
                  height={600}
                  className="object-cover aspect-[3/4] w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint="exclusive bridal designs"
                />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-center text-gray-800">Exclusive Designs</h3>
            </div>

            {/* Image 6 */}
            <div className="group cursor-pointer w-full">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <Image 
                  src="/images/Screenshot 2022-12-29 at 6.06.10 am.webp" 
                  alt="Bridal jewelry and accessories" 
                  width={500}
                  height={600}
                  className="object-cover aspect-[3/4] w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint="bridal jewelry accessories"
                />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-center text-gray-800">Jewelry & Accessories</h3>
            </div>
          </div>
        </div>
      </section>

      {/* New Extended Collections Section */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6 max-w-full">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold font-headline tracking-tight text-primary mb-4">Discover Our Latest Creations</h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
              From runway glamour to exclusive designer pieces, explore our newest collections that blend contemporary trends with timeless Indian elegance. Each piece tells a story of craftsmanship and beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-full">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">Get In Touch</h2>
            <p className="text-base leading-relaxed opacity-90 max-w-md mx-auto">
              Ready to start your bridal journey? Contact us today to schedule your consultation.
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Call Button */}
            <div className="text-center">
              <Button asChild size="lg" variant="secondary" className="text-primary w-full h-14 text-lg">
                <Link href="tel:+61411106106">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +61 411 106 106
                </Link>
              </Button>
            </div>
            
            {/* Business Hours */}
            <div className="text-center">
              <h3 className="text-lg font-bold mb-3">Business Hours</h3>
              <div className="space-y-2 text-sm opacity-90">
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>11:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Monday</span>
                  <span>11:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuesday</span>
                  <span>11:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Wednesday</span>
                  <span>11:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Thursday</span>
                  <span>11:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span>11:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>11:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
            
            {/* Our Address */}
            <div className="text-center">
              <h3 className="text-lg font-bold mb-3">Visit Our Showroom</h3>
              <p className="text-sm opacity-90 mb-3">
                Experience our collections in person at our beautiful showroom in Liverpool, NSW.
              </p>
              <div className="space-y-1 text-sm opacity-90">
                <p>Shop 1/240 George St</p>
                <p>Liverpool NSW 2170, Australia</p>
              </div>
              {/* Map Link */}
              <div className="mt-4">
                <Link 
                  href="https://maps.google.com/?q=Shop+1/240+George+St,+Liverpool+NSW+2170,+Australia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  View on Google Maps
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6 max-w-full">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold font-headline tracking-tight text-primary mb-4">Follow Us</h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
              Stay connected with us on social media for the latest bridal trends and exclusive offers.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6">
            {/* Facebook */}
            <Link 
              href="https://www.facebook.com/p/Isha-Fashions-Sydney-100089806684908/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Facebook className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">Facebook</span>
            </Link>

            {/* Instagram */}
            <Link 
              href="https://www.instagram.com/dulhanexclusivesbyisha/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">Instagram</span>
            </Link>

            {/* TikTok */}
            <Link 
              href="https://www.tiktok.com/@dulhanexclusivesbyisha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">TikTok</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 