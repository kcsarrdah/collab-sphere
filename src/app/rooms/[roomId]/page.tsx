import { getRoom } from "@/data-access/rooms";
import Link from "next/link";
import { Link2 } from "lucide-react";
import { TagsList } from "@/components/tags-list";
import { splitTags } from "@/lib/utils";
import CollabSphereVideoPlayer from "../../rooms/video-player"
import { unstable_noStore } from "next/cache";

export default async function RoomPage(props: { params: { roomId: string } }) {
  const roomid = props.params.roomId;
  unstable_noStore();
  const room = await getRoom(roomid);

  if (!room) return <div>Room with this id does not exist</div>;

  return (
    <div className="grid grid-cols-4 min-h-screen ">
      <div className="col-span-3 p-4 pr-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
          <CollabSphereVideoPlayer room={room} />
        </div>
      </div>
      <div className="col-span-1 p-4 pl-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4">
          <h1 className="text-base">{room?.name}</h1>
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
          <p className="text-base text-gray-600">{room?.description}</p>
          <h3>Tags</h3>
          <TagsList tags={splitTags(room.topic) } />
        </div>
      </div>
    </div>
  );
}
