import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const workout = await prisma.workout.create({
    data: {
      name: "Full Body HIIT",
      description: "A high-intensity full-body workout.",
      exercises: {
        create: [
          { name: "Jump Squats", duration: 45, rest: 15, sets: 3 },
          { name: "Push-ups", duration: 30, rest: 10, sets: 3 },
          { name: "Burpees", duration: 40, rest: 20, sets: 3 },
        ],
      },
    },
  });

  console.log("Seeded:", workout);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
