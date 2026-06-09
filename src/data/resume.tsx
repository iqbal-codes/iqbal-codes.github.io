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

export type Project = {
  title: string;
  href?: string;
  dates: string;
  active?: boolean;
  description: string;
  detailDescription?: string;
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

const PROJECTS: Project[] = [
  {
    title: "DC Trans",
    dates: "Nabati · 2025 - 2026",
    description:
      "Built logistics dispatch system for booking order distribution, vendor tier allocation, timed re-broadcasting, and driver-based shipment tracking.",
    detailDescription:
      "Built a logistics dispatch system for booking order distribution, vendor tier allocation, timed re-broadcasting, and driver-based shipment tracking.\n\n### What I worked on\n- Built vendor-facing booking order workflows\n- Supported tier-based vendor access logic\n- Implemented time-based re-broadcast flow for unclaimed orders\n- Contributed to shipment tracking and driver update workflows\n- Integrated upstream order data into logistics operations\n\n### Key focus\nDesigned role-based flows for internal operations, vendors, and drivers while keeping order lifecycle and shipment progress clear across each user group.",
    technologies: [
      "React",
      "React Native",
      "TypeScript",
      "REST API",
      "Role-based UI",
      "Logistics Workflow",
    ],
  },
  {
    title: "Crowdver Tool",
    dates: "eFishery · 2022 - 2025",
    description:
      "Developed and maintained offline-first PWA for farmer verification orders in low-connectivity field environments.",
    detailDescription:
      "Developed and maintained a Progressive Web App for farmer verification orders used by field teams.\n\n### What I worked on\n- Built verification order management screens\n- Implemented offline-first behavior for unstable network conditions\n- Managed API data and caching for field workflows\n- Contributed to frontend testing and reliability\n\n### Key focus\nBalanced offline usability with API-based synchronization so field operators could continue working even with limited connectivity.",
    technologies: [
      "TypeScript",
      "Next.js",
      "RefineJS",
      "React Query",
      "Ant Design",
      "Jest",
      "PWA",
    ],
  },
  {
    title: "eFisheryku",
    dates: "eFishery · 2022 - 2025",
    description:
      "Developed membership app for selling commodities, buying feed, and applying for loans through Kabayan.",
    detailDescription:
      "Developed a membership app that enabled users to sell commodities, purchase feed, and apply for loans through the Kabayan feature.\n\n### What I worked on\n- Built customer-facing commerce and financing flows\n- Integrated GraphQL APIs into user journeys\n- Managed server and client state across multiple features\n- Added testing to improve frontend quality\n\n### Key focus\nHandled multiple product journeys in one app while keeping flows understandable for users with different intents: sell, buy, and apply.",
    technologies: [
      "TypeScript",
      "React",
      "Vite",
      "GraphQL",
      "React Query",
      "Zustand",
      "Jest",
    ],
  },
  {
    title: "Medinesia",
    dates: "Pertamedika IHC · 2020 - 2023",
    description:
      "Developed hospital information system for patient treatment records while improving legacy frontend performance and maintainability.",
    detailDescription:
      "Developed a hospital information system for managing patient treatment data and records.\n\n### What I worked on\n- Built healthcare workflow interfaces\n- Improved legacy React architecture and maintainability\n- Introduced reusable components and standards\n- Reduced build times and improved frontend performance\n\n### Key focus\nImproved an active legacy system without slowing product delivery, while raising consistency and developer experience across the frontend codebase.",
    technologies: [
      "JavaScript",
      "React",
      "React Query",
      "Redux",
      "Recoil",
      "Ant Design",
      "Styled Components",
    ],
  },
  {
    title: "SIRS Admin",
    dates: "Pertamedika IHC · 2020 - 2023",
    description:
      "Built healthcare admin application from scratch with reusable components and fast-delivery-oriented frontend patterns.",
    detailDescription:
      "Built a healthcare admin application from scratch using reusable components and frontend patterns focused on performance and maintainability.\n\n### What I worked on\n- Designed frontend structure from zero\n- Built reusable admin UI components\n- Integrated backend-driven admin workflows\n- Established development patterns for faster feature delivery\n\n### Key focus\nCreated a maintainable admin foundation that helped the team move faster while keeping performance and consistency high.",
    technologies: [
      "TypeScript",
      "Next.js",
      "React Query",
      "Recoil",
      "Ant Design",
      "Styled Components",
    ],
  },
  {
    title: "Circles.MD",
    dates: "Virtual Spirit · 2019 - 2022",
    description:
      "Developed healthcare communication mobile app with real-time workflows and asynchronous state management.",
    detailDescription:
      "Developed a React Native communication app for healthcare professionals to support hospital collaboration workflows.\n\n### What I worked on\n- Built mobile interfaces for communication workflows\n- Integrated PubNub for real-time capabilities\n- Integrated Google API for supporting app features\n- Managed complex async flows with Redux Saga\n\n### Key focus\nCreated reliable mobile flows for healthcare communication, where responsiveness and real-time updates mattered for day-to-day use.",
    technologies: [
      "TypeScript",
      "React Native",
      "PubNub",
      "Google API",
      "Redux Saga",
      "Styled Components",
    ],
  },
];
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
