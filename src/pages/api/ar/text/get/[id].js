import prisma from '../../../../../../lib/prisma';

// GET /api/ar/image/get/:id
export default async function handle(req, res) {
  const getId = req.query.id;
  const get = await prisma.ar.findMany({
    where: { ownerId: Number(getId), category: 'text' },
  });
  res.json(get);
}
