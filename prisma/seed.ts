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
    title: 'Jaqueta Retrô Colina 98',
    description: 'Uma homenagem à tradição e glória de 1898. Feita com tecido premium, a Jaqueta Retrô Colina 98 resgata a elegância dos uniformes históricos. Detalhes bordados e acabamento impecável para o torcedor que valoriza cada momento da história do clube.',
    price: 250.00,
    summary: 'Design clássico que remete às origens do clube, com acabamento de alta qualidade.',
    principalImage: '/produtos/jaqueta-retro.png',
    secondaryImages: [
      '/produtos/secundarias/jaqueta-retro-1.png',
      '/produtos/secundarias/jaqueta-retro-2.png',
      '/produtos/secundarias/jaqueta-retro-3.png',
    ],
    type: TipoProduto.VESTUARIO
  },
  {
    title: 'Caneca Colina 1898',
    description: 'Celebre cada momento com a Caneca Colina 1898. Resistente, com design exclusivo e a estampa do brasão do clube. Perfeita para o café da manhã ou para a coleção, mostrando o seu orgulho em cada gole.',
    price: 49.90,
    summary: 'Caneca exclusiva com o brasão do clube, ideal para colecionadores e torcedores.',
    principalImage: '/produtos/caneca.png',
    secondaryImages: [
      '/produtos/secundarias/caneca-1.png',
      '/produtos/secundarias/caneca-2.png',
      '/produtos/secundarias/caneca-3.png',
    ],
    type: TipoProduto.OBJETO
  },
  {
    title: 'Moletom com Capuz Colina',
    description: 'O Moletom Colina é a escolha perfeita para os dias frios. Confortável, estiloso e com o brasão do clube em destaque. Demonstre sua paixão em qualquer lugar, com o conforto e a qualidade que você merece.',
    price: 180.50,
    summary: 'Conforto e estilo para os dias frios, com o brasão do clube em destaque.',
    principalImage: '/produtos/moletom.png',
    secondaryImages: [
      '/produtos/secundarias/moletom-1.png',
      '/produtos/secundarias/moletom-2.png',
      '/produtos/secundarias/moletom-3.png',
    ],
    type: TipoProduto.VESTUARIO
  },
  {
    title: 'Boné Clássico do Clube',
    description: 'Um acessório indispensável para qualquer torcedor. O Boné Clássico do Clube tem bordado de alta precisão e se ajusta perfeitamente. Proteja-se do sol e mostre sua paixão em grande estilo.',
    price: 75.00,
    summary: 'Boné ajustável com bordado do clube, ideal para proteger do sol.',
    principalImage: '/produtos/bone.png',
    secondaryImages: [
      '/produtos/secundarias/bone-1.png',
      '/produtos/secundarias/bone-2.png',
      '/produtos/secundarias/bone-3.png',
    ],
    type: TipoProduto.OBJETO
  },
  {
    title: 'Kit de Chaveiros da Equipe',
    description: 'Leve a paixão do seu clube para todos os lugares. O Kit de Chaveiros da Equipe inclui réplicas do escudo e dos mascotes. Feitos com material resistente, são perfeitos para presentear ou colecionar.',
    price: 35.00,
    summary: 'Réplicas do escudo e mascotes em um kit de chaveiros perfeito para colecionar.',
    principalImage: '/produtos/chaveiro.png',
    secondaryImages: [
      '/produtos/secundarias/chaveiro-1.png',
      '/produtos/secundarias/chaveiro-2.png',
      '/produtos/secundarias/chaveiro-3.png',
    ],
    type: TipoProduto.OBJETO
  },
  {
    title: 'Camisa Treino Oficial 2025',
    description: 'Conforto e desempenho com a Camisa de Treino Oficial 2025. O mesmo design e tecnologia que os atletas usam nos treinos. Leve, respirável e ideal para a prática de esportes ou para o dia a dia, mostrando o seu apoio incondicional.',
    price: 219.99,
    summary: 'Tecnologia e design utilizados pelos atletas nos treinos, garantindo conforto e performance.',
    principalImage: '/produtos/camisa-treino.png',
    secondaryImages: [
      '/produtos/secundarias/camisa-treino-1.png',
      '/produtos/secundarias/camisa-treino-2.png',
      '/produtos/secundarias/camisa-treino-3.png',
    ],
    type: TipoProduto.VESTUARIO
  },
  {
    title: 'Mochila de Viagem Grande',
    description: 'A Mochila de Viagem Grande é perfeita para viagens ou para a rotina. Ampla, resistente e com compartimentos para todos os seus pertences. Carregue o brasão do seu time para todos os lugares.',
    price: 299.00,
    summary: 'Mochila espaçosa e resistente, ideal para viagens ou uso diário.',
    principalImage: '/produtos/mochila.png',
    secondaryImages: [
      '/produtos/secundarias/mochila-1.png',
      '/produtos/secundarias/mochila-2.png',
      '/produtos/secundarias/mochila-3.png',
    ],
    type: TipoProduto.OBJETO
  },
  {
    title: 'Agasalho Masculino Oficial',
    description: 'O Agasalho Oficial Masculino combina estilo e conforto. Feito para torcer nas arquibancadas ou para o dia a dia. Material leve e resistente que acompanha a sua paixão em qualquer estação.',
    price: 350.00,
    summary: 'Conjunto completo de agasalho oficial, com design moderno e confortável.',
    principalImage: '/produtos/agasalho.png',
    secondaryImages: [
      '/produtos/secundarias/agasalho-1.png',
      '/produtos/secundarias/agasalho-2.png',
      '/produtos/secundarias/agasalho-3.png',
    ],
    type: TipoProduto.VESTUARIO
  },
  {
    title: 'Copo Térmico Edição Especial',
    description: 'Mantenha sua bebida favorita na temperatura ideal com o Copo Térmico Edição Especial. Design elegante e o escudo do clube em destaque. Perfeito para o escritório, para a academia ou para o estádio.',
    price: 99.90,
    summary: 'Copo térmico com design exclusivo, que mantém a temperatura por horas.',
    principalImage: '/produtos/copo-termico.png',
    secondaryImages: [
      '/produtos/secundarias/copo-termico-1.png',
      '/produtos/secundarias/copo-termico-2.png',
      '/produtos/secundarias/copo-termico-3.png',
    ],
    type: TipoProduto.OBJETO
  },
  {
    title: 'Meião de Jogo Profissional',
    description: 'Meião de Jogo Profissional, o mesmo usado pelos jogadores. Confortável, com tecnologia antitranspirante e design que se ajusta perfeitamente aos pés. Indispensável para completar o uniforme.',
    price: 55.00,
    summary: 'Meião de jogo com tecnologia profissional, ideal para o esporte ou para uso casual.',
    principalImage: '/produtos/meiao.png',
    secondaryImages: [
      '/produtos/secundarias/meiao-1.png',
      '/produtos/secundarias/meiao-2.png',
      '/produtos/secundarias/meiao-3.png',
    ],
    type: TipoProduto.VESTUARIO
  },
  {
    title: 'Bolsa Tiracolo Oficial',
    description: 'Prática e estilosa, a Bolsa Tiracolo Oficial é ideal para carregar seus itens essenciais com segurança e conforto. Design compacto com o brasão do clube para demonstrar sua paixão.',
    price: 150.00,
    summary: 'Bolsa compacta e versátil para carregar itens essenciais com estilo.',
    principalImage: '/produtos/bolsa-tiracolo.png',
    secondaryImages: [
      '/produtos/secundarias/bolsa-tiracolo-1.png',
      '/produtos/secundarias/bolsa-tiracolo-2.png',
      '/produtos/secundarias/bolsa-tiracolo-3.png',
    ],
    type: TipoProduto.OBJETO
  }
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