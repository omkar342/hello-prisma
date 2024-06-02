import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // To update a single User

  const updatedUser = await prisma.user.update({
    where: {
      email: "john@prisma.io"
    },
    data: {
      name: "John Jadhav",
    },
  });

  console.log("User Updated!", updatedUser);
  
};

main();
