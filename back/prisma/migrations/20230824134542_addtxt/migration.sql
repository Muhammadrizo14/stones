/*
  Warnings:

  - Added the required column `destination` to the `Services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `encoding` to the `Services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mimetype` to the `Services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originalname` to the `Services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Services` ADD COLUMN `destination` VARCHAR(191) NOT NULL,
    ADD COLUMN `encoding` VARCHAR(191) NOT NULL,
    ADD COLUMN `mimetype` VARCHAR(191) NOT NULL,
    ADD COLUMN `originalname` VARCHAR(191) NOT NULL,
    ADD COLUMN `size` INTEGER NOT NULL;
