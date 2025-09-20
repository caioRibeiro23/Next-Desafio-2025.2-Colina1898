import { PrismaClient, TipoProduto } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      title: 'Camisa Masculina Home Player 2025',
      description: 'Sinta a emoção do seu time do coração com a Camisa Masculina Home Player 2025. Com design inovador e tecnologia de ponta, esta é a mesma camisa utilizada pelos jogadores em campo. Vista a paixão do seu time e celebre suas conquistas. Feita com materiais de alta qualidade para garantir conforto e desempenho, é a escolha ideal para torcer ou para o dia a dia',
      price: 399.99,
      summary: 'Com design inovador e tecnologia de ponta, esta é a mesma camisa utilizada pelos jogadores em campo.',
      principalImage: '/produtos/camisa-I.png',
      secondaryImages: [ 
        '/produtos/secundarias/secundaria1.png',
        '/produtos/secundarias/secundaria2.png',
        '/produtos/secundarias/secundaria3.png',
      ],
      type: TipoProduto.VESTUARIO
    },
    {
      title: 'Mechanical Keyboard',
      description: 'A durable mechanical keyboard with RGB lighting.',
      summary: 'A durable mechanical keyboard with RGB lighting.',
      principalImage: 'https://example.com/images/mechanical-keyboard.jpg',
      secondaryImages: [], 
      type: TipoProduto.OBJETO,
      price: 89.99,
    },
    {
      title: 'Noise Cancelling Headphones',
      description: 'Comfortable headphones with active noise cancelling.',
      summary: 'Comfortable headphones with active noise cancelling.',
      principalImage: 'https://example.com/images/noise-cancelling-headphones.jpg',
      secondaryImages: [],
      type: TipoProduto.OBJETO,
      price: 199.99,
    },
    {
      title: '4K Monitor',
      description: 'A high-resolution 4K monitor for professional use.',
      summary: 'A high-resolution 4K monitor for professional use.',
      principalImage: 'https://example.com/images/4k-monitor.jpg',
      secondaryImages: [],
      type: TipoProduto.OBJETO,
      price: 399.99,
    },
    {
      title: 'USB-C Hub',
      description: 'A versatile USB-C hub with multiple ports.',
      summary: 'A versatile USB-C hub with multiple ports.',
      principalImage: 'https://example.com/images/usb-c-hub.jpg',
      secondaryImages: [],
      type: TipoProduto.OBJETO,
      price: 49.99,
    },
    {
      title: 'Portable SSD',
      description: 'A fast and portable SSD with 1TB capacity.',
      summary: 'A fast and portable SSD with 1TB capacity.',
      principalImage: 'https://example.com/images/portable-ssd.jpg',
      secondaryImages: [],
      type: TipoProduto.OBJETO,
      price: 129.99,
    },
    {
      title: 'Bluetooth Speaker',
      description: 'A compact Bluetooth speaker with excellent sound quality.',
      summary: 'A compact Bluetooth speaker with excellent sound quality.',
      principalImage: 'https://example.com/images/bluetooth-speaker.jpg',
      secondaryImages: [],
      type: TipoProduto.OBJETO,
      price: 59.99,
    },
    {
      title: 'Smartwatch',
      description: 'A stylish smartwatch with fitness tracking features.',
      summary: 'A stylish smartwatch with fitness tracking features.',
      principalImage: 'https://example.com/images/smartwatch.jpg',
      secondaryImages: [],
      type: TipoProduto.OBJETO,
      price: 149.99,
    },
    {
      title: 'Gaming Chair',
      description: 'An ergonomic gaming chair with lumbar support.',
      summary: 'An ergonomic gaming chair with lumbar support.',
      principalImage: 'https://example.com/images/gaming-chair.jpg',
      secondaryImages: [],
      type: TipoProduto.OBJETO,
      price: 249.99,
    },
    {
      title: 'Webcam',
      description: 'A high-definition webcam for video conferencing.',
      summary: 'A high-definition webcam for video conferencing.',
      principalImage: 'https://example.com/images/webcam.jpg',
      secondaryImages: [],
      type: TipoProduto.OBJETO,
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