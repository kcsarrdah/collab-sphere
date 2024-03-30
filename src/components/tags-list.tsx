"use client";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function TagsList({ tags }: { tags: string[] }) {
  const router = useRouter();
  return (
    <div className="flex gap-2 flex-wrap">
      {tags.map((topic) => (
        <button className={cn(badgeVariants())} onClick={() => router.push(`/?search=${topic}`)}>
          {topic}
        </button>
      ))}
    </div>
  );
}
