import prisma from '../../../lib/prisma';

// POST /api/post
// Required fields in body: userName, text, fileName
// Optional fields in body: content
export default async function handle(req, res) {
  const { account, text, icon } = req.body;
  console.log('account:', account, 'text:', text, 'icon:', icon);
  const result = await prisma.user.create({
    data: {
      account: account,
      text: text,
      icon: icon,
      posts: {
        create: [
          {
            category: 'image',
            content: icon,
          },
        ],
      },
    },
  });
  res.json(result);
}
