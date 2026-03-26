import { useEffect, useState } from "react";

const serviceHighlights = [
  {
    label: "Core Security",
    title: "Guarding Services",
    copy: "Manned guarding, patrols, access control, and event security for corporate, residential, institutional, and public environments.",
  },
  {
    label: "Technology",
    title: "Electronic Security",
    copy: "CCTV surveillance, intruder alarms, access control, and perimeter systems planned around site conditions and operational risk.",
  },
  {
    label: "Executive Detail",
    title: "Executive Protection",
    copy: "VIP or VVIP protection, bodyguards, and specialist officer support for sensitive movement and high-profile assignments.",
  },
  {
    label: "Logistics",
    title: "Logistics Support",
    copy: "Courier services, cash management, alarm response, and secure movement support delivered with accountability and reliability.",
  },
];

const valuePoints = [
  "Reliability through disciplined service delivery",
  "Integrity in conduct, supervision, and client engagement",
  "Innovation through practical security systems and planning",
  "Customer focus built around client needs and operating conditions",
];

const specialistUnits = [
  "K9 deployment for high-risk screening and deterrence",
  "Alarm response support for homes, offices, and institutions",
  "Bodyguard and VIP movement support for sensitive assignments",
  "Courier and secure movement support for accountable delivery",
];

const trustMetrics = [
  { value: "24/7", label: "Operational readiness" },
  { value: "Nairobi", label: "Head office and command base" },
  { value: "Multi-service", label: "Integrated manpower and technical support" },
  { value: "Survey-led", label: "Technical pricing for CCTV and access control" },
];

const careerRequirements = [
  "Valid national ID or other recognised identification",
  "Certificate of good conduct or readiness to provide one",
  "Recent CV with contact details and work history",
  "Academic and professional training certificates where applicable",
  "Physical fitness, discipline, and professional presentation",
  "Relevant experience for supervisory, technical, or specialist roles",
];

const galleryItems = [
  { title: "Guarding Team", image: "/media/guard-team.jpg" },
  { title: "Security Officer", image: "/media/security-officer.png" },
  { title: "K9 Services", image: "/media/k9-service.jpg" },
  { title: "Bodyguard Support", image: "/media/bodyguard.jpg" },
  { title: "Cash Management", image: "/media/cash-management.jpg" },
  { title: "Communications", image: "/media/radio-hero.jpg" },
];

const quotationRates = [
  ["One Security Guard", "Ksh. 15,500", "Ksh. 1,000", "Ksh. 350"],
  ["One Senior Guard", "Ksh. 18,000", "Ksh. 1,500", "Ksh. 450"],
  ["One CCTV Controller", "Ksh. 30,000", "Ksh. 2,000", "Ksh. 600"],
  ["One Security Officer", "Ksh. 30,000", "Ksh. 2,000", "Ksh. 700"],
  ["One Undercover Officer", "Ksh. 35,000", "Ksh. 2,500", "Ksh. 500"],
  ["One Dog & Handler", "Ksh. 38,000", "Ksh. 2,500", "Ksh. 450"],
  ["One Bodyguard", "Ksh. 45,000", "Ksh. 1,500", "Ksh. 800"],
  ["One Armed Security Officer", "Ksh. 93,000", "Ksh. 5,000", "Ksh. 5,000"],
];

const responseRates = [
  {
    area: "Nairobi, Mombasa and Kisumu",
    total: "Ksh. 41,500",
    rows: [
      ["Transmitter Rental", "Ksh. 12,500"],
      ["Deposit Fee", "Ksh. 10,000"],
      ["Annual CCK Fee", "Ksh. 8,500"],
      ["Monthly Response Fee", "Ksh. 10,500"],
    ],
  },
  {
    area: "Upcountry",
    total: "Ksh. 37,500",
    rows: [
      ["Transmitter Rental", "Ksh. 12,500"],
      ["Deposit Fee", "Ksh. 10,000"],
      ["Annual CCK Fee", "Ksh. 6,500"],
      ["Monthly Response Fee", "Ksh. 8,500"],
    ],
  },
];

const serviceOptions = [
  "Security Guarding",
  "Event Security",
  "VIP / VVIP Protection",
  "CCTV & Electronic Security",
  "Alarm Response",
  "K9 Services",
  "Courier Services",
  "Cash Management",
  "Access Control & Perimeter Security",
  "Custom Site Survey",
];

