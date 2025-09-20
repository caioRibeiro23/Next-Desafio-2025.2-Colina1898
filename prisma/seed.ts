import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      title: 'Wireless Mouse',
      description: 'A smooth and responsive wireless mouse.',
      price: 29.99,
      summary: 'A smooth and responsive wireless mouse.',
      image: 'https://example.com/images/wireless-mouse.jpg',
      type: 'Electronics',
    },
    {
      title: 'Mechanical Keyboard',
      description: 'A durable mechanical keyboard with RGB lighting.',
      summary: 'A durable mechanical keyboard with RGB lighting.',
      image: 'https://example.com/images/mechanical-keyboard.jpg',
      type: 'Electronics',
      price: 89.99,
    },
    {
      title: 'Noise Cancelling Headphones',
      description: 'Comfortable headphones with active noise cancelling.',
      summary: 'Comfortable headphones with active noise cancelling.',
      image: 'https://example.com/images/noise-cancelling-headphones.jpg',
      type: 'Electronics',
      price: 199.99,
    },
    {
      title: '4K Monitor',
      description: 'A high-resolution 4K monitor for professional use.',
      summary: 'A high-resolution 4K monitor for professional use.',
      image: 'https://example.com/images/4k-monitor.jpg',
      type: 'Electronics',
      price: 399.99,
    },
    {
      title: 'USB-C Hub',
      description: 'A versatile USB-C hub with multiple ports.',
      summary: 'A versatile USB-C hub with multiple ports.',
      image: 'https://example.com/images/usb-c-hub.jpg',
      type: 'Electronics',
      price: 49.99,
    },
    {
      title: 'Portable SSD',
      description: 'A fast and portable SSD with 1TB capacity.',
      summary: 'A fast and portable SSD with 1TB capacity.',
      image: 'https://example.com/images/portable-ssd.jpg',
      type: 'Electronics',
      price: 129.99,
    },
    {
      title: 'Bluetooth Speaker',
      description: 'A compact Bluetooth speaker with excellent sound quality.',
      summary: 'A compact Bluetooth speaker with excellent sound quality.',
      image: 'https://example.com/images/bluetooth-speaker.jpg',
      type: 'Electronics',
      price: 59.99,
    },
    {
      title: 'Smartwatch',
      description: 'A stylish smartwatch with fitness tracking features.',
      summary: 'A stylish smartwatch with fitness tracking features.',
      image: 'https://example.com/images/smartwatch.jpg',
      type: 'Electronics',
      price: 149.99,
    },
    {
      title: 'Gaming Chair',
      description: 'An ergonomic gaming chair with lumbar support.',
      summary: 'An ergonomic gaming chair with lumbar support.',
      image: 'https://example.com/images/gaming-chair.jpg',
      type: 'Furniture',
      price: 249.99,
    },
    {
      title: 'Webcam',
      description: 'A high-definition webcam for video conferencing.',
      summary: 'A high-definition webcam for video conferencing.',
      image: 'https://example.com/images/webcam.jpg',
      type: 'Electronics',
      price: 79.99,
    },
  ];

  for (const product of products) {
    await prisma.produto.create({
      data: product,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });