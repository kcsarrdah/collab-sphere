import { unstable_noStore } from "next/cache";
import { db } from "../db";
import { eq } from "drizzle-orm";
import { room }from "../db/schema";
import {like} from "drizzle-orm";
  
export async function getRooms( search: string | undefined){
    unstable_noStore();
    const where  = search ? like(room.topic, `%${search}%`): undefined;
    const rooms = await db.query.room.findMany({
where
    });
    return rooms
}

export async function getRoom(roomId: string){
    unstable_noStore();

    return await db.query.room.findFirst({
        where: eq(room.id, roomId)
    });
}