"use server";
import { getSession } from "@/lib/auth";

import { deleteRoom, getRoom } from "@/data-access/rooms";
import { revalidatePath } from "next/cache";

export async function deleteRoomAction(roomId: string) {
  //authenticate User
  const session = await getSession();

  if (!session) {
    throw new Error("User not authenticated");
  }

  //check if user created that room:
  const room = await getRoom(roomId);
  if (room?.userId !== session.user.id) {
    throw new Error("User not authorized to delete this room");
  }
  await deleteRoom(roomId);

  revalidatePath('/your-rooms')
}
