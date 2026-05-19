import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import type { ComponentType, ReactNode, SVGProps } from "react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";

type Skill = {
  name: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  image?: string;
};

type Project = {
  title: string;
  href?: string;
  dates: string;
  active?: boolean;
  description: string;
  technologies: readonly string[];
  links?: readonly {
    icon: ReactNode;
    type: string;
    href: string;
  }[];
  image?: string;
  video?: string;
};

type Hackathon = {
  title: string;
  dates: string;
  location?: string;
  description: string;
  image?: string;
  mlh?: string;
  icon?: string;
  win?: string;
  links?: readonly {
    title: string;
    icon: ReactNode;
    href: string;
  }[];
};

const PROJECTS: Project[] = [];
const HACKATHONS: Hackathon[] = [];

export const DATA = {
  name: "Muhammad Iqbal",
  initials: "MI",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  location: "Bandung, Indonesia",
  locationLink: "https://www.google.com/maps/place/Bandung,+West+Java",
  description:
    "Senior Software Engineer building end-to-end web and mobile products, leveraging AI-native workflows to ship faster without sacrificing quality.",
  summary:
    "I’m a Senior Software Engineer with 7+ years of experience building production-grade web and mobile applications across logistics, healthcare, and internal business platforms. My background is strong in frontend engineering, but my work has grown into end-to-end product delivery, from user-facing systems to backend integrations, operational workflows, and release processes.\n\nToday, I focus on solving real business problems with pragmatic software. I use AI-native and agentic workflows to accelerate delivery, reduce manual effort, and improve engineering leverage, while staying grounded in solid architecture, testing, and production reliability.\n\nI care about building software that is maintainable, fast to evolve, and trusted in production.",
  avatarUrl: "/profile-photo.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Expo", image: "/expo-logo.png" },
    { name: "Node.js", icon: Nodejs },
    { name: "Astro", image: "/astro-logo.png" },
    { name: "shadcn/ui", image: "/shadcn-logo.png" },
    { name: "TanStack", image: "/tanstack-logo.png" },
    { name: "tRPC", image: "/trpc-logo.png" },
    { name: "GraphQL", image: "/graphql-logo.png" },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", image: "/docker-logo.png" },
    { name: "Turborepo", image: "/turborepo.png" },
    { name: "Jest", image: "/jest-logo.png" },
  ] satisfies Skill[],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "muhammadiqbalks2@gmail.com",
    tel: "+62 888-0230-9350",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/iqbal-codes",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/muhammad-iqbal23",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "http://instagram.com/muh_iqbal23",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:muhammadiqbalks2@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "PT Kaldu Sari Nabati Indonesia (KSNI)",
      href: "",
      badges: [],
      location: "Bandung, Indonesia",
      title: "Senior Frontend Engineer",
      logoUrl: "/nabati-logo.png",
      start: "Aug 2025",
      end: "Apr 2026",
      description:
        "Architected and developed DC Trans, an end-to-end shipment and order management system for vendor operations, driver tracking, and real-time logistics monitoring. Built vendor and driver applications with React, Vite, Expo, and React Native inside a Turborepo monorepo, improving consistency and reducing duplication. Led real-time shipment workflow implementation, expanded automated unit testing with AI-assisted workflows, and migrated legacy enterprise features into a micro-frontend architecture to improve maintainability and CI/CD performance.",
    },
    {
      company: "eFishery",
      href: "https://efishery.com",
      badges: [],
      location: "Bandung, Indonesia (Remote)",
      title: "Frontend Engineer",
      logoUrl: "/efishery-logo.jpeg",
      start: "Oct 2022",
      end: "Feb 2025",
      description:
        "Built and maintained five internal web platforms and one mobile application that supported the digitalization of operational workflows. Delivered production-grade applications with React, React Native, TypeScript, and multiple API integrations. Implemented CodePush updates to cut mobile deployment time by around 50%, introduced Jest and React Testing Library to push test coverage above 80%, and integrated Sentry while keeping production crash rates below 1%.",
    },
    {
      company: "Pertamedika IHC",
      href: "",
      badges: ["Contract"],
      location: "Jakarta, Indonesia (Remote)",
      title: "Lead Frontend Engineer",
      logoUrl: "/pertamedika-logo.png",
      start: "Sep 2020",
      end: "May 2023",
      description:
        "Led frontend development for a healthcare product from concept to production in close collaboration with stakeholders. Built reusable React component libraries that cut feature delivery time by roughly 50%, established coding standards and review practices, and improved maintainability and performance across healthcare workflows.",
    },
    {
      company: "Virtual Spirit",
      href: "",
      badges: [],
      location: "Malaysia (Remote)",
      title: "Frontend Engineer",
      logoUrl: "/vs-logo.jpeg",
      start: "Mar 2019",
      end: "Jul 2022",
      description:
        "Delivered web and mobile applications across multiple client projects with consistent on-time execution. Built user-friendly interfaces, improved application performance, and worked closely with cross-functional teams to ship scalable frontend solutions.",
    },
    {
      company: "Komers",
      href: "",
      badges: [],
      location: "Bandung, Indonesia",
      title: "Frontend Engineer",
      logoUrl: "/komers-logo.jpeg",
      start: "Aug 2018",
      end: "Mar 2019",
      description:
        "Joined as a founding engineer to help build an e-commerce platform with React.js and React Native. Developed core product flows including product listings, shopping cart, and payment integration, while contributing to the early architecture and product direction.",
    },
  ],
  education: [
    {
      school: "Bandung State Polytechnic (POLBAN)",
      href: "https://www.polban.ac.id",
      degree: "Associate Degree - Software Engineering",
      logoUrl: "/polban-logo.svg",
      start: "2015",
      end: "2018",
    },
  ],
  projects: PROJECTS,
  hackathons: HACKATHONS,
} as const;
