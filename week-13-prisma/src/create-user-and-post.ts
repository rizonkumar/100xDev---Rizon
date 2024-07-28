import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query", "error"] });

async function main() {
  try {
    const user = await prisma.user.create({
      data: {
        email: "rizon1@gmail.com",
        name: "Rizon Kumar 1",
        posts: {
          create: [
            {
              title: "Rizon title1",
            },
            {
              title: "Rizon title2",
            },
          ],
        },
      },
    });
    console.log("User and posts created:", user);
  } catch (error) {
    console.error("Error creating user and posts:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(() => {
    console.log("Done with the query");
  })
  .catch((e) => {
    console.error("Main function error:", e);
    process.exit(1);
  });
