import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query", "error"] });

async function main() {
  await prisma.user.create({
    data: {
      email: "rizon1@gmail.com",
      name: "Rizon kumar 1"
    },
  });
}

main()
  .then(async () => {
    console.log("done with the query");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
