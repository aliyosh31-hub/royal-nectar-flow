import React from 'react';
import { Button } from '@/components/ui/button';
import { useCart, Product } from '@/contexts/CartContext';
import { ShoppingCart, Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="product-card group">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="space-y-4">
        <h3 className="font-heading text-xl font-semibold text-foreground">
          {product.name}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-heading text-2xl font-bold text-primary">
            ${product.price}
          </span>
          
          <Button
            onClick={handleAddToCart}
            className="golden-glow bg-gradient-primary hover:bg-gradient-to-r hover:from-primary-glow hover:to-secondary text-primary-foreground"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>

        {/* Special badges for bundles */}
        {product.type === 'bundle-3' && (
          <div className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-semibold">
            Save $2!
          </div>
        )}
        {product.type === 'bundle-6' && (
          <div className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-semibold">
            Save $6!
          </div>
        )}
        {product.type === 'box' && (
          <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-semibold">
            Best Value!
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;