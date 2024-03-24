import { Button } from "@/components/ui/button";
import { db } from "../db";
import Link from "next/link";

export default async function Home() {

  const rooms = await db.query.room.findMany({});

  return (
    <main className="min-h-screen p-16">

      <div className="flex justify-between items-center">
      <h1 className="text-4xl">Find Rooms</h1>
      <Button asChild><Link href='/create-room'>Create Room</Link></Button>
      </div>

      {rooms.map((room) => (
          <div key={room.id} className="bg-white p-8 rounded-lg shadow-md w-96">
            <h2 className="text-xl text-gray-800 font-bold">{room.name}</h2>
            <p className="text-gray-500">{room.description}</p>
          </div>
        ))}
    </main>
  );
}
