-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "location" TEXT,
ALTER COLUMN "name" DROP NOT NULL;
