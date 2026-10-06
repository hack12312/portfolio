const projects = [
  {
    title: "Weather Now",
    description: "A minimal weather app with location search, hourly forecasts, and animated conditions.",
    tags: ["React", "TypeScript", "API"],
  },
  {
    title: "Taskflow",
    description: "A kanban-style task manager with drag-and-drop, filters, and local persistence.",
    tags: ["React", "Tailwind", "DnD"],
  },
  {
    title: "DevBlog",
    description: "A personal blog engine with markdown posts, tags, and blazing-fast static pages.",
    tags: ["SSR", "Markdown", "SEO"],
  },
];

const skills = ["React", "TypeScript", "Tailwind CSS", "Node.js", "TanStack", "Git", "Figma", "REST APIs"];

const grid = document.getElementById("project-grid");
projects.forEach((p) => {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <h4>${p.title}</h4>
    <p>${p.description}</p>
    <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
  `;
  grid.appendChild(card);
});

const skillList = document.getElementById("skill-list");
skills.forEach((s) => {
  const el = document.createElement("span");
  el.className = "skill";
  el.textContent = s;
  skillList.appendChild(el);
});
