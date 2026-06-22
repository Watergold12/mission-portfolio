// export const NAV_ITEMS = [
//   { id: "command-center", label: "Command Center", code: "01" },
//   { id: "active-missions", label: "Active Missions", code: "02" },
//   { id: "tech-arsenal", label: "Tech Arsenal", code: "03" },
//   { id: "mission-logs", label: "Mission Logs", code: "04" },
//   { id: "downloads", label: "Downloads", code: "05" },
//   { id: "contact", label: "Contact", code: "06" },
// ] as const;

// export const MISSIONS = [
//   {
//     id: "MISSION-001",
//     name: "LOS Drone Project",
//     status: "Completed",
//     summary:
//       "Line-of-sight drone integrating sensor arrays with Arduino-based flight logic for stable, programmable hardware control.",
//     tech: ["Arduino", "Sensors", "Hardware Integration"],
//   },
//   {
//     id: "MISSION-002",
//     name: "Journal Template Converter",
//     status: "Completed",
//     summary:
//       "Automated pipeline that extracts structured content from research PDFs and reformats it into clean editable Word templates.",
//     tech: ["Python", "pdfplumber", "python-docx"],
//   },
//   {
//     id: "MISSION-003",
//     name: "Intelligent Snake Game",
//     status: "Completed",
//     summary:
//       "Classic snake reimagined with pathfinding agents that learn optimal routes across the grid in real time.",
//     tech: ["Python", "Pygame", "Pathfinding Algorithms"],
//   },
// ] as const;

// export const ARSENAL = [
//   {
//     category: "Frontend Arsenal",
//     code: "FE-01",
//     items: ["React", "TypeScript", "HTML", "CSS", "Tailwind"],
//   },
//   {
//     category: "Backend Arsenal",
//     code: "BE-02",
//     items: ["Python", "Java", "Node.js"],
//   },
//   {
//     category: "Database Systems",
//     code: "DB-03",
//     items: ["PostgreSQL", "Supabase"],
//   },
//   {
//     category: "Engineering Tools",
//     code: "ET-04",
//     items: ["Git", "GitHub", "VS Code"],
//   },
//   {
//     category: "Hardware Systems",
//     code: "HW-05",
//     items: ["Arduino", "Sensors", "Drone Systems"],
//   },
// ] as const;

// export const LOGS = [
//   { year: "2023", title: "Initialization", body: "Started software development journey." },
//   { year: "2024", title: "Python & AI", body: "Built Python projects and explored AI concepts." },
//   { year: "2025", title: "Full-Stack", body: "Developed React applications and full-stack projects." },
//   { year: "2026", title: "Intelligent Systems", body: "Building intelligent systems and seeking software opportunities." },
// ] as const;

// type Download = {
//   title: string;
//   type: string;
//   updated: string;
//   format: string;
//   featured?: boolean;
// };

// export const DOWNLOADS: Download[] = [
//   { title: "Resume", type: "Curriculum Vitae", updated: "Jun 2026", format: "PDF", featured: true },
//   { title: "Certificates", type: "Credentials", updated: "May 2026", format: "PDF" },
//   { title: "Achievements", type: "Highlights", updated: "Apr 2026", format: "PDF" },
//   { title: "Project Reports", type: "Technical Docs", updated: "Mar 2026", format: "PDF" },
// ];

// type Stat = {
//   label: string;
//   value: number | string;
//   suffix?: string;
//   isText?: boolean;
// };

// export const STATS: Stat[] = [
//   { label: "Projects Completed", value: 12, suffix: "+" },
//   { label: "Technologies Used", value: 18, suffix: "" },
//   { label: "Years Learning", value: 3, suffix: "" },
//   { label: "Current Status", value: "ACTIVE", isText: true },
// ];

export const NAV_ITEMS = [
  { id: "command-center", label: "Command Center", code: "01" },
  { id: "active-missions", label: "Active Missions", code: "02" },
  { id: "tech-arsenal", label: "Tech Arsenal", code: "03" },
  { id: "mission-logs", label: "Mission Logs", code: "04" },
  { id: "downloads", label: "Downloads", code: "05" },
  { id: "contact", label: "Contact", code: "06" },
] as const;

export const MISSIONS = [
  {
    id: "MISSION-001",
    name: "LOS Drone Project",
    status: "Completed",
    summary:
      "Line-of-sight drone integrating sensor arrays with Arduino-based flight logic for stable, programmable hardware control.",
    tech: ["Flight Controllers", "ESC", "BLDC Motors"],
    link: "",
  },
  {
    id: "MISSION-002",
    name: "Intelligent Snake Game",
    status: "Completed",
    summary:
      "Classic snake reimagined with pathfinding agents that learn optimal routes across the grid in real time.",
    tech: ["Python", "Pygame", "Pathfinding Algorithms", "DSA"],
    link: "",
  },
  {
    id: "MISSION-003",
    name: "Journal Template Converter",
    status: "Completed",
    summary:
      "Automated pipeline that extracts structured content from research PDFs and reformats it into clean editable Word templates.",
    tech: ["Python", "pdfplumber", "python-docx", "sentence-transformers"],
    link: "",
  },
  {
    id: "MISSION-004",
    name: "E-commerce Platform",
    status: "Completed",
    summary:
      "Designed and developed a full-featured e-commerce site for ZOCO, including product catalog, cart/checkout flow, and responsive design across devices.",
    tech: ["Python", "Pygame", "Pathfinding Algorithms", "DSA"],
    link: "",
  },
] as const;

export const ARSENAL = [
  {
    category: "Languages",
    code: "LA-01",
    items: ["Python", "Java(Basics)", "C(Intermediate)", "C++(Intermediate)"],
  },
  {
    category: "Frontend Arsenal",
    code: "FE-02",
    items: ["React", "JavaScript", "HTML", "CSS", "Tailwind"],
  },
  {
    category: "Backend Arsenal",
    code: "BE-03",
    items: ["Django", "Node.js"],
  },
  {
    category: "Database Systems",
    code: "DB-04",
    items: ["PostgreSQL", "Supabase"],
  },
  {
    category: "Engineering Tools",
    code: "ET-05",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    category: "Hardware Systems",
    code: "HW-06",
    items: ["Arduino", "ESP32", "Raspberry Pi", "Flight Controllers", "ESC"],
  },
] as const;

export const LOGS = [
  { year: "2023", title: "Initialization", body: "Started software development journey." },
  { year: "2024", title: "Python & AI", body: "Built Python projects and explored AI concepts." },
  { year: "2025", title: "Full-Stack", body: "Developed React applications and full-stack projects." },
  { year: "2026", title: "Intelligent Systems", body: "Building intelligent systems Like ML and AI and seeking software opportunities." },
] as const;

type Download = {
  title: string;
  type: string;
  updated: string;
  format: string;
  featured?: boolean;
};

export const DOWNLOADS: Download[] = [
  { title: "Resume", type: "Curriculum Vitae", updated: "Jun 2026", format: "PDF", featured: true },
];

type Stat = {
  label: string;
  value: number | string;
  suffix?: string;
  isText?: boolean;
};

export const STATS: Stat[] = [
  { label: "Projects Completed", value: 12, suffix: "+" },
  { label: "Technologies Used", value: 17, suffix: "" },
  { label: "Years Learning", value: 3, suffix: "" },
  { label: "Current Status", value: "ACTIVE", isText: true },
];

