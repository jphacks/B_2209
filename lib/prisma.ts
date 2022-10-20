import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query', 'error', 'info', 'warn'],
  });

if (process.env.NODE_ENV === 'development') global.prisma = prisma;

export default prisma;
