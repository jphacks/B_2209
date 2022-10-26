const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const userData = [
  {
    account: 'りんご',
    text: 'みかん',
    icon: 'ARdisplay/hiro.png',
    ar: {
      create: [
        {
          category: 'image',
          content: 'ARdisplay/hiro.png',
        },
        {
          category: 'text',
          content: 'よろしく',
        },
      ],
    },
  },
  {
    account: 'もも',
    text: 'なし',
    icon: 'ARdisplay/kanji.png',
    ar: {
      create: [
        {
          category: 'image',
          content: 'ARdisplay/hiro.png',
        },
        {
          category: 'image',
          content: 'ARdisplay/kanji.png',
        },
        {
          category: 'text',
          content: 'よろしく',
        },
        {
          category: 'text',
          content: 'お願いします',
        },
      ],
    },
  },
  {
    account: 'さくらんぼ',
    text: 'かき',
    icon: 'ARdisplay/letterA.png',
    ar: {
      create: [
        {
          category: 'image',
          content: 'ARdisplay/letterA.png',
        },
        {
          category: 'image',
          content: 'ARdisplay/letterB.png',
        },
        {
          category: 'image',
          content: 'ARdisplay/letterC.png',
        },
        {
          category: 'text',
          content: 'どうぞ',
        },
        {
          category: 'text',
          content: 'よろしく',
        },
        {
          category: 'text',
          content: 'おねがいします',
        },
      ],
    },
  },
  {
    account: 'ぶどう',
    text: 'いちご',
    icon: 'ARdisplay/letterB.png',
    ar: {
      create: [
        {
          category: 'image',
          content: 'ARdisplay/letterA.png',
        },
        {
          category: 'image',
          content: 'ARdisplay/letterB.png',
        },
        {
          category: 'image',
          content: 'ARdisplay/letterC.png',
        },
        {
          category: 'image',
          content: 'ARdisplay/letterD.png',
        },
        {
          category: 'text',
          content: 'どうぞ',
        },
        {
          category: 'text',
          content: 'よろしく',
        },
        {
          category: 'text',
          content: 'おねがい',
        },
        {
          category: 'text',
          content: 'します',
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
