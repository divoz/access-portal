import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const users = [
  { email: 'priya@acme.test', name: 'Priya Shah' },
  { email: 'tom@acme.test', name: 'Tom Reyes' },
  { email: 'sam@acme.test', name: 'Sam Okafor' },
];

async function main() {
  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: { name: user.name },
      create: user,
    });
  }
  console.log(`Seeded ${users.length} users`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
