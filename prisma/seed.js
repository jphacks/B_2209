const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const userData = [
  {
    name: 'Alice',
    email: 'alice@prisma.io',
    icon: 'pic1.jpg',
    posts: {
      create: [
        {
          category: 'image',
          content: 'hello.jpg',
        },
      ],
    },
  },
  {
    name: 'Nilu',
    email: 'nilu@prisma.io',
    icon: 'pic2.jpg',
    posts: {
      create: [
        {
          category: 'image',
          content: 'fish.jpg',
        },
      ],
    },
  },
  {
    name: 'Mahmoud',
    email: 'mahmoud@prisma.io',
    icon: 'pic3.jpg',
    posts: {
      create: [
        {
          category: 'text',
          content: 'nice to meet you',
        },
        {
          category: 'image',
          content: 'soccer.jpg',
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
