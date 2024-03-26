import { getRoom } from "@/data-access/rooms";

export default async function RoomPage(props:{ params: { roomId: string }}){
const roomid  = props.params.roomId;
const room = await getRoom(roomid);
return <div>{room?.name}</div>
}