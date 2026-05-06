export const education = [
  {
    title: "Engineering Cycle in Computer Engineering",
    school: "ENSA Fès — École Nationale des Sciences Appliquées",
    date: "2024 – Present",
  },
  {
    title: "Integrated Preparatory Cycle",
    school: "ENSA Fès — École Nationale des Sciences Appliquées",
    date: "2022 – 2024",
  },
  {
    title: "Baccalaureate",
    school: "Institut Rabelais, Fès",
    date: "June 2022",
  },
];

export const languages = [
  { language: "Arabic", proficiency: "Native" },
  { language: "French", proficiency: "Advanced" },
  { language: "English", proficiency: "Advanced" },
];

export type CertificationIcon = "database" | "brain" | "code";

export type CertificationIssuer = {
  id: string;
  name: string;
  icon: CertificationIcon;
  image: string;
  certs: Array<{
    title: string;
    description: string;
  }>;
};

export const certificationIssuers: CertificationIssuer[] = [
  {
    id: "oracle",
    name: "Oracle",
    icon: "database",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800&auto=format&fit=crop",
    certs: [
      {
        title: "SQL Database Programming",
        description: "Relational design, queries, and stored procedures.",
      },
      {
        title: "Database Design",
        description: "Entity-relationship modeling and schema normalization.",
      },
    ],
  },
  {
    id: "365-datascience",
    name: "365 DataScience",
    icon: "brain",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    certs: [
      {
        title: "Introduction to AI",
        description: "Foundations of machine learning.",
      },
      {
        title: "ChatGPT & Generative AI",
        description: "Practical use of LLMs and prompt engineering.",
      },
    ],
  },
  {
    id: "w3schools",
    name: "W3Schools",
    icon: "code",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    certs: [
      {
        title: "C/C++ Certificate",
        description: "Core programming fundamentals in C and C++.",
      },
    ],
  },
];

export const certifications = [
  ...certificationIssuers.flatMap((issuer) =>
    issuer.certs.map((cert) => ({
      title: cert.title,
      issuer: issuer.name,
      description: cert.description,
    })),
  ),
];

export type CommunityIcon = "globe" | "users" | "message" | "book" | "heart";

export type CommunityItem = {
  id: string;
  org: string;
  icon: CommunityIcon;
  context: string;
};

export const communityItems: CommunityItem[] = [
  {
    id: "ieee",
    org: "IEEE Region 8 & IEEE Junior",
    icon: "globe",
    context:
      "Organized technical workshops and mentored junior engineering students.",
  },
  {
    id: "jcmp",
    org: "JCMP & Community Service",
    icon: "users",
    context:
      "Participated in local community outreach and student initiatives.",
  },
  {
    id: "debate",
    org: "Star Debate",
    icon: "message",
    context:
      "Developed public speaking, critical thinking, and structured argumentation.",
  },
  {
    id: "english",
    org: "English Teaching Volunteer",
    icon: "book",
    context:
      "Volunteered to teach basic English to local youth at the library.",
  },
  {
    id: "iklyl",
    org: "Iklyl Cultural Center",
    icon: "heart",
    context:
      "Supported cultural events and organizational logistics for gatherings.",
  },
];

export const volunteering = communityItems.map((item) => item.org);
