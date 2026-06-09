"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";

interface Props {
  title: string;
  description: string;
  dates: string;
  tags: readonly string[];
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  onOpenDetail: (rect: DOMRect) => void;
}

export function ProjectCard({
  title,
  description,
  dates,
  tags,
  links,
  className,
  onOpenDetail,
}: Props) {
  return (
    <button
      type="button"
      onClick={(event) => onOpenDetail(event.currentTarget.getBoundingClientRect())}
      className={cn(
        "flex h-full w-full flex-col rounded-xl border border-border overflow-hidden p-6 text-left hover:ring-2 hover:ring-muted transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer",
        className
      )}
    >
      <div className="flex flex-col gap-3 flex-1">
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <a
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </a>
            ))}
          </div>
        )}
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          <span className="text-xs font-medium text-muted-foreground">View details</span>
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </button>
  );
}
