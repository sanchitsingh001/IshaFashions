import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, MapPin, Phone, Star, Users, Award, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function HomeDesktop() {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Brides' },
    { icon: Star, value: '4.9', label: 'Customer Rating' },
    { icon: Award, value: '15+', label: 'Years Experience' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/images/free-photo-of-elegant-indian-bridal-portrait-with-jewelry.jpeg"
          alt="Elegant Indian bridal portrait with traditional jewelry"
          data-ai-hint="indian bride jewelry"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 p-8 max-w-6xl">
          <h1 className="text-6xl font-extrabold font-headline leading-tight tracking-tighter mb-6">
            Where Dreams are Woven in Silk & Gold
          </h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto leading-relaxed">
            Discover exquisite bridal wear that celebrates your unique story. Handcrafted with love, for your most memorable day.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button asChild size="lg" className="h-16 px-10 text-xl w-full sm:w-auto">
              <Link href="#about">
                Book Consultation <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-16 px-10 text-xl border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto bg-black/20 backdrop-blur-sm shadow-lg">
              <Link href="#collections">
                View Collections
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-3 gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <stat.icon className="h-16 w-16 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary mb-3">{stat.value}</div>
                <div className="text-xl text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-20 bg-background">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-headline tracking-tight text-primary mb-6">Timeless Elegance, Modern Grace</h2>
            <p className="max-w-4xl mx-auto text-xl text-muted-foreground leading-relaxed">
              At Dulhan Exclusives, we believe every bride deserves to feel like royalty. Our collections are a tribute to the rich heritage of bridal couture, designed for the contemporary woman.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image 
                  src="/images/free-photo-of-elegant-traditional-indian-bridal-portrait.jpeg" 
                  alt="Elegant traditional Indian bridal portrait" 
                  width={600}
                  height={800}
                  className="object-cover aspect-[3/4] transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint="traditional bridal portrait"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-center">Bridal Collection</h3>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image 
                  src="/images/Two-Bridal-Indian-Models-with-Traditional-Dress-and-Jewelry-23043-pixahive.jpg" 
                  alt="Two bridal Indian models with traditional dress and jewelry" 
                  width={600}
                  height={800}
                  className="object-cover aspect-[3/4] transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint="bridal models traditional dress"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-center">Wedding Wear</h3>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image 
                  src="/images/unnamed.webp" 
                  alt="Bridal outfit fabric" 
                  width={600}
                  height={800}
                  className="object-cover aspect-[3/4] transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint="wedding dress fabric"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-center">Designer Pieces</h3>
            </div>
          </div>
        </div>
      </section>

      {/* New Extended Collections Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-headline tracking-tight text-primary mb-6">Discover Our Latest Creations</h2>
            <p className="max-w-4xl mx-auto text-xl text-muted-foreground leading-relaxed">
              From runway glamour to exclusive designer pieces, explore our newest collections that blend contemporary trends with timeless Indian elegance. Each piece tells a story of craftsmanship and beauty.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {/* Image 4 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image 
                  src="/images/2024-04-15.webp" 
                  alt="Bridal fashion collection" 
                  width={600}
                  height={800}
                  className="object-cover aspect-[3/4] transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint="bridal fashion collection"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-center">Fashion Collection</h3>
            </div>

            {/* Image 5 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image 
                  src="/images/2024-09-09.webp" 
                  alt="Exclusive bridal designs" 
                  width={600}
                  height={800}
                  className="object-cover aspect-[3/4] transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint="exclusive bridal designs"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-center">Exclusive Designs</h3>
            </div>

            {/* Image 6 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image 
                  src="/images/Screenshot 2022-12-29 at 6.06.10 am.webp" 
                  alt="Bridal jewelry and accessories" 
                  width={600}
                  height={800}
                  className="object-cover aspect-[3/4] transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint="bridal jewelry accessories"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-center">Jewelry & Accessories</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-headline tracking-tight mb-6">Get In Touch</h2>
            <p className="max-w-4xl mx-auto text-xl leading-relaxed opacity-90">
              Ready to start your bridal journey? Contact us today to schedule your consultation and discover the perfect ensemble for your special day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Appointment Information */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-6">Appointment Information</h3>
              <div className="space-y-4 text-lg">
                <p>Our expert stylists are here to help you find the perfect bridal ensemble. Book a personalized consultation to discuss your vision, preferences, and requirements.</p>
                <Button asChild size="lg" variant="secondary" className="text-primary w-full lg:w-auto h-14 text-lg">
                  <Link href="tel:+61411106106">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: +61 411 106 106
                  </Link>
                </Button>
              </div>
            </div>

            {/* Our Address */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-6">Our Address</h3>
              <div className="space-y-4 text-lg">
                <p>Experience our collections in person at our beautiful showroom in Liverpool, NSW.</p>
                <div className="space-y-2">
                  <p>Shop 1/240 George St</p>
                  <p>Liverpool NSW 2170, Australia</p>
                </div>
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  <Phone className="w-5 h-5" />
                  <Link href="tel:+61411106106" className="hover:text-primary-foreground/80 transition-colors">
                    +61 411 106 106
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Address Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-headline tracking-tight text-primary mb-6">Visit Our Showroom</h2>
            <p className="max-w-4xl mx-auto text-xl text-muted-foreground leading-relaxed">
              Experience our bridal collections in person at our beautiful showroom. Located in the heart of Liverpool, NSW, our showroom offers a warm and welcoming environment where you can explore our designs and receive personalized consultation.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Google Maps Embed */}
            <div className="relative mb-8">
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5!2d150.925!3d-33.925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb3b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sShop+1%2F240+George+St%2C+Liverpool+NSW+2170%2C+Australia!5e0!3m2!1sen!2sau!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dulhan Exclusives Showroom Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 text-lg">
                <Link 
                  href="https://maps.google.com/?q=Shop+1/240+George+St,+Liverpool+NSW+2170,+Australia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  View on Google Maps
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="h-14 text-lg">
                <Link href="tel:+61411106106">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Directions
                </Link>
              </Button>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-2">Interactive map showing our showroom location</p>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <span>📍</span>
                <span>Free parking available</span>
                <span>•</span>
                <span>Near Liverpool Station</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-headline tracking-tight text-primary mb-6">Follow Us</h2>
            <p className="max-w-4xl mx-auto text-xl text-muted-foreground leading-relaxed">
              Stay updated with our latest collections and exclusive offers. Follow us on social media for inspiration and behind-the-scenes glimpses.
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