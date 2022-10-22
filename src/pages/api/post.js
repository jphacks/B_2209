import prisma from '../../../lib/prisma';

// POST /api/post
// Required fields in body: userName, text, fileName
// Optional fields in body: content
export default async function handle(req, res) {
  const { account, icon, name } = req.body;
  console.log('account:', account, 'icon:', icon, 'name:', name);
  const result = await prisma.user.create({
    data: {
      account: account,
      name: name,
      icon: icon,
      posts: {
        create: [
          {
            category: 'image',
            content: name,
          },
        ],
      },
    },
  });
  res.json(result);
}
