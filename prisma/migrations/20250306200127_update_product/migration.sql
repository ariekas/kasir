/*
  Warnings:

  - You are about to drop the `StockLog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `StockLog` DROP FOREIGN KEY `StockLog_productId_fkey`;

-- DropTable
DROP TABLE `StockLog`;
