import prisma from '../../../../../lib/prisma';

// GET /api/user/get
// Required fields in body: todo:記入
// Optional fields in body: todo:記入

export default async function handle(req, res) {
  const get = await prisma.user.findMany();
  console.log(get);
  res.json(get);
}
