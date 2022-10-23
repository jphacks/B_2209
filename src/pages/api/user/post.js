import prisma from '../../../../lib/prisma';

// POST /api/user/post
// Required fields in body: todo:後で記入
// Optional fields in body: todo:後で記入
export default async function handle(req, res) {
  const { account, text, icon } = req.body;
  console.log('account:', account, 'text:', text, 'icon:', icon);
  const result = await prisma.user.create({
    data: {
      account: account,
      text: text,
      icon: icon,
      ar: {
        // create: [
        //   {
        //     category: 'image',
        //     content: icon,
        //   },
        //   {
        //     category: 'text',
        //     content: text,
        //   },
        // ],
      },
      friend: {},
    },
  });
  res.json(result);
}
