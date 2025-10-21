import { prisma } from "./prisma";

// update credits
export async function updateUserCredits(userId: string, creditsChange: number) {
  const updateUsers = await prisma.user.update({
    where: { id: userId },
    data: { credits: { increment: creditsChange } },
  });
  if(updateUsers.credits < 0){
    throw new Error(`Insufficient credits`);
  }
}
