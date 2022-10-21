import prisma from '../../../lib/prisma';

// POST /api/post
// Required fields in body: title, authorEmail
// Optional fields in body: content

export default async function handle(req, res) {
  const get = await prisma.user.findMany();
  console.log(get);
  res.json(get);
}
