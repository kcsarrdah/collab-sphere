import { Badge } from "@/components/ui/badge";

export function splitTags(tags: string) {
    return tags.split(",").map((topic) => topic.trim());
}

 export function TagsList({ tags }: { tags: string[] }) {
   return (
    <div className="flex gap-2 flex-wrap">
    {tags.map((topic) => (
      <Badge className="w-fit" key={topic}>
        {topic}
      </Badge>
    ))}
    </div>
   );
 }