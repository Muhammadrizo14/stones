/*
  Warnings:

  - Made the column `title` on table `Services` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Services` MODIFY `title` VARCHAR(191) NOT NULL;
