import { Button } from "@/components/ui/button";
import { db } from "../../db";
import Link from "next/link";
import { getRooms } from "@/data-access/rooms";
import { SearchBar } from "./search-bar";
import { RoomCard } from "@/app/browse/room-card";
import { unstable_noStore } from "next/cache";
import Image from "next/image";

export default async function Home({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  unstable_noStore();
  const rooms = await getRooms(searchParams.search);

  return (
    <main className="min-h-screen p-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl">Find Rooms</h1>
        <Button asChild>
          <Link href="/create-room">Create Room</Link>
        </Button>
      </div>

      <SearchBar />

      <div className="grid grid-cols-3 gap-4">
        {rooms.map((room) => {
          return <RoomCard key={room.id} room={room} />;
        })}
        {rooms.length === 0 && (
          <div className="flex flex-col gap-4 justify-center items-center mt-24">
            <Image
              width="200"
              height="200"
              src="/empty.svg"
              alt="no data image"
            />
            <h2 className="text-2xl">No Rooms Yet, Create One</h2>

            <Button asChild>
              <Link href="/create-room">Create Room</Link>
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
