import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // To extract all the Users
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  
  // To extract a single User
  const user = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      posts: true,
    },
  });

  console.log("All Users are", allUsers);
  console.log("Single User is", user);
};

main();
