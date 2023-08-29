/*
  Warnings:

  - You are about to drop the column `serviceTitle` on the `UploadedFile` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `UploadedFile` DROP FOREIGN KEY `UploadedFile_serviceTitle_fkey`;

-- DropIndex
DROP INDEX `Services_title_key` ON `Services`;

-- AlterTable
ALTER TABLE `UploadedFile` DROP COLUMN `serviceTitle`,
    ADD COLUMN `serviceId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `UploadedFile` ADD CONSTRAINT `UploadedFile_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Services`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
