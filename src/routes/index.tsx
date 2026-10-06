import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Carter — Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Alex Carter, a front-end developer crafting clean, fast web experiences.",
      },
      { property: "og:title", content: "Alex Carter — Portfolio" },
      {
        property: "og:description",
        content:
          "Portfolio of Alex Carter, a front-end developer crafting clean, fast web experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    title: "Weather Now",
    description:
      "A minimal weather app with location search, hourly forecasts, and animated conditions.",
    tags: ["React", "TypeScript", "API"],
  },
  {
    title: "Taskflow",
    description:
      "A kanban-style task manager with drag-and-drop, filters, and local persistence.",
    tags: ["React", "Tailwind", "DnD"],
  },
  {
    title: "DevBlog",
    description:
      "A personal blog engine with markdown posts, tags, and blazing-fast static pages.",
    tags: ["SSR", "Markdown", "SEO"],
  },
];

const skills = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "TanStack",
  "Git",
  "Figma",
  "REST APIs",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
        <span className="text-lg font-semibold tracking-tight">AC</span>
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <a href="#projects" className="transition-colors hover:text-foreground">
            Projects
          </a>
          <a href="#about" className="transition-colors hover:text-foreground">
            About
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-6">
        {/* Hero */}
        <section className="py-20">
          <p className="text-sm font-medium text-primary">Hi, my name is</p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl">
            Alex Carter.
          </h1>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-muted-foreground sm:text-5xl">
            I build things for the web.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm a front-end developer focused on crafting clean, fast, and
            accessible digital experiences. Currently exploring modern React
            and full-stack TypeScript.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View my work
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              Get in touch
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16">
          <h3 className="text-2xl font-bold tracking-tight">Projects</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <h4 className="text-lg font-semibold group-hover:text-primary">
                  {p.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16">
          <h3 className="text-2xl font-bold tracking-tight">About</h3>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            I started coding out of curiosity and never stopped. I care about
            thoughtful interfaces, performance, and code that's easy to read.
            Outside of work you'll find me hiking, reading sci-fi, and
            tweaking this very site.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-md border border-border px-3 py-1 text-sm text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <h3 className="text-2xl font-bold tracking-tight">Contact</h3>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Want to work together or just say hi? My inbox is always open.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="mailto:alex@example.com"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Mail className="h-4 w-4" />
              alex@example.com
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 text-sm text-muted-foreground">
          <span>© 2026 Alex Carter</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            Remote
          </span>
        </div>
      </footer>
    </div>
  );
}
