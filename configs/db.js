import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(query) {
  // Connect the client
  await prisma.$connect();
  // ... you will write your Prisma Client queries here
  console.log("Database is Connected");
  query;
}

const connectDB = () => {
  main()
    .catch((error) => {
      throw error;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
};

export default connectDB;