function BrandLockup({ compact = false, light = false }) {
  return (
    <div className={`brand-lockup${compact ? " compact" : ""}${light ? " light" : ""}`}>
      <div className="brand-lockup-mark">
        <img src="/media/cuda-logo.png" alt="CUDA logo" />
      </div>
      <div className="brand-lockup-copy">
        <strong>CUDA</strong>
        <span>Security & Logistics Services Ltd</span>
      </div>
    </div>
  );
}

export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const [form, setForm] = useState({
    service: serviceOptions[0],
    coverage: "Monthly",
    location: "Nairobi",
    name: "",
    contact: "",
    details: "",
  });
  const [careerForm, setCareerForm] = useState({
    role: "Security Guard",
    name: "",
    phone: "",
    email: "",
    location: "",
    experience: "",
    details: "",
  });

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setHeroReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll(".gallery-card");

    if (!items.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleCareerChange(event) {
    const { name, value } = event.target;
    setCareerForm((current) => ({ ...current, [name]: value }));
  }

  function handleQuoteSubmit(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Quotation Request: ${form.service}`);
    const body = encodeURIComponent(
      [
        `Service: ${form.service}`,
        `Coverage type: ${form.coverage}`,
        `Location: ${form.location}`,
        `Name: ${form.name}`,
        `Contact: ${form.contact}`,
        "",
        "Project details:",
        form.details,
      ].join("\n"),
    );
    window.location.href = `mailto:info@cudasls.co.ke?subject=${subject}&body=${body}`;
  }

  function handleCareerSubmit(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Job Application: ${careerForm.role}`);
    const body = encodeURIComponent(
      [
        `Role applying for: ${careerForm.role}`,
        `Full name: ${careerForm.name}`,
        `Phone: ${careerForm.phone}`,
        `Email: ${careerForm.email}`,
        `Location: ${careerForm.location}`,
        `Experience level: ${careerForm.experience}`,
        "",
        "Applicant details:",
        careerForm.details,
        "",
        "Kindly attach CV and supporting documents in the email response.",
      ].join("\n"),
    );
    window.location.href = `mailto:info@cudasls.co.ke?subject=${subject}&body=${body}`;
  }

  return (
    <div className="site-shell">
      {quoteOpen ? (
        <div className="modal-backdrop" onClick={() => setQuoteOpen(false)}>
          <div
            className="quote-modal modal-enter"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-title"
          >
            <div className="modal-side">
              <BrandLockup light />
              <p className="eyebrow">Quotation Request</p>
              <h2 id="quote-title">Tell CUDA what you need and our team will recommend the right deployment.</h2>
              <p>
                Quotations are guided by service type, duration, location, and operational scope. Site surveys remain
                available for CCTV, alarm systems, electric fencing, and access control projects.
              </p>
              <ul className="modal-points">
                <li>Formal quote request by email</li>
                <li>Fast follow-up from the CUDA team</li>
                <li>Survey-led pricing for technical projects</li>
              </ul>
            </div>

            <form className="modal-form" onSubmit={handleQuoteSubmit}>
              <label>
                Service required
                <select name="service" value={form.service} onChange={handleChange}>
                  {serviceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>

              <div className="form-grid">
                <label>
                  Coverage type
                  <select name="coverage" value={form.coverage} onChange={handleChange}>
                    <option>Monthly</option>
                    <option>Daily</option>
                    <option>Hourly</option>
                    <option>Weekend</option>
                    <option>Event-based</option>
                  </select>
                </label>
                <label>
                  Location
                  <input name="location" value={form.location} onChange={handleChange} placeholder="Nairobi, Kisumu..." />
                </label>
              </div>

              <div className="form-grid">
                <label>
                  Client name
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your name or company" />
                </label>
                <label>
                  Phone or email
                  <input name="contact" value={form.contact} onChange={handleChange} placeholder="+254..." />
                </label>
              </div>

              <label>
                Project details
                <textarea
                  name="details"
                  value={form.details}
                  onChange={handleChange}
                  placeholder="Describe the number of guards, dates, site type, equipment support, or technical needs."
                />
              </label>

              <div className="button-row">
                <button type="submit" className="btn btn-primary">
                  Send Request
                </button>
                <a className="btn btn-secondary" href="https://wa.me/254725766457" target="_blank" rel="noreferrer">
                  WhatsApp CUDA
                </a>
                <button type="button" className="btn btn-ghost" onClick={() => setQuoteOpen(false)}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {pricingOpen ? (
        <div className="modal-backdrop" onClick={() => setPricingOpen(false)}>
          <div
            className="quote-modal pricing-modal modal-enter"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="pricing-title"
          >
            <div className="modal-side">
              <BrandLockup light />
              <p className="eyebrow">Quotation Guide</p>
              <h2 id="pricing-title">Current guarding and response rates from the company quotation profile.</h2>
              <p>
                Technical services such as CCTV, intruder alarms, access control, and electric fencing should still be
                quoted after site survey by the technical team.
              </p>
            </div>

            <div className="modal-form pricing-modal-body">
              <div className="pricing-table-wrap">
                <table className="pricing-table">
                  <thead>
                    <tr>
                      <th>Service</th>
                      <th>Monthly</th>
                      <th>Daily</th>
                      <th>Hourly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quotationRates.map((row) => (
                      <tr key={row[0]}>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                        <td>{row[2]}</td>
                        <td>{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="response-cards">
                {responseRates.map((plan) => (
                  <article className="response-card" key={plan.area}>
                    <h3>{plan.area}</h3>
                    <ul>
                      {plan.rows.map((row) => (
                        <li key={row[0]}>
                          <span>{row[0]}</span>
                          <strong>{row[1]}</strong>
                        </li>
                      ))}
                    </ul>
                    <div className="response-total">
                      <span>Total</span>
                      <strong>{plan.total}</strong>
                    </div>
                  </article>
                ))}
              </div>

              <div className="button-row">
                <button type="button" className="btn btn-ghost" onClick={() => setPricingOpen(false)}>
                  Close Rates
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {careersOpen ? (
        <div className="modal-backdrop" onClick={() => setCareersOpen(false)}>
          <div
            className="quote-modal modal-enter"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="careers-title"
          >
            <div className="modal-side">
              <BrandLockup light />
              <p className="eyebrow">Careers</p>
              <h2 id="careers-title">Apply for opportunities in guarding, technical security, logistics, and specialist support.</h2>
              <p>
                CUDA can receive applications for current openings and general recruitment interest. Candidates can submit basic details here and then send CVs or supporting documents by email.
              </p>
              <div className="requirements-box">
                <strong>Basic application requirements</strong>
                <ul className="feature-list">
                  {careerRequirements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <ul className="modal-points">
                <li>Formal application intake</li>
                <li>Suitable for guards, drivers, technicians, handlers, and support staff</li>
                <li>CV and certificates can follow by email or WhatsApp guidance</li>
              </ul>
            </div>

            <form className="modal-form" onSubmit={handleCareerSubmit}>
              <label>
                Position applied for
                <select name="role" value={careerForm.role} onChange={handleCareerChange}>
                  <option>Security Guard</option>
                  <option>Senior Guard</option>
                  <option>Bodyguard / VIP Protection Officer</option>
                  <option>CCTV / Alarm Technician</option>
                  <option>K9 Handler</option>
                  <option>Courier / Logistics Support</option>
                  <option>General Recruitment</option>
                </select>
              </label>

              <div className="form-grid">
                <label>
                  Full name
                  <input name="name" value={careerForm.name} onChange={handleCareerChange} placeholder="Applicant name" />
                </label>
                <label>
                  Phone number
                  <input name="phone" value={careerForm.phone} onChange={handleCareerChange} placeholder="+254..." />
                </label>
              </div>

              <div className="form-grid">
                <label>
                  Email address
                  <input name="email" value={careerForm.email} onChange={handleCareerChange} placeholder="name@example.com" />
                </label>
                <label>
                  Current location
                  <input name="location" value={careerForm.location} onChange={handleCareerChange} placeholder="Nairobi, Kisumu..." />
                </label>
              </div>

              <label>
                Experience level
                <input name="experience" value={careerForm.experience} onChange={handleCareerChange} placeholder="Years of experience or key background" />
              </label>

              <label>
                Application details
                <textarea
                  name="details"
                  value={careerForm.details}
                  onChange={handleCareerChange}
                  placeholder="Briefly describe your experience, training, licences, security background, or the type of role you are seeking."
                />
              </label>

              <div className="button-row">
                <button type="submit" className="btn btn-primary">
                  Submit Application
                </button>
                <a className="btn btn-secondary" href="https://wa.me/254725766457" target="_blank" rel="noreferrer">
                  WhatsApp Careers
                </a>
                <button type="button" className="btn btn-ghost" onClick={() => setCareersOpen(false)}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      <div className="topbar">
        <div className="wrap topbar-inner">
          <div className="contact-strip">
            <span>info@cudasls.co.ke</span>
            <span>+254 725 766 457</span>
            <span>+254 705 150 605</span>
          </div>
          <div className="topbar-address">
            Nine Planets Apartment, Suite Plot 4, Kabarnet Gardens, Off Ngong Road, Nairobi
          </div>
        </div>
      </div>

      <header className="header">
        <div className="wrap header-inner">
          <a className="brand" href="#home">
            <BrandLockup compact />
          </a>

          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#standards">Standards</a>
            <a href="#gallery">Gallery</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact</a>
          </nav>

          <button type="button" className="menu-toggle" onClick={() => setMenuOpen((current) => !current)} aria-label="Open navigation menu">
            <span />
            <span />
            <span />
          </button>

          <button className="btn btn-primary header-quote" onClick={() => setQuoteOpen(true)}>
            Request a Quote
          </button>
        </div>

        {menuOpen ? (
          <div className="mobile-drawer-backdrop" onClick={() => setMenuOpen(false)}>
            <div className="mobile-nav mobile-nav-open" onClick={(event) => event.stopPropagation()}>
              <div className="mobile-nav-top">
                <BrandLockup compact />
                <button type="button" className="menu-close" onClick={() => setMenuOpen(false)} aria-label="Close navigation menu">
                  <span />
                  <span />
                </button>
              </div>

              <div className="mobile-nav-actions">
                <button
                  type="button"
                  className="btn btn-primary mobile-quote"
                  onClick={() => {
                    setMenuOpen(false);
                    setQuoteOpen(true);
                  }}
                >
                  Request a Quote
                </button>
                <button
                  type="button"
                  className="btn btn-secondary mobile-quote"
                  onClick={() => {
                    setMenuOpen(false);
                    setPricingOpen(true);
                  }}
                >
                  View Quotation
                </button>
                <button
                  type="button"
                  className="btn btn-secondary mobile-quote"
                  onClick={() => {
                    setMenuOpen(false);
                    setCareersOpen(true);
                  }}
                >
                  Careers
                </button>
              </div>

              <div className="mobile-nav-links">
                <a href="#home" onClick={() => setMenuOpen(false)}>
                  Home
                </a>
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  About
                </a>
                <a href="#services" onClick={() => setMenuOpen(false)}>
                  Services
                </a>
                <a href="#standards" onClick={() => setMenuOpen(false)}>
                  Standards
                </a>
                <a href="#gallery" onClick={() => setMenuOpen(false)}>
                  Gallery
                </a>
                <a href="#careers" onClick={() => setMenuOpen(false)}>
                  Careers
                </a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-pattern" />
          <div className="wrap hero-grid">
            <div className={`hero-copy hero-reveal${heroReady ? " is-visible" : ""}`}>
              <p className="eyebrow">CUDA Security & Logistics Services Ltd</p>
              <h1>Professional security and logistics support for businesses, institutions, residences, and events.</h1>
              <p className="hero-text">
                CUDA Security & Logistics Services Ltd delivers guarding, surveillance, executive protection, alarm response, K9 deployment, courier support, and cash management through disciplined personnel, structured supervision, and practical security planning.
              </p>

              <div className="hero-mobile-media">
                <img src="/media/guard-team.jpg" alt="CUDA guards on coordinated deployment" />
              </div>

              <div className="hero-trust-points">
                <span>Professional guarding and patrol deployment</span>
                <span>Technical surveys for CCTV and access control</span>
                <span>Executive protection and specialist response support</span>
              </div>

              <div className="button-row">
                <button className="btn btn-primary" onClick={() => setQuoteOpen(true)}>
                  Request a Quote
                </button>
                <a className="btn btn-secondary" href="#services">
                  Explore Services
                </a>
                <button className="btn btn-secondary" onClick={() => setPricingOpen(true)}>
                  View Quotation
                </button>
              </div>

              <div className="hero-metrics">
                {trustMetrics.map((item) => (
                  <article className="metric-card" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className={`hero-intro-card hero-reveal hero-reveal-delay${heroReady ? " is-visible" : ""}`}>
              <div className="hero-media-shell">
                <img src="/media/guard-team.jpg" alt="CUDA guards on coordinated deployment" />
                <div className="hero-badge-card">
                  <BrandLockup compact light />
                </div>
              </div>
              <div className="hero-intro-copy">
                <strong>Based in Nairobi and ready to support corporate, residential, institutional, event, and executive assignments.</strong>
                <span>Deployment planning can extend to Nairobi, Mombasa, Kisumu, and other locations depending on the service scope and client requirement.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="wrap two-column">
            <div className="about-copy">
              <p className="eyebrow">About CUDA</p>
              <h2>CUDA is built around professionalism, discipline, and dependable client service.</h2>
              <p className="section-copy">
                CUDA Security & Logistics Services Ltd serves clients who need reliable protection, responsible deployment, and practical coordination. The company combines manpower, supervision, and technical support to protect people, premises, assets, and daily operations.
              </p>
              <div className="about-note">
                <strong>Mission</strong>
                <span>To create secure environments through responsive service, disciplined personnel, and practical security planning.</span>
              </div>
            </div>

            <div className="value-grid">
              {valuePoints.map((item) => (
                <article className="value-card" key={item}>
                  <h3>{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="wrap">
            <p className="eyebrow">Services</p>
            <div className="section-heading">
              <h2>CUDA services are organized around guarding, technical security, executive support, and logistics assistance.</h2>
              <p>Clients may engage the company for a single assignment or for a broader arrangement that combines manpower, response, and technical support.</p>
            </div>

            <div className="services-grid">
              {serviceHighlights.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-card-body">
                    <span className="service-label">{service.label}</span>
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section specialist-section">
          <div className="wrap">
            <div className="specialist-panel">
              <div className="specialist-copy">
                <p className="eyebrow">Specialized Services</p>
                <h2>Specialized services support assignments that require higher control, faster response, or more sensitive handling.</h2>
                <p>
                  CUDA also supports clients through K9 services, VIP movement support, alarm response, and accountable delivery operations where reliability, discretion, and supervision matter.
                </p>
                <ul className="feature-list">
                  {specialistUnits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="specialist-visual">
                <img src="/media/bodyguard.jpg" alt="CUDA executive protection support" />
              </div>
            </div>
          </div>
        </section>

        <section className="section trust-band-section">
          <div className="wrap trust-band">
            <div>
              <p className="eyebrow">Why Choose CUDA</p>
              <h2>Clients choose CUDA when they need disciplined personnel, clear communication, and dependable service.</h2>
            </div>
            <div className="trust-band-copy">
              <p>CUDA combines integrity, readiness, supervision, and practical planning so clients can rely on stable support in both routine operations and sensitive assignments.</p>
            </div>
          </div>
        </section>

        <section className="section standards-section" id="standards">
          <div className="wrap two-column">
            <article className="training-copy">
              <p className="eyebrow">Standards & Training</p>
              <h2>Service standards are supported by guard readiness, supervision, turnout, and site-specific planning.</h2>
              <p>
                CUDA maintains service quality through guard preparation, field discipline, supervisory follow-up, and attention to presentation while on assignment. Technical projects are guided by surveys so recommendations match the client site and risk profile.
              </p>
              <ul className="feature-list">
                <li>Prepared personnel for guarding, patrol, and controlled-access assignments</li>
                <li>Formal turnout, discipline, and visible professionalism on site</li>
                <li>Supervision and follow-up aligned to client operations and reporting needs</li>
                <li>Survey-based recommendations for CCTV, intruder alarms, and access control</li>
              </ul>
            </article>

            <article className="training-visual">
              <img src="/media/uniform-team.png" alt="CUDA guards in formal uniform" />
            </article>
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="wrap">
            <p className="eyebrow">Gallery</p>
            <div className="section-heading">
              <h2>Selected visuals from the company profile and service presentation.</h2>
              <p>This gallery gives clients a clearer view of CUDA's guarding, specialist support, communications, and operational image without crowding the main sections.</p>
            </div>

            <div className="gallery-grid">
              {galleryItems.map((item, index) => (
                <figure
                  className="gallery-card"
                  key={item.title}
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <img src={item.image} alt={item.title} />
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section quote-link-section">
          <div className="wrap cta-panel">
            <div>
              <p className="eyebrow">Quotation Access</p>
              <h2>Quotation rates can be opened separately so the homepage stays focused on service information.</h2>
              <p>Review current guarding and response rates, then request site-specific pricing or technical survey support where needed.</p>
            </div>
            <div className="cta-actions">
              <button className="btn btn-primary" onClick={() => setPricingOpen(true)}>
                Open Quotation Rates
              </button>
              <button className="btn btn-secondary" onClick={() => setQuoteOpen(true)}>
                Request a Quote
              </button>
            </div>
          </div>
        </section>

        <section className="section careers-section" id="careers">
          <div className="wrap careers-panel">
            <div className="careers-copy">
              <p className="eyebrow">Careers</p>
              <h2>Career opportunities are available through a separate application panel.</h2>
              <p>
                CUDA can receive applications for guarding, technical security, logistics support, and specialist roles through a separate careers panel.
              </p>
              <div className="careers-points">
                <span>Security and patrol roles</span>
                <span>Technical and systems positions</span>
                <span>Executive and specialist support</span>
              </div>
            </div>

            <div className="careers-card">
              <strong>Careers Access</strong>
              <p>
                Open the careers panel to view requirements, role options, and the formal application form instead of placing all recruitment details directly on the homepage.
              </p>
              <div className="button-row">
                <button className="btn btn-primary" onClick={() => setCareersOpen(true)}>
                  Apply for a Position
                </button>
                <button className="btn btn-secondary" onClick={() => setCareersOpen(true)}>
                  View Requirements
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-preview-section">
          <div className="wrap contact-preview">
            <div className="contact-preview-copy">
              <p className="eyebrow">Contact Preview</p>
              <h2>Speak with CUDA about guarding, executive support, technical systems, or quotation planning.</h2>
              <p>CUDA handles enquiries for guarding assignments, event security, executive protection, CCTV and alarm projects, courier support, and response planning from its Nairobi office.</p>
            </div>

            <div className="contact-preview-card">
              <strong>CUDA Security & Logistics Services Ltd</strong>
              <span>Nine Planets Apartment, Suite Plot 4, Kabarnet Gardens, Off Ngong Road, Nairobi</span>
              <a href="mailto:info@cudasls.co.ke">info@cudasls.co.ke</a>
              <a href="tel:+254725766457">+254 725 766 457</a>
              <a href="tel:+254705150605">+254 705 150 605</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <BrandLockup light />
            <p>
              CUDA Security & Logistics Services Ltd provides guarding, surveillance, response, and logistics support with a professional standard of service.
            </p>
            <div className="footer-badge">Professional protection, response, and logistics support</div>
          </div>

          <div>
            <h3>Core Services</h3>
            <ul>
              <li>Guarding Services</li>
              <li>Electronic Security</li>
              <li>VIP Protection</li>
              <li>K9 Services</li>
              <li>Cash Management</li>
            </ul>
          </div>

          <div>
            <h3>Contact Information</h3>
            <ul className="contact-list">
              <li>Nine Planets Apartment, Suite Plot 4, Kabarnet Gardens, Off Ngong Road, Opposite The Sudan Embassy</li>
              <li>P.O. BOX 199-00515, Nairobi</li>
              <li>
                <a href="mailto:info@cudasls.co.ke">info@cudasls.co.ke</a>
              </li>
              <li>
                <a href="tel:+254725766457">+254 725 766 457</a>
              </li>
              <li>
                <a href="tel:+254705150605">+254 705 150 605</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Quick Actions</h3>
            <div className="footer-actions">
              <button className="btn btn-primary" onClick={() => setQuoteOpen(true)}>
                Request a Quote
              </button>
              <button className="btn btn-secondary footer-whatsapp" onClick={() => setCareersOpen(true)}>
                Careers
              </button>
              <button className="btn btn-secondary footer-whatsapp" onClick={() => setPricingOpen(true)}>
                View Quotation
              </button>
              <a className="btn btn-secondary footer-whatsapp" href="https://wa.me/254725766457" target="_blank" rel="noreferrer">
                WhatsApp Team
              </a>
            </div>
          </div>
        </div>

        <div className="wrap footer-bottom">
          <span>Copyright 2026 CUDA Security & Logistics Services Ltd. All rights reserved.</span>
          <span>Comprehensive Security Solutions, Trusted & True.</span>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/254725766457"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with CUDA on WhatsApp"
      >
        WhatsApp
      </a>
    </div>
  );
}
