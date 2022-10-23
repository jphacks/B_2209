import prisma from '../../../../../../lib/prisma';

// GET /api/ar/image/get
// Required fields in body: todo:記入
// Optional fields in body: todo:記入

export default async function handle(req, res) {
  const get = await prisma.ar.findMany({
    where: { category: 'text' },
  });
  console.log(get);
  res.json(get);
}
