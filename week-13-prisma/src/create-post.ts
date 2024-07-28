import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log: ['info', 'query', 'error']});

async function main() {
  await prisma.post.create({
    data: {
      title: "Title of the POST",
      content: "This is the content of the post",
      published: true,
      author: {
        connect: {
            id: 1
        }
      }
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
