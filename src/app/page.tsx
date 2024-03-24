import { db } from "../db";

export default async function Home() {

  const rooms = await db.query.room.findMany({});

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        rooms.map((room) => (
          <div key={room.id} className="bg-white p-8 rounded-lg shadow-md w-96">
            <h2 className="text-xl text-gray-800 font-bold">{room.name}</h2>
            <p className="text-gray-500">{room.description}</p>
          </div>
        ))
      }
    </main>
  );
}
