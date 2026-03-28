import { useState, useEffect, useRef } from "react";
import {
  FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUpRight,
  FiCode, FiLayers, FiCpu, FiDatabase, FiGlobe, FiSmartphone,
  FiExternalLink, FiChevronDown, FiSend, FiUser, FiMessageSquare,
  FiCalendar, FiBriefcase, FiAward, FiDownload, FiMenu, FiX
} from "react-icons/fi";
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPython,
  SiTailwindcss, SiMongodb, SiPostgresql, SiDocker, SiFigma,
  SiGraphql, SiRedux, SiGit
} from "react-icons/si";

import { FaAws as SiAmazonaws } from "react-icons/fa6";
// DATA
const skills = [
  {
    icon: <FiCode />, title: "Frontend",
    items: [
      { name: "React", icon: <SiReact /> }, { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> }, { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Redux", icon: <SiRedux /> },
    ]
  },
  {
    icon: <FiDatabase />, title: "Backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs /> }, { name: "Python", icon: <SiPython /> },
      { name: "GraphQL", icon: <SiGraphql /> }, { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ]
  },
  {
    icon: <FiCpu />, title: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: <SiDocker /> }, { name: "AWS", icon: <SiAmazonaws /> },
      { name: "Git", icon: <SiGit /> }, { name: "CI/CD", icon: <FiLayers /> },
    ]
  },
  {
    icon: <FiLayers />, title: "Design & Tools",
    items: [
      { name: "Figma", icon: <SiFigma /> }, { name: "REST APIs", icon: <FiGlobe /> },
      { name: "Mobile Dev", icon: <FiSmartphone /> }, { name: "Agile", icon: <FiAward /> },
    ]
  },
];

const projects = [
  {
    id: "01", name: "NEXUS", size: "large",
    desc: "A real-time collaborative workspace powered by WebSockets. Teams can co-edit documents, draw on infinite canvases, and communicate via built-in video.",
    tech: ["Next.js", "WebSocket", "Redis", "PostgreSQL", "AWS"],
    color: "#1a2a1a", label: "NEXUS",
    github: "#", live: "#"
  },
  {
    id: "02", name: "ORBIT", size: "medium",
    desc: "AI-powered analytics dashboard that transforms raw data into interactive visual stories. Features predictive insights using ML models.",
    tech: ["React", "Python", "TensorFlow", "D3.js"],
    color: "#1a1a2a", label: "ORBIT",
    github: "#", live: "#"
  },
  {
    id: "03", name: "FORGE", size: "small",
    desc: "CLI tool for scaffolding full-stack apps with one command. Supports 12+ templates.",
    tech: ["Node.js", "TypeScript", "CLI"],
    color: "#2a1a1a", label: "FORGE",
    github: "#", live: "#"
  },
  {
    id: "04", name: "PRISM", size: "small",
    desc: "Open-source design token manager that syncs Figma styles directly to your codebase.",
    tech: ["Figma API", "React", "Node.js"],
    color: "#1a2a2a", label: "PRISM",
    github: "#", live: "#"
  },
  {
    id: "05", name: "PULSE", size: "small",
    desc: "Health & fitness tracker with beautiful data visualization and streak tracking.",
    tech: ["React Native", "GraphQL", "MongoDB"],
    color: "#2a2a1a", label: "PULSE",
    github: "#", live: "#"
  },
];

