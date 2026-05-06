import headshotUrl from "../assets/aya-jabbari-headshot.jpg";
import resumeUrl from "../assets/Aya_Jabbari_Resume.pdf";
import {
  workItems,
  type LinkDef,
  type WorkItem,
} from "./work";
import { skillGroups } from "./skills";
import {
  education,
  certifications,
  languages,
  volunteering,
} from "./background";

export const profile = {
  name: "Aya Jabbari",
  role: "Computer Engineering Student",
  location: "Fès, Morocco",
  email: "ayajabbari81@gmail.com",
  phone: "+212 637 57 56 62",
  availability: "Open to end-of-studies (PFE) internship opportunities",
  availabilityBadge: "Open to Internship · PFE 2026",
  stackLine:
    "Building practical systems across full-stack development, data, and applied AI.",
  headline:
    "I build usable software systems — from responsive web applications and backend services to automation workflows, data dashboards, and applied AI tools.",
  summary:
    "Computer engineering student at ENSA Fès with practical experience in full-stack development, automation, data-oriented systems, and generative AI applications.",
  headshotUrl,
  resumeUrl,
  socials: {
    github: null as string | null,
    linkedin: null as string | null,
  },
};

export type { LinkDef };

export type Project = Omit<WorkItem, "tier"> & {
  tier: "featured" | "secondary";
  summary?: string;
};

export const projects: Project[] = workItems.map(({ tier, ...item }) => ({
  ...item,
  tier: tier === "selected" ? "featured" : "secondary",
  summary: item.contribution,
}));

export const experience = workItems
  .filter((item) => item.type === "Internship")
  .map((item) => ({
    title: item.role,
    organization: item.organization ?? item.title,
    date: item.period,
    location: item.location ?? profile.location,
    context: item.problem,
    contribution: item.contribution,
    stack: item.stack,
  }));

export const hackathons = workItems
  .filter((item) => item.type === "Hackathon")
  .map((item) => {
    const [label, organizer] = (item.organization ?? item.title).split(" · ");

    return {
      label,
      organizer: organizer ?? label,
      date: item.period,
      projectName: item.title,
      problem: item.problem,
      approach: item.contribution,
      methods: item.stack,
    };
  });

export {
  skillGroups,
  education,
  certifications,
  languages,
  volunteering,
};
