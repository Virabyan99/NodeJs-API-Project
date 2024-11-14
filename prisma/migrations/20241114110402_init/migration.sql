/*
  Warnings:

  - You are about to drop the column `Published` on the `Book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "Published",
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false;
