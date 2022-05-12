import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      username: "rtolinggi",
      email: "elsa@prisma.io",
      password: "pasSword@123",
      refreshToken: null,
      profil: {
        create: {
          nik: 96512,
          name: "Rio RIchard Tolinggi",
          address: "Lingkungan III. Kel. Paal IV",
          age: 30,
          joinDate: null,
          resignDate: null,
          bucket: "1-30",
          noHp: "081351441899",
        },
      },
    },
  });
  console.log(user);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
