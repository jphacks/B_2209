import prisma from '../../../../lib/prisma';

// POST /api/user/count
// Required fields in body: todo:後で記入
// Optional fields in body: todo:後で記入
export default async function handle(req, res) {
  const userCount = await prisma.user.count();
  res.json(userCount);
}
