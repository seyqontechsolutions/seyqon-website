import { useEffect, useState } from "react";

const ENQUIRY_ENDPOINT = ""; // Set a POST endpoint when the enquiry service is ready.

const services = [
  {
    number: "01 / DIGITAL PRODUCTS",
    title: "Websites & applications",
    description: "Responsive websites, landing pages, portals, dashboards, and workflows that make everyday tasks simpler.",
    action: "Plan a web project",
    className: "tile-feature",
    visual: "web",
  },
  {
    number: "02 / MOBILE",
    title: "Mobile apps",
    description: "Useful Android and Flutter app experiences, shaped around the people who will use them.",
    action: "Explore mobile",
    className: "tile-mobile",
    visual: "mobile",
  },
  {
    number: "03 / STUDENT PROJECTS",
    title: "College project support",
    description: "Prototypes, implementation guidance, debugging, documentation, and demonstrations designed to help you understand your work.",
    action: "Talk through your project",
    className: "tile-student",
    visual: "student",
  },
  {
    number: "04 / CUSTOM SOFTWARE",
    title: "Custom tools & backend",
    description: "Database-backed systems, APIs, small-business tools, automation, and integrations planned for your requirements.",
    action: "Shape a custom solution",
    className: "tile-custom",
    visual: "custom",
  },
  {
    number: "05 / SPECIALIST PROTOTYPES",
    title: "AI & machine learning",
    description: "Research-oriented proofs of concept in areas like image processing, classification, and prediction, scoped to fit the brief.",
    action: "Discuss feasibility",
    className: "tile-specialist",
    visual: "specialist",
  },
];

function Eyebrow({ children, light = false }) {
  return <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}><span className="eyebrow-line" />{children}</p>;
}

