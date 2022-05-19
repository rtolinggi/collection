/*
  Warnings:

  - You are about to drop the `Verified_Email` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Verified_Email" DROP CONSTRAINT "Verified_Email_userId_fkey";

-- DropTable
DROP TABLE "Verified_Email";

-- CreateTable
CREATE TABLE "VerifiedEmail" (
    "userId" TEXT NOT NULL,
    "token" TEXT,
    "expire" INTEGER NOT NULL DEFAULT 3600
);

-- CreateIndex
CREATE UNIQUE INDEX "VerifiedEmail_userId_key" ON "VerifiedEmail"("userId");

-- AddForeignKey
ALTER TABLE "VerifiedEmail" ADD CONSTRAINT "VerifiedEmail_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