const experiences = [
  {
    period: "2023 — Present",
    role: "Senior Full-Stack Engineer",
    company: "Vertex Systems", location: "San Francisco, CA",
    desc: "Leading the architecture and development of a next-generation B2B SaaS platform serving 50,000+ users. Reduced API response times by 60% and mentored a team of 5 engineers.",
    tags: ["React", "Node.js", "AWS", "PostgreSQL", "Team Lead"],
  },
  {
    period: "2021 — 2023",
    role: "Frontend Engineer",
    company: "Luminate Labs", location: "Remote",
    desc: "Built and maintained a design system used across 8 product teams. Pioneered micro-frontend architecture that cut deployment time by 40%.",
    tags: ["React", "TypeScript", "Design Systems", "Micro-frontends"],
  },
  {
    period: "2019 — 2021",
    role: "Software Developer",
    company: "Apex Digital", location: "New York, NY",
    desc: "Developed consumer-facing web and mobile applications for fintech clients. Delivered 12 projects under budget and ahead of schedule.",
    tags: ["Vue.js", "React Native", "Python", "Docker"],
  },
];

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal, .exp-item").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [cursor, setCursor] = useState({ x: -100, y: -100, expanded: false });
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMove = (e) => setCursor(c => ({ ...c, x: e.clientX, y: e.clientY }));
    const onEnter = () => setCursor(c => ({ ...c, expanded: true }));
    const onLeave = () => setCursor(c => ({ ...c, expanded: false }));
    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const navItems = ["About", "Skills", "Work", "Experience", "Contact"];

  return (
    <>
      <div className="portfolio-root">
        <div className="noise" />

        {/* Custom cursor */}
        <div
          className={`cursor ${cursor.expanded ? "expanded" : ""}`}
          style={{ left: cursor.x, top: cursor.y }}
        />

        {/* Mobile menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 24, right: 24, background: "none", border: "none", color: "var(--white)", cursor: "pointer", fontSize: 28 }}>
            <FiX />
          </button>
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </div>

        {/* NAV */}
        <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
          <a href="#" className="nav-logo">Alex<span>.</span>Dev</a>
          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item}><a href={`#${item.toLowerCase()}`}>{item}</a></li>
            ))}
            <li><a href="#contact" className="nav-cta">Hire Me</a></li>
          </ul>
          <button className="hamburger" onClick={() => setMenuOpen(true)}><FiMenu /></button>
        </nav>

        {/* HERO */}
        <section className="hero" id="hero">
          <div className="hero-grid-bg" />
          <div className="hero-glow" />
          <div className="hero-glow2" />

          <div className="hero-tag">Available for Work</div>

          <h1 className="hero-name">
            Alex<br />
            <span className="outline">Mor</span><span className="accent">gan</span>
          </h1>

          <p className="hero-role">
            Full-Stack Engineer crafting <span>scalable digital experiences</span> — from elegant UIs to battle-tested APIs. Based in San Francisco.
          </p>

          <div className="hero-actions">
            <a href="#work" className="btn-primary">
              View My Work <FiArrowUpRight />
            </a>
            <a href="#contact" className="btn-ghost">
              <FiDownload /> Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a href="#" aria-label="GitHub"><FiGithub /></a>
            <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="#" aria-label="Twitter"><FiTwitter /></a>
            <a href="mailto:alex@example.com" aria-label="Email"><FiMail /></a>
          </div>

          <div className="scroll-hint">
            <span className="scroll-icon"><FiChevronDown /></span>
            Scroll to explore
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <div className="section-label reveal">01 &mdash; About Me</div>
          <h2 className="section-title reveal">THE<br /><span style={{ color: "var(--gold)" }}>STORY</span></h2>

          <div className="about-inner">
            <div>
              <div className="about-text reveal">
                <p>I'm a <em>Full-Stack Engineer</em> with 6+ years of experience building products that millions of people use every day. I believe great software lives at the intersection of clean code, thoughtful UX, and relentless performance.</p>
                <p>My work spans from <em>early-stage startups</em> to enterprise teams at scale. I've led architecture decisions, built design systems, and shipped products that raised $50M+ in funding.</p>
                <p>When I'm not shipping code, I'm contributing to <em>open source</em>, writing about software craftsmanship, or exploring the wilderness with a camera.</p>
              </div>

              <div className="about-stats reveal">
                {[["6+", "Years Experience"], ["40+", "Projects Shipped"], ["12M+", "Users Impacted"], ["98%", "Client Satisfaction"]].map(([num, label]) => (
                  <div className="stat-box" key={label}>
                    <div className="stat-num">{num}</div>
                    <div className="stat-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-image-wrap reveal">
              <div className="about-image">
                <div className="about-image-inner">
                  <div className="avatar-placeholder">AM</div>
                  <div className="avatar-name">ALEX MORGAN</div>
                  <div className="avatar-role-tag">FULL-STACK ENGINEER</div>
                </div>
              </div>
              <div className="available-badge">
                <div className="dot" />
                Open to Opportunities
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills" id="skills">
          <div className="section-label reveal">02 &mdash; Skills</div>
          <h2 className="section-title reveal">MY<br /><span style={{ color: "var(--gold)" }}>STACK</span></h2>

          <div className="skills-grid">
            {skills.map((cat, i) => (
              <div className="skill-category reveal" key={cat.title} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="skill-cat-icon">{cat.icon}</div>
                <div className="skill-cat-title">{cat.title}</div>
                <div className="skill-tags">
                  {cat.items.map(item => (
                    <div className="skill-tag" key={item.name}>
                      {item.icon} {item.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="work">
          <div className="projects-header">
            <div>
              <div className="section-label reveal">03 &mdash; Work</div>
              <h2 className="section-title reveal">SELECTED<br /><span style={{ color: "var(--gold)" }}>PROJECTS</span></h2>
            </div>
            <a href="#" className="btn-ghost reveal" style={{ alignSelf: "flex-end" }}>All Projects <FiArrowUpRight /></a>
          </div>

          <div className="projects-grid">
            {projects.map((p, i) => (
              <div className={`project-card ${p.size} reveal`} key={p.id} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="project-image" style={{ background: p.color }}>
                  <div className="project-image-bg">{p.label}</div>
                  <div className="project-overlay" />
                </div>
                <div className="project-body">
                  <div className="project-num">{p.id}</div>
                  <div className="project-name">{p.name}</div>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tech">
                    {p.tech.map(t => <span className="tech-chip" key={t}>{t}</span>)}
                  </div>
                  <div className="project-links">
                    <a href={p.github} className="project-link"><FiGithub /> Code</a>
                    <a href={p.live} className="project-link"><FiExternalLink /> Live Demo</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="experience" id="experience">
          <div className="section-label reveal">04 &mdash; Experience</div>
          <h2 className="section-title reveal">WORK<br /><span style={{ color: "var(--gold)" }}>HISTORY</span></h2>

          <div className="exp-timeline">
            {experiences.map((exp, i) => (
              <div className="exp-item" key={i} style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="exp-period"><FiCalendar style={{ marginRight: 6, verticalAlign: "middle" }} />{exp.period}</div>
                <div className="exp-role">{exp.role}</div>
                <div className="exp-company">
                  <FiBriefcase style={{ marginRight: 6, verticalAlign: "middle" }} />
                  <span>{exp.company}</span> — {exp.location}
                </div>
                <p className="exp-desc">{exp.desc}</p>
                <div className="exp-tags">
                  {exp.tags.map(t => <span className="exp-tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="section-label reveal">05 &mdash; Contact</div>
          <h2 className="section-title reveal">LET'S<br /><span style={{ color: "var(--gold)" }}>CONNECT</span></h2>

          <div className="contact-inner">
            <div className="contact-info reveal">
              <h3>Got a project in mind? Let's make it real.</h3>
              <p>I'm currently open to freelance projects, full-time roles, and consulting engagements. If you've got an interesting challenge, I'd love to hear about it.</p>

              <div className="contact-items">
                <a href="mailto:alex@example.com" className="contact-item">
                  <div className="contact-icon"><FiMail /></div>
                  <div>
                    <div className="contact-item-label">Email</div>
                    <div className="contact-item-text">alex@example.com</div>
                  </div>
                </a>
                <a href="#" className="contact-item">
                  <div className="contact-icon"><FiLinkedin /></div>
                  <div>
                    <div className="contact-item-label">LinkedIn</div>
                    <div className="contact-item-text">linkedin.com/in/alexmorgan</div>
                  </div>
                </a>
                <a href="#" className="contact-item">
                  <div className="contact-icon"><FiGithub /></div>
                  <div>
                    <div className="contact-item-label">GitHub</div>
                    <div className="contact-item-text">github.com/alexmorgan</div>
                  </div>
                </a>
              </div>
            </div>

            <form className="contact-form reveal" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label"><FiUser style={{ marginRight: 4 }} />Name</label>
                  <input
                    className="form-input"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={e => setFormData(d => ({ ...d, name: e.target.value }))}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label"><FiMail style={{ marginRight: 4 }} />Email</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={e => setFormData(d => ({ ...d, email: e.target.value }))}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  className="form-input"
                  placeholder="Project Collaboration"
                  value={formData.subject}
                  onChange={e => setFormData(d => ({ ...d, subject: e.target.value }))}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label"><FiMessageSquare style={{ marginRight: 4 }} />Message</label>
                <textarea
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                  required
                />
              </div>
              <button type="submit" className="form-submit">
                {submitted ? "Message Sent! ✓" : <><FiSend /> Send Message</>}
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="footer-logo">Alex<span>.</span>Dev</div>
          <div className="footer-copy">© 2024 Alex Morgan — Built with React & ❤</div>
          <div className="footer-socials">
            <a href="#"><FiGithub /></a>
            <a href="#"><FiLinkedin /></a>
            <a href="#"><FiTwitter /></a>
            <a href="mailto:alex@example.com"><FiMail /></a>
          </div>
        </footer>
      </div>
    </>
  );
}