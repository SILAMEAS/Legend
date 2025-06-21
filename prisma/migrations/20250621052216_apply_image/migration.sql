/*
  Warnings:

  - Added the required column `updatedAt` to the `Cinema` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Seat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Cinema` ADD COLUMN `image` VARCHAR(191) NOT NULL DEFAULT 'https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/40b6f7ed-db1c-4385-9192-22f2a004498d.png',
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Movie` ADD COLUMN `image` VARCHAR(191) NOT NULL DEFAULT 'https://plus.unsplash.com/premium_photo-1710409625244-e9ed7e98f67b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Seat` ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Ticket` ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `image` VARCHAR(191) NOT NULL DEFAULT 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
