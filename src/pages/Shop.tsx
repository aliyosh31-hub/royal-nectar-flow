import React from 'react';
import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { products } from '@/data/products';

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary mb-6">
              Premium Royal Honey Shop
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our selection of premium royal honey products. 
              Each package is carefully crafted to deliver the highest quality and potency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16 p-8 bg-gradient-card rounded-2xl border border-border/50 text-center">
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">
              Why Choose Our Royal Honey?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-foreground mb-2">🌟 Premium Quality</h4>
                <p className="text-muted-foreground text-sm">
                  Sourced from the finest apiaries and processed with utmost care.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">🚚 Fast Shipping</h4>
                <p className="text-muted-foreground text-sm">
                  Free shipping on orders over $50. Quick and secure delivery.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">💯 Satisfaction Guaranteed</h4>
                <p className="text-muted-foreground text-sm">
                  30-day money-back guarantee if you're not completely satisfied.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;