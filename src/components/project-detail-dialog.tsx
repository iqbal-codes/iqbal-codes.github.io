"use client";

import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/data/resume";
import Markdown from "react-markdown";

interface Props {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  origin?: {
    x: number;
    y: number;
  } | null;
}

export function ProjectDetailDialog({ project, open, onOpenChange, origin }: Props) {
  if (!project) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-h-[90vh] max-w-2xl overflow-y-auto duration-300"
        style={{
          transformOrigin: origin ? `${origin.x}px ${origin.y}px` : "center center",
        }}
      >
        <DialogHeader className="space-y-2 text-left">
          <DialogTitle className="text-xl sm:text-2xl">{project.title}</DialogTitle>
          <DialogDescription>{project.dates}</DialogDescription>
        </DialogHeader>

        <div className="prose max-w-full text-sm leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{project.detailDescription ?? project.description}</Markdown>
        </div>

        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tag) => (
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

        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {project.links.map((link, idx) => (
              <a
                key={`${link.type}-${idx}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
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
      </DialogContent>
    </Dialog>
  );
}
