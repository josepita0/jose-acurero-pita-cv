import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Download, ArrowUpRight, Languages } from "lucide-react";
import cvAsset from "@/assets/jose-acurero-cv.pdf.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

type Lang = "es" | "en";

const content = {
  es: {
    role: "Frontend Developer",
    intro:
      "Más de 3 años construyendo aplicaciones web escalables y de alto rendimiento. Especializado en React, Angular y TypeScript, con experiencia sólida en sistemas ERP y plataformas orientadas al usuario.",
    location: "Elda, España",
    download: "Descargar CV",
    contact: "Contactar",
    sections: {
      experience: "Experiencia",
      skills: "Habilidades",
      education: "Educación",
      soft: "Habilidades blandas",
    },
    experience: [
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
    ],
    skills: {
      Frontend: ["React", "Angular", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
      Backend: ["NestJS", "Node.js", "APIs REST"],
      Otros: ["WebSockets", "Figma", "Jira", "Smart TV Apps", "ERP Systems"],
      Metodologías: ["Scrum", "Trabajo colaborativo", "Planificación de sprints", "Revisión de código"],
    } as Record<string, string[]>,
    education: [
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
    ],
    soft: [
      "Alta proactividad y enfoque al trabajo en equipo.",
      "Adaptación a entornos dinámicos y resolución de problemas bajo presión.",
      "Orientación a resultados y mejora continua.",
      "Comunicación efectiva en entornos multidisciplinarios.",
    ],
  },
  en: {
    role: "Frontend Developer",
    intro:
      "Over 3 years building scalable, high-performance web applications. Specialized in React, Angular and TypeScript, with strong experience in ERP systems and user-facing platforms.",
    location: "Elda, Spain",
    download: "Download CV",
    contact: "Get in touch",
    sections: {
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      soft: "Soft skills",
    },
    experience: [
      {
        company: "Quality Controls Groups International",
        location: "Caracas, Venezuela",
        role: "Frontend Developer · Full Stack",
        period: "Apr. 2023 — Sept. 2025",
        bullets: [
          "Evolutionary maintenance of an ERP system built in Angular.",
          "Development of admin applications using React and Next.js in production environments.",
          "UI design and layout with Figma, applying usability and responsive design principles.",
          "Implementation of APIs and backend services with NestJS, focused on data processing and visualization.",
          "Development of interactive dashboards and reports connected to backend services.",
        ],
      },
      {
        company: "Tecnología AVL, C.A.",
        location: "Caracas, Venezuela",
        role: "Frontend Developer · Roku Developer",
        period: "Nov. 2022 — Mar. 2023",
        bullets: [
          "Developed and published streaming apps for Roku TV using BrightScript and XML.",
          "Optimized cross-platform Smart TV apps (Android TV, Fire TV, MI Box) with Ionic.",
          "Improved navigation, performance and UX on interfaces designed for media consumption.",
          "Collaborated with content and product teams to define technical requirements.",
        ],
      },
      {
        company: "Technology Consulting Solution",
        location: "Caracas, Venezuela",
        role: "Frontend Developer",
        period: "Nov. 2021 — Sept. 2022",
        bullets: [
          "Development and optimization of admin web applications using Angular.",
          "Improved overall system performance, reducing response times by ~40% through DOM optimization and better service management.",
          "Implemented real-time communication with WebSockets, enabling audio and video streaming in corporate platforms.",
          "Built telemedicine solutions with a modular architecture focused on maintainability and scalability.",
        ],
      },
    ],
    skills: {
      Frontend: ["React", "Angular", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
      Backend: ["NestJS", "Node.js", "REST APIs"],
      Other: ["WebSockets", "Figma", "Jira", "Smart TV Apps", "ERP Systems"],
      Methodologies: ["Scrum", "Team collaboration", "Sprint planning", "Code review"],
    } as Record<string, string[]>,
    education: [
      {
        school: "Universidad Santa María",
        location: "Caracas, Venezuela",
        degree: "Systems Engineering",
        date: "Feb. 2024",
        honors: "Honors: publication mention in final degree project (TEG)",
      },
      {
        school: "Technology Consulting Solution",
        location: "Caracas, Venezuela",
        degree: "Technical training: Android, Java, Angular, Flutter, Databases, NodeJS",
        date: "Aug. 2021",
      },
    ],
    soft: [
      "High proactivity and strong team focus.",
      "Adaptable to dynamic environments and problem-solving under pressure.",
      "Results-driven with a continuous improvement mindset.",
      "Effective communication in multidisciplinary teams.",
    ],
  },
} as const;

function Index() {
  const [lang, setLang] = useState<Lang>("es");
  const t = content[lang];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="mb-10 flex justify-end">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/80 shadow-[var(--shadow-soft)] transition-colors hover:text-accent"
            aria-label="Toggle language"
          >
            <Languages className="h-3.5 w-3.5" />
            <span className={lang === "es" ? "text-accent" : ""}>ES</span>
            <span className="text-muted-foreground">/</span>
            <span className={lang === "en" ? "text-accent" : ""}>EN</span>
          </button>
        </div>

        <header className="mb-16">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t.role}
          </p>
          <h1 className="text-5xl font-medium leading-tight text-foreground sm:text-6xl">
            José Alejandro<br />Acurero
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {t.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {t.location}
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
              <Download className="h-4 w-4" /> {t.download}
            </a>
          </div>
        </header>

        <Section title={t.sections.experience}>
          <ol className="relative space-y-10 border-l border-border pl-6">
            {t.experience.map((job) => (
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

        <Section title={t.sections.skills}>
          <div className="space-y-5">
            {Object.entries(t.skills).map(([group, items]) => (
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

        <Section title={t.sections.education}>
          <div className="space-y-6">
            {t.education.map((edu) => (
              <div key={edu.school}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-base font-medium text-foreground">{edu.school}</h3>
                  <span className="text-xs tabular-nums text-muted-foreground">{edu.date}</span>
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">{edu.degree}</p>
                {"honors" in edu && edu.honors && (
                  <p className="mt-1 text-sm italic text-foreground/70">{edu.honors}</p>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section title={t.sections.soft}>
          <ul className="space-y-2 text-sm leading-relaxed text-foreground/85">
            {t.soft.map((s, i) => (
              <li key={i} className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/60">
                {s}
              </li>
            ))}
          </ul>
        </Section>

        <footer className="mt-20 flex items-center justify-between border-t border-border pt-6 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} José Alejandro Acurero</span>
          <a href="mailto:joseacureropita0@gmail.com" className="inline-flex items-center gap-1 transition-colors hover:text-accent">
            {t.contact} <ArrowUpRight className="h-3 w-3" />
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
