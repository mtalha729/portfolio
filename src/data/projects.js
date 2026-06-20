export const projects = [
  {
    id: 1,
    title: "Password Generator",
    description:
      "A React-based tool that generates secure random passwords with customizable length and character options.",
    category: "Other",
    image: "/images/projects/password-generator.svg",
    technologies: ["React", "Tailwind CSS", "Vite"],
    live: "https://password-generator-8av5.vercel.app/",
    status: "live",
  },
  {
    id: 2,
    title: "Luxury Store",
    description:
      "An AI-assisted online shopping store with a premium product catalog and streamlined checkout flow.",
    category: "Other",
    image: "/images/projects/luxury-store.svg",
    technologies: ["React", "Tailwind CSS", "AI"],
    live: "https://online-shoping-store-develped-throu.vercel.app/",
    status: "live",
  },
  {
    id: 3,
    title: "Talha Developments",
    description:
      "A modern agency-style portfolio showcasing web development services, project highlights, and contact options.",
    category: "Other",
    image: "/images/projects/talha-developments.svg",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    live: null,
    status: "live",
  },
  {
    id: 4,
    title: "Minimal Dashboard",
    description:
      "A clean UI/UX dashboard concept focused on clarity, accessibility, and responsive data visualization.",
    category: "UI/UX",
    image: "/images/projects/coming-soon-uiux.svg",
    technologies: ["Figma", "React", "Design Systems"],
    live: null,
    status: "coming-soon",
  },
  {
    id: 5,
    title: "Social Connect",
    description:
      "A social media platform concept with profile feeds, engagement tools, and a mobile-first experience.",
    category: "Social Media",
    image: "/images/projects/coming-soon-social.svg",
    technologies: ["React", "API Design", "UI/UX"],
    live: null,
    status: "coming-soon",
  },
  {
    id: 6,
    title: "Commerce Platform",
    description:
      "A full-featured e-commerce web application with product management, cart flow, and order tracking.",
    category: "Amazon",
    image: "/images/projects/coming-soon-webdev.svg",
    technologies: ["React", "Node.js", "MongoDB"],
    live: null,
    status: "coming-soon",
  },
];

export const categories = ["All", "Amazon", "Social Media", "UI/UX", "Other"];

export function getCategoryCounts(projectList) {
  return categories.reduce((counts, category) => {
    counts[category] =
      category === "All"
        ? projectList.length
        : projectList.filter((project) => project.category === category).length;
    return counts;
  }, {});
}
