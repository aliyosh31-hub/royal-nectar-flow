import React from 'react';
import { Zap, Heart, Shield, Sparkles } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Energy Boost',
      description: 'Natural energy enhancement that lasts throughout the day without crashes.'
    },
    {
      icon: Heart,
      title: 'Vitality Support',
      description: 'Supports overall vitality and helps maintain healthy energy levels.'
    },
    {
      icon: Shield,
      title: 'Immunity Boost',
      description: 'Rich in antioxidants and nutrients that support immune system function.'
    },
    {
      icon: Sparkles,
      title: 'Premium Quality',
      description: 'Carefully sourced and processed to maintain the highest quality standards.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/50 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            Benefits of Royal Honey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the natural power of royal honey and how it can enhance your daily wellness routine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 shadow-golden group-hover:shadow-glow transition-shadow duration-300">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;