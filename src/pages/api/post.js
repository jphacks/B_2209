import prisma from '../../../lib/prisma';

// POST /api/post
// Required fields in body: title, authorEmail
// Optional fields in body: content
export default async function handle(req, res) {
  const { account, icon } = req.body;
  console.log('account:', account, 'icon:', icon);
  const result = await prisma.user.create({
    data: {
      account: account,
      name: 'hoge',
      icon: icon,
      posts: {
        create: [
          {
            category: 'image',
            content: 'hello.jpg',
          },
        ],
      },
    },
  });
  res.json(result);
}
