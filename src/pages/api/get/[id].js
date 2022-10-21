import prisma from '../../../../lib/prisma';

// GET /api/get/:id
export default async function handle(req, res) {
  const postId = req.query.id;
  const resultPosts = await prisma.user.findMany({
    where: {
      id: Number(postId),
    },
  });
  res.json(resultPosts);
}
