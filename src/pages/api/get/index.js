import prisma from '../../../../lib/prisma';

// GET /api/get/
export default async function handle(req, res) {
  const postId = req.query.id;
  const resultPosts = await prisma.user.findMany();
  res.json(resultPosts);
}
