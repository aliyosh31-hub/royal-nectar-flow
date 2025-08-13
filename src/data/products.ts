import { Product } from '@/contexts/CartContext';
import honeyBox from '@/assets/honey-box.jpg';
import honeyPacket from '@/assets/honey-packet.jpg';
import honeyBundle3 from '@/assets/honey-bundle-3.jpg';
import honeyBundle6 from '@/assets/honey-bundle-6.jpg';

export const products: Product[] = [
  {
    id: 'box-12',
    name: 'Royal Honey Box',
    price: 20,
    image: honeyBox,
    description: 'Premium box containing 12 packets of pure royal honey. Perfect for regular consumption and best value for money.',
    type: 'box'
  },
  {
    id: 'single-packet',
    name: 'Single Honey Packet',
    price: 4,
    image: honeyPacket,
    description: 'Single packet of royal honey. Perfect for trying our premium honey or occasional use.',
    type: 'single'
  },
  {
    id: 'bundle-3',
    name: '3-Packet Bundle',
    price: 10,
    image: honeyBundle3,
    description: 'Bundle of 3 royal honey packets. Great starter pack with savings compared to individual packets.',
    type: 'bundle-3'
  },
  {
    id: 'bundle-6',
    name: '6-Packet Bundle',
    price: 18,
    image: honeyBundle6,
    description: 'Bundle of 6 royal honey packets. Excellent value for regular users with significant savings.',
    type: 'bundle-6'
  }
];