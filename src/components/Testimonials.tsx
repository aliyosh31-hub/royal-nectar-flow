import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Amazing quality! I\'ve been using royal honey for 3 months and feel more energetic than ever. The taste is absolutely divine.',
      location: 'California, USA'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Best investment for my health. The packaging is premium and the honey quality is exceptional. Highly recommend the 6-packet bundle.',
      location: 'New York, USA'
    },
    {
      name: 'Emma Williams',
      rating: 5,
      text: 'I was skeptical at first, but this royal honey has genuinely improved my daily energy levels. Fast shipping and great customer service.',
      location: 'Texas, USA'
    },
    {
      name: 'David Rodriguez',
      rating: 5,
      text: 'Pure gold in a packet! The quality speaks for itself. I\'ve tried other brands but nothing compares to this royal honey.',
      location: 'Florida, USA'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Real reviews from satisfied customers who've experienced the benefits of our royal honey.
          </p>
        </div>

        <div className="relative">
          <div className="testimonial-card text-center min-h-[300px] flex flex-col justify-center">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-primary fill-primary" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            <div className="space-y-2">
              <p className="font-heading text-lg font-semibold text-primary">
                {testimonials[currentTestimonial].name}
              </p>
              <p className="text-muted-foreground">
                {testimonials[currentTestimonial].location}
              </p>
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 golden-glow"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 golden-glow"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;