function Header({ theme, themeMode, onToggleTheme, onUseSystemTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onKeyDown = (event) => event.key === "Escape" && closeMenu();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="site-header z-20 w-full px-4 sm:px-8">
      <div className="nav-shell mx-auto flex w-full max-w-[1290px] items-center justify-between">
        <a className="brand" href="#home" aria-label="Seyqon Tech Solutions home">
          <img src="/assets/seyqon-logo-horizontal.png" alt="Seyqon Tech Solutions" />
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-nav" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen((open) => !open)}>
          <span /><span />
        </button>
        <nav id="primary-nav" className={`primary-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <div className="theme-control">
            <button className="theme-toggle" type="button" aria-pressed={theme === "dark"} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} onClick={onToggleTheme}>
              <span className="theme-switch" aria-hidden="true"><span className="theme-switch-thumb" /></span>
              <span>{theme === "dark" ? "Dark" : "Light"}</span>
            </button>
            {themeMode !== "system" && <button className="theme-reset" type="button" onClick={onUseSystemTheme}>Use device</button>}
          </div>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Start a project <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-art reveal reveal-right" aria-label="A visual map of the Seyqon development approach">
      <div className="art-grid" aria-hidden="true" /><div className="orbit orbit-one" aria-hidden="true" /><div className="orbit orbit-two" aria-hidden="true" />
      <div className="art-caption"><span>IDEA TO IMPLEMENTATION</span><span>01 / 04</span></div>
      <div className="solution-board glass-panel">
        <div className="board-top"><span className="board-kicker">A clearer path forward</span><span className="board-index">S / 01</span></div>
        <div className="board-title">Make the idea<br /><em>work for you.</em></div>
        <div className="board-flow">
          <div className="flow-node flow-start"><span className="flow-symbol">01</span><span>Understand</span></div><div className="flow-connector" aria-hidden="true" />
          <div className="flow-node flow-active"><span className="flow-symbol">02</span><span>Build</span></div><div className="flow-connector" aria-hidden="true" />
          <div className="flow-node"><span className="flow-symbol">03</span><span>Deliver</span></div>
        </div>
        <div className="board-foot"><span className="signal"><i />Built around your brief</span><span>SEYQON / STUDIO</span></div>
      </div>
      <div className="floating-chip chip-blue"><span className="chip-glyph">&#123; &#125;</span><span><b>Built to fit</b><small>Your requirements first</small></span></div>
      <div className="floating-chip chip-price"><span className="price-currency">₹</span><span><b>From ₹1,000</b><small>College projects</small></span></div>
      <div className="art-side-label">PRACTICAL BY DESIGN</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap mx-auto grid w-full max-w-[1200px]" id="home" aria-labelledby="hero-title">
      <div className="hero-copy reveal reveal-left">
        <Eyebrow>SEYQON TECH SOLUTIONS</Eyebrow>
        <h1 id="hero-title">Your ideas.<br /><span>Working solutions.</span></h1>
        <p className="hero-lede">We turn ideas into practical digital products, with clear communication and technology chosen for the job.</p>
        <div className="hero-actions flex flex-wrap items-center">
          <a className="button button-primary inline-flex items-center" href="#contact">Discuss your project <span aria-hidden="true">↗</span></a>
          <a className="text-link inline-flex items-center" href="#services">Explore what we do <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-note flex items-center"><span className="note-mark">S</span><p>Thoughtful development.<br /><strong>Useful outcomes.</strong></p></div>
      </div>
      <HeroVisual />
      <a className="hero-scroll" href="#services"><span /> Scroll to explore</a>
    </section>
  );
}

function ServiceVisual({ type }) {
  if (type === "web") return <div className="tile-visual visual-web" aria-hidden="true"><span className="schematic-path path-a" /><span className="schematic-path path-b" /><span className="schematic-path path-c" /><div className="schematic-node node-a"><i /><b>IDEA</b></div><div className="schematic-node node-b"><i /><b>DESIGN</b></div><div className="schematic-node node-c"><i /><b>BUILD</b></div><div className="schematic-core">S</div></div>;
  if (type === "mobile") return <div className="phone-visual" aria-hidden="true"><div className="phone-notch" /><div className="phone-screen"><span className="phone-orbit orbit-one" /><span className="phone-orbit orbit-two" /><span className="phone-mark">S</span><span className="phone-signal signal-one" /><span className="phone-signal signal-two" /></div></div>;
  if (type === "student") return <div className="price-display"><small>Projects starting at</small><strong>₹1,000<span>*</span></strong><i>Scope shapes the final quote</i></div>;
  if (type === "custom") return <div className="stack-visual" aria-hidden="true"><span className="stack-layer layer-back">DATA / API</span><span className="stack-layer layer-mid">YOUR WORKFLOW</span><span className="stack-layer layer-front">A BETTER FIT <b>+</b></span></div>;
  return <div className="specialist-visual" aria-hidden="true"><span className="specialist-ring ring-a" /><span className="specialist-ring ring-b" /><span className="specialist-core">AI<br /><small>POC</small></span><span className="specialist-tag">IMAGE / DATA / MODEL</span></div>;
}

function ServiceCard({ service }) {
  return (
    <article className={`service-tile ${service.className} reveal`}>
      <div className="tile-top"><span className="tile-index">{service.number}</span><span className="tile-arrow" aria-hidden="true">↗</span></div>
      <ServiceVisual type={service.visual} />
      <h3>{service.title}</h3><p>{service.description}</p>
      <a className="tile-link inline-flex items-center" href="#contact">{service.action} <span aria-hidden="true">↗</span></a>
    </article>
  );
}

function Services() {
  return (
    <section className="services section-wrap section-space mx-auto w-full max-w-[1200px]" id="services" aria-labelledby="services-title">
      <div className="section-heading reveal flex items-end justify-between">
        <div><Eyebrow>WHAT WE CAN BUILD</Eyebrow><h2 id="services-title">The right tools<br />for the <span>real problem.</span></h2></div>
        <p>Every project has a different starting point. We help define what matters, then build a solution around it.</p>
      </div>
      <div className="service-grid grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map((service) => <ServiceCard key={service.number} service={service} />)}</div>
      <p className="service-footnote">* College project pricing is a promotional starting point. Final pricing depends on scope, features, complexity, and agreed deliverables. Other services are quoted after requirements are understood.</p>
    </section>
  );
}

const processSteps = [
  ["01", "Understand the need", "We discuss users, goals, features, timeline, and budget before choosing a direction."],
  ["02", "Agree on the scope", "You get a clear view of deliverables, exclusions, milestones, revisions, and likely costs."],
  ["03", "Build and refine", "We implement the agreed solution, test the important paths, and share progress along the way."],
  ["04", "Demonstrate and hand over", "We walk through the result and provide the agreed code, setup notes, and support."],
];

function Approach() {
  return (
    <section className="approach section-space" id="approach" aria-labelledby="approach-title">
      <div className="section-wrap approach-wrap mx-auto grid w-full max-w-[1200px]">
        <div className="approach-heading reveal"><Eyebrow light>A CLEARER PROCESS</Eyebrow><h2 id="approach-title">Good work begins<br />with <span>good questions.</span></h2><p>We keep the process practical, transparent, and easy to follow from the first conversation to handover.</p><a className="button button-light inline-flex items-center" href="#contact">Start with a conversation <span aria-hidden="true">↗</span></a></div>
        <div className="process-list">{processSteps.map(([number, title, description], index) => <article className="process-step reveal" key={number}><span className="process-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span className="process-mark" aria-hidden="true">{index === 3 ? "↗" : "↘"}</span></article>)}</div>
        <div className="approach-watermark" aria-hidden="true">S</div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section-wrap section-space mx-auto grid w-full max-w-[1200px]" id="about" aria-labelledby="about-title">
      <div className="about-mark reveal"><img src="/assets/seyqon-logo-stacked.png" alt="" aria-hidden="true" /><span>TECHNOLOGY FOR A BRIGHTER TOMORROW</span></div>
      <div className="about-copy reveal"><Eyebrow>WHY SEYQON</Eyebrow><h2 id="about-title">Technology should<br />make things <span>possible.</span></h2><p className="about-lede">Our mission is to transform ideas into practical, reliable, and accessible digital solutions through software development, thoughtful design, and appropriate technology.</p><p>We are building Seyqon as a trusted technology brand for students, individuals, and businesses. That starts with honest conversations, useful work, and solutions that fit the need instead of adding complexity.</p><div className="value-list flex flex-wrap"><span>Practical innovation</span><span>Clear scope</span><span>Customer trust</span><span>Continuous learning</span></div></div>
    </section>
  );
}

function Work() {
  return (
    <section className="work section-wrap section-space mx-auto w-full max-w-[1200px]" id="work" aria-labelledby="work-title">
      <div className="work-panel glass-panel reveal grid items-center">
        <div className="work-copy"><Eyebrow>WORK THAT FITS THE BRIEF</Eyebrow><h2 id="work-title">No made-up case studies.<br /><span>Just a thoughtful start.</span></h2><p>We’re building a portfolio of verified Seyqon work. Until there’s work to show here, we’d rather talk about what you need and how we’d approach it.</p><a className="text-link inline-flex items-center" href="#contact">Tell us what you’re planning <span aria-hidden="true">↗</span></a></div>
        <div className="work-diagram" aria-hidden="true"><div className="diagram-line line-one" /><div className="diagram-line line-two" /><span className="diagram-node node-idea">IDEA</span><span className="diagram-node node-plan">PLAN</span><span className="diagram-node node-build">BUILD</span><span className="diagram-node node-use">IN USE</span><b className="diagram-center">S</b></div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState({ text: "", error: false });
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const invalidField = form.querySelector(":invalid");
    if (invalidField) {
      setStatus({ text: "Please complete the required fields and check the reference link format.", error: true });
      invalidField.focus();
      return;
    }
    if (!ENQUIRY_ENDPOINT) {
      setStatus({ text: "Your project outline is complete. This page is a local demo, so it has not been sent or stored. Connect an enquiry endpoint before launch to receive submissions.", error: false });
      return;
    }

    setSending(true);
    setStatus({ text: "Sending your enquiry…", error: false });
    try {
      const response = await fetch(ENQUIRY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      if (!response.ok) throw new Error("Enquiry submission failed");
      setStatus({ text: "Thanks. Your enquiry was sent successfully. We’ll review the details and follow up using the contact information you provided.", error: false });
      form.reset();
    } catch {
      setStatus({ text: "We couldn’t send your enquiry just now. Your details are still in this form; please try again later.", error: true });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="enquiry-form glass-panel reveal" onSubmit={handleSubmit} noValidate>
      <div className="form-heading"><div><span className="form-overline">PROJECT ENQUIRY</span><h3>Let’s get the brief started.</h3></div><span className="form-required">* Required</span></div>
      <div className="form-grid grid md:grid-cols-2">
        <label className="field"><span>Your name <i>*</i></span><input name="name" autoComplete="name" required placeholder="Name" /></label>
        <label className="field"><span>Email or phone <i>*</i></span><input name="contact" autoComplete="email" required placeholder="How should we reach you?" /></label>
        <label className="field"><span>Project category <i>*</i></span><select name="category" required defaultValue=""><option value="" disabled>Choose a category</option><option>College project support</option><option>Website</option><option>Web application</option><option>Mobile application</option><option>Custom software</option><option>AI / ML prototype</option><option>Technical support</option><option>Not sure yet</option></select></label>
        <label className="field"><span>Expected timeline</span><select name="timeline" defaultValue=""><option value="">Choose a timeline</option><option>As soon as practical</option><option>Within a month</option><option>1–3 months</option><option>Flexible</option></select></label>
        <label className="field field-wide"><span>What are you looking to build? <i>*</i></span><textarea name="description" rows="4" required placeholder="A short overview is enough to begin." /></label>
        <label className="field"><span>Budget range</span><select name="budget" defaultValue=""><option value="">Choose a range</option><option>Under ₹5,000</option><option>₹5,000–₹15,000</option><option>₹15,000–₹50,000</option><option>₹50,000+</option><option>Need guidance</option></select></label>
        <label className="field"><span>Reference link <small>Optional</small></span><input name="reference" type="url" placeholder="https://" /></label>
      </div>
      <div className="form-submit"><button className="button button-primary inline-flex items-center" type="submit" disabled={sending}>{sending ? "Sending…" : <>Review enquiry <span aria-hidden="true">↗</span></>}</button><p>This form currently runs as a local demo. It does not send or store your details.</p></div>
      <div className={`form-status ${status.text ? "is-visible" : ""} ${status.error ? "is-error" : ""}`} role="status" aria-live="polite">{status.text}</div>
    </form>
  );
}

function Contact() {
  return (
    <section className="contact section-wrap section-space mx-auto grid w-full max-w-[1200px]" id="contact" aria-labelledby="contact-title">
      <div className="contact-intro reveal"><Eyebrow>YOUR NEXT STEP</Eyebrow><h2 id="contact-title">Have an idea<br />taking <span>shape?</span></h2><p>Share the outline. We’ll start by understanding what you need and what a practical first step could look like.</p><div className="contact-aside"><span className="aside-symbol">↗</span><span>No obligation to have every detail figured out yet.</span></div></div>
      <ContactForm />
    </section>
  );
}

function Footer() {
  return <footer className="site-footer"><div className="footer-main section-wrap mx-auto grid w-full max-w-[1200px]"><a className="footer-brand" href="#home"><img src="/assets/seyqon-logo-horizontal.png" alt="Seyqon Tech Solutions" /></a><p>Your Ideas. Working Solutions.</p><a className="footer-up" href="#home">Back to top <span aria-hidden="true">↑</span></a></div><div className="footer-bottom section-wrap mx-auto flex w-full max-w-[1200px]"><span>© {new Date().getFullYear()} Seyqon Tech Solutions</span><span>Built around practical ideas.</span><a href="#services">Explore services ↗</a></div></footer>;
}

function App() {
  const [themeMode, setThemeMode] = useState(() => {
    try {
      const stored = localStorage.getItem("seyqon-theme");
      return stored === "dark" || stored === "light" ? stored : "system";
    }
    catch { return "system"; }
  });
  const [systemTheme, setSystemTheme] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const theme = themeMode === "system" ? systemTheme : themeMode;

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystemTheme = (event) => setSystemTheme(event.matches ? "dark" : "light");
    media.addEventListener("change", updateSystemTheme);
    return () => media.removeEventListener("change", updateSystemTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    if (themeMode === "system") {
      try { localStorage.removeItem("seyqon-theme"); } catch { /* Theme still works for this session. */ }
    } else {
      try { localStorage.setItem("seyqon-theme", themeMode); } catch { /* Theme still works for this session. */ }
    }
  }, [theme, themeMode]);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          activeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setThemeMode(theme === "dark" ? "light" : "dark");
  const useSystemTheme = () => setThemeMode("system");

  return <><a className="skip-link" href="#main">Skip to content</a><Header theme={theme} themeMode={themeMode} onToggleTheme={toggleTheme} onUseSystemTheme={useSystemTheme} /><main id="main"><Hero /><section className="intro-band section-wrap reveal mx-auto grid w-full max-w-[1200px]" aria-label="Company introduction"><p>Small beginnings.<br /><strong>Useful technology.</strong></p><p className="intro-text">From academic prototypes to business tools, good software starts with listening. We shape the scope, choose a sensible approach, and build toward a result you can use and understand.</p><div className="intro-stamp" aria-hidden="true"><span>IDEA</span><b>→</b><span>IMPACT</span></div></section><Services /><Approach /><About /><Work /><Contact /></main><Footer /></>;
}

export default App;
