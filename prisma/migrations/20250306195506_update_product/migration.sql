/*
  Warnings:

  - You are about to drop the column `notes` on the `StockLog` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `StockLog` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `StockLog` DROP FOREIGN KEY `StockLog_userId_fkey`;

-- DropIndex
DROP INDEX `StockLog_userId_fkey` ON `StockLog`;

-- AlterTable
ALTER TABLE `StockLog` DROP COLUMN `notes`,
    DROP COLUMN `userId`;
