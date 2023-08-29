/*
  Warnings:

  - A unique constraint covering the columns `[filename]` on the table `Services` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fieldname` to the `Services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filename` to the `Services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `path` to the `Services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Services` ADD COLUMN `fieldname` VARCHAR(191) NOT NULL,
    ADD COLUMN `filename` VARCHAR(191) NOT NULL,
    ADD COLUMN `path` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Services_filename_key` ON `Services`(`filename`);
