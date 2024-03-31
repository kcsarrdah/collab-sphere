import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TagsList } from "@/components/tags-list";
import { splitTags } from "@/lib/utils";
import { Link2 } from "lucide-react";
import Link from "next/link";
import { Room } from "@/db/schema";
import { Button } from "@/components/ui/button";

export function RoomCard({ room }: { room: Room }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <TagsList tags={splitTags(room.topic)} />
        {room.links && (
          <Link
            href={room.links}
            className="flex items-center gap-2"
            target="blank"
            rel="noopener noreferrer"
          >
            <Link2 />
            Link
          </Link>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/rooms/${room.id}`}>Join Room</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
