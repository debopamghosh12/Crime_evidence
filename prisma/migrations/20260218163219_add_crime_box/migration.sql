-- CreateTable
CREATE TABLE "CrimeBox" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "privateKey" TEXT NOT NULL,
    "publicKey" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT NOT NULL,
    CONSTRAINT "CrimeBox_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "CrimeBox_caseId_key" ON "CrimeBox"("caseId");

-- CreateIndex
CREATE UNIQUE INDEX "CrimeBox_privateKey_key" ON "CrimeBox"("privateKey");

-- CreateIndex
CREATE UNIQUE INDEX "CrimeBox_publicKey_key" ON "CrimeBox"("publicKey");
