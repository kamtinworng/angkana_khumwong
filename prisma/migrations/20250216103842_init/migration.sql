-- CreateTable
CREATE TABLE "results" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "feedback" TEXT NOT NULL,

    CONSTRAINT "results_pkey" PRIMARY KEY ("id")
);
