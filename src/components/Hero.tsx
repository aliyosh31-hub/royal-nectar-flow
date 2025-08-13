import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-honey.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with honeycomb pattern */}
      <div className="absolute inset-0 honeycomb-bg"></div>
      
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium Royal Honey"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary drop-shadow-lg">
            Experience the Pure Power of
            <span className="block text-secondary">Royal Honey</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Discover nature's golden treasure, carefully sourced and packaged to bring you 
            the finest royal honey experience. Pure energy, vitality, and wellness in every drop.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Link to="/shop">
              <Button className="btn-hero text-lg px-8 py-6">
                Shop Now
              </Button>
            </Link>
            
            <Link to="/about">
              <Button className="btn-secondary text-lg px-8 py-6">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Floating honey drops animation */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full opacity-60 float-animation"></div>
          <div className="absolute top-32 right-24 w-3 h-3 bg-secondary rounded-full opacity-40 float-animation" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 left-32 w-5 h-5 bg-primary-glow rounded-full opacity-50 float-animation" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;