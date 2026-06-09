"use client";

import { useEffect, useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectDetailDialog } from "@/components/project-detail-dialog";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/data/resume";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogOrigin, setDialogOrigin] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!isDialogOpen && selectedProject) {
      const timeout = window.setTimeout(() => {
        setSelectedProject(null);
        setDialogOrigin(null);
      }, 220);

      return () => window.clearTimeout(timeout);
    }
  }, [isDialogOpen, selectedProject]);

  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Selected Projects</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Production systems I helped build
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Selected portfolio work across logistics, agriculture, healthcare, internal platforms, and mobile products from my professional roles.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              className="h-full"
            >
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                links={project.links}
                onOpenDetail={(rect) => {
                  setDialogOrigin({
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2,
                  });
                  setSelectedProject(project);
                  setIsDialogOpen(true);
                }}
              />
            </BlurFade>
          ))}
        </div>
      </div>

      <ProjectDetailDialog
        project={selectedProject}
        open={isDialogOpen}
        origin={dialogOrigin}
        onOpenChange={setIsDialogOpen}
      />
    </section>
  );
}
