-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_userId_fkey" FOREIGN KEY ("userId") REFERENCES "siteUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;
