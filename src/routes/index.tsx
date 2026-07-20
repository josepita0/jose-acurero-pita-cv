import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Download, ArrowUpRight } from "lucide-react";
import cvAsset from "@/assets/jose-acurero-cv.pdf.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const experience = [
  {
    company: "Quality Controls Groups International",
    location: "Caracas, Venezuela",
    role: "Frontend Developer · Full Stack",
    period: "Abr. 2023 — Sept. 2025",
    bullets: [
      "Mantenimiento evolutivo de un sistema ERP desarrollado en Angular.",
      "Desarrollo de aplicaciones administrativas usando React y Next.js en entornos productivos.",
      "Maquetación y diseño de interfaces con Figma, aplicando principios de usabilidad y diseño responsive.",
      "Implementación de APIs y servicios backend con NestJS, orientados a procesamiento y visualización de datos.",
      "Desarrollo de dashboards e informes interactivos conectados a servicios backend.",
    ],
  },
  {
    company: "Tecnología AVL, C.A.",
    location: "Caracas, Venezuela",
    role: "Frontend Developer · Roku Developer",
    period: "Nov. 2022 — Mar. 2023",
    bullets: [
      "Desarrollo y publicación de aplicaciones de streaming para Roku TV usando BrightScript y XML.",
      "Optimización de aplicaciones multiplataforma para Smart TV (Android TV, Fire TV, MI Box) mediante Ionic.",
      "Mejora de navegación, rendimiento y experiencia de usuario en interfaces orientadas a consumo multimedia.",
      "Colaboración con equipos de contenido y producto para definir requerimientos técnicos.",
    ],
  },
  {
    company: "Technology Consulting Solution",
    location: "Caracas, Venezuela",
    role: "Frontend Developer",
    period: "Nov. 2021 — Sept. 2022",
    bullets: [
      "Desarrollo y optimización de aplicaciones web administrativas utilizando Angular.",
      "Mejora del rendimiento general del sistema, reduciendo los tiempos de respuesta ~40% mediante optimización del DOM y mejor gestión de servicios.",
      "Implementación de comunicación en tiempo real usando WebSockets, permitiendo transmisión de audio y video en plataformas corporativas.",
      "Desarrollo de soluciones de telemedicina con arquitectura modular enfocada en mantenibilidad y escalabilidad.",
    ],
  },
];

const skills: Record<string, string[]> = {
  Frontend: ["React", "Angular", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
  Backend: ["NestJS", "Node.js", "APIs REST"],
  Otros: ["WebSockets", "Figma", "Jira", "Smart TV Apps", "ERP Systems"],
  Metodologías: ["Scrum", "Trabajo colaborativo", "Planificación de sprints", "Revisión de código"],
};

const education = [
  {
    school: "Universidad Santa María",
    location: "Caracas, Venezuela",
    degree: "Ingeniería de Sistemas",
    date: "Feb. 2024",
    honors: "Mención publicación en trabajo especial de grado (TEG)",
  },
  {
    school: "Technology Consulting Solution",
    location: "Caracas, Venezuela",
    degree: "Formación técnica: Android, Java, Angular, Flutter, Bases de Datos, NodeJS",
    date: "Ago. 2021",
  },
];

const softSkills = [
  "Alta proactividad y enfoque al trabajo en equipo.",
  "Adaptación a entornos dinámicos y resolución de problemas bajo presión.",
  "Orientación a resultados y mejora continua.",
  "Comunicación efectiva en entornos multidisciplinarios.",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <header className="mb-16">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Frontend Developer
          </p>
          <h1 className="text-5xl font-medium leading-tight text-foreground sm:text-6xl">
            José Alejandro<br />Acurero
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Más de 3 años construyendo aplicaciones web escalables y de alto
            rendimiento. Especializado en React, Angular y TypeScript, con
            experiencia sólida en sistemas ERP y plataformas orientadas al usuario.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Elda, España
            </span>
            <a href="mailto:joseacureropita0@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
              <Mail className="h-4 w-4" /> joseacureropita0@gmail.com
            </a>
            <a href="tel:+34602658906" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
              <Phone className="h-4 w-4" /> +34 602 65 89 06
            </a>
            <a href="https://www.linkedin.com/in/jose-acurero" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>

          <div className="mt-8">
            <a
              href={cvAsset.url}
              download="Jose-Acurero-CV.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:opacity-90"
            >
              <Download className="h-4 w-4" /> Descargar CV
            </a>
          </div>
        </header>

        <Section title="Experiencia">
          <ol className="relative space-y-10 border-l border-border pl-6">
            {experience.map((job) => (
              <li key={job.company} className="relative">
                <span className="absolute -left-[29px] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-lg font-medium text-foreground">{job.company}</h3>
                  <span className="text-xs tabular-nums text-muted-foreground">{job.period}</span>
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {job.role} · {job.location}
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/85">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/60">
                      {b}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="Habilidades">
          <div className="space-y-5">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="grid grid-cols-[7rem_1fr] gap-4 sm:grid-cols-[9rem_1fr]">
                <p className="pt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {group}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((s) => (
                    <span key={s} className="rounded-md border border-border bg-card px-2.5 py-1 text-xs text-foreground/80">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Educación">
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.school}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-base font-medium text-foreground">{edu.school}</h3>
                  <span className="text-xs tabular-nums text-muted-foreground">{edu.date}</span>
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">{edu.degree}</p>
                {edu.honors && (
                  <p className="mt-1 text-sm italic text-foreground/70">{edu.honors}</p>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section title="Habilidades blandas">
          <ul className="space-y-2 text-sm leading-relaxed text-foreground/85">
            {softSkills.map((s, i) => (
              <li key={i} className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/60">
                {s}
              </li>
            ))}
          </ul>
        </Section>

        <footer className="mt-20 flex items-center justify-between border-t border-border pt-6 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} José Alejandro Acurero</span>
          <a href="mailto:joseacureropita0@gmail.com" className="inline-flex items-center gap-1 transition-colors hover:text-accent">
            Contactar <ArrowUpRight className="h-3 w-3" />
          </a>
        </footer>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14 border-t border-border pt-10">
      <h2 className="mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}
