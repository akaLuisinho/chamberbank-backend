/*
  Warnings:

  - You are about to drop the column `UserId` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `fromId` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toId` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_UserId_fkey";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "UserId",
ADD COLUMN     "fromId" TEXT NOT NULL,
ADD COLUMN     "toId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_toId_fkey" FOREIGN KEY ("toId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
