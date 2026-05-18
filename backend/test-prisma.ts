import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './generated/prisma/client.js';

console.log('Testing prisma initialization...');
try {
  const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL
  } as any);
  const prisma = new PrismaClient({ adapter });
  console.log('Prisma initialized', typeof prisma);
} catch (err) {
  console.error('Error:', err);
}
