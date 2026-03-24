import { useState } from "react";

const serviceHighlights = [
  {
    title: "Physical Security",
    label: "Guarding Services",
    copy:
      "Manned guarding, access control, patrol services, and event security for corporate, residential, institutional, and public environments.",
    image: "/media/guard-team.jpg",
  },
  {
    title: "Electronic Security",
    label: "Technical Security",
    copy:
      "CCTV surveillance, intruder alarms, perimeter security, and access control systems planned around site requirements and operational risk.",
    image: "/media/security-officer.png",
  },
  {
    title: "Executive Protection",
    label: "Specialized Protection",
    copy:
      "VIP or VVIP protection, close protection support, and professional officer deployment for sensitive movement and high-profile assignments.",
    image: "/media/bodyguard.jpg",
  },
  {
    title: "Secure Logistics",
    label: "Logistics Support",
    copy:
      "Courier services, cash management, and controlled movement support for clients who require reliability, discretion, and accountability.",
    image: "/media/cash-management.jpg",
  },
];

const specialistUnits = [
  {
    title: "K9 Services",
    copy: "Dog-and-handler deployment for deterrence, patrol reinforcement, crowd control support, and sensitive site coverage.",
    image: "/media/k9-service.jpg",
  },
  {
    title: "Alarm Response",
    copy: "Response support structured for Nairobi, Mombasa, Kisumu, and upcountry coverage in line with the quotation profile.",
    image: "/media/guard-team.jpg",
  },
  {
    title: "Bodyguards & Officers",
    copy: "Bodyguards, undercover officers, senior guards, CCTV controllers, and armed or unarmed officers assigned to operational need.",
    image: "/media/security-officer.png",
  },
];

const values = [
  {
    title: "Reliability",
    stat: "Dependable",
    copy: "Consistent security support built around readiness, supervision, and disciplined field execution.",
  },
  {
    title: "Integrity",
    stat: "Trusted",
    copy: "Transparent engagement, ethical conduct, and responsible service delivery across every client assignment.",
  },
  {
    title: "Innovation",
    stat: "Adaptive",
    copy: "Modern security thinking that combines field presence with technical systems and practical risk planning.",
  },
  {
    title: "Customer Focus",
    stat: "Responsive",
    copy: "Services shaped around client needs, environment, urgency, and long-term working relationships.",
  },
];

const proofItems = [
  {
    title: "Structured Training",
    copy: "CUDA's profile highlights formal guard training, discipline, parade standards, and operational readiness.",
  },
  {
    title: "Survey-Led Technical Work",
    copy: "CCTV, intruder alarms, access control, and electric fencing remain tied to site survey for more accurate delivery and pricing.",
  },
  {
    title: "Operational Coverage",
    copy: "The quotation profile references Nairobi, Mombasa, Kisumu, and upcountry support, reinforcing broader deployment capability.",
  },
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
  "Cybersecurity Support",
  "Custom Site Survey",
];

const trustPoints = [
  "Comprehensive Security Solutions, Trusted & True.",
  "Professional guarding, electronic security, and executive protection",
  "Survey-led technical quotation for systems and perimeter solutions",
  "Corporate, residential, institutional, and event deployment support",
];

const faqs = [
  {
    question: "How does CUDA issue quotations?",
    answer:
      "CUDA quotes monthly, daily, hourly, weekend, and event-based coverage. Technical installations are quoted after survey by the technical team.",
  },
  {
    question: "Which specialist services are available?",
    answer:
      "CUDA supports VIP or VVIP protection, K9 deployment, bodyguards, undercover officers, CCTV controllers, and armed or unarmed officer cover.",
  },
  {
    question: "Do technical security projects require a survey?",
    answer:
      "Yes. CCTV, intruder alarms, access control, and electric fencing should be surveyed before final quotation and deployment planning.",
  },
  {
    question: "Where is CUDA located?",
    answer:
      "CUDA is based at Nine Planets Apartment, Suite Plot 4, Kabarnet Gardens, Off Ngong Road, Opposite The Sudan Embassy, Nairobi.",
  },
];

export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [form, setForm] = useState({
    service: serviceOptions[0],
    coverage: "Monthly",
    location: "Nairobi",
    name: "",
    contact: "",
    details: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
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

  return (
    <div className="site-shell">
      {quoteOpen ? (
        <div className="modal-backdrop" onClick={() => setQuoteOpen(false)}>
          <div
            className="quote-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-title"
          >
            <div className="modal-side">
              <img className="modal-logo" src="/media/cuda-logo.png" alt="CUDA Security and Logistics logo" />
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
            <img src="/media/cuda-logo.png" alt="CUDA logo" />
            <div>
              <strong>CUDA</strong>
              <span>Security & Logistics Services Ltd</span>
            </div>
          </a>

          <nav className="nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#standards">Standards</a>
            <a href="#pricing">Quotation</a>
            <a href="#contact">Contact</a>
          </nav>

          <button className="btn btn-primary" onClick={() => setQuoteOpen(true)}>
            Request a Quote
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-pattern" />
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">CUDA Security & Logistics Services Ltd</p>
              <h1>Comprehensive Security Solutions, Trusted & True.</h1>
              <p className="hero-text">
                CUDA provides professional guarding, electronic security, executive protection, K9 support, alarm response,
                courier services, and cash management for clients who require disciplined and dependable service.
              </p>
              <div className="button-row">
                <button className="btn btn-primary" onClick={() => setQuoteOpen(true)}>
                  Request a Quote
                </button>
                <a className="btn btn-secondary" href="#services">
                  View Services
                </a>
              </div>

              <div className="trust-grid">
                {trustPoints.map((item) => (
                  <div key={item} className="trust-card">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual hero-visual-pro">
              <div className="hero-card hero-card-team">
                <img src="/media/guard-team.jpg" alt="CUDA guard team" />
              </div>

              <div className="hero-visual-bottom">
                <div className="hero-card hero-card-portrait">
                  <img src="/media/security-officer.png" alt="CUDA security officer" />
                </div>

                <div className="hero-info-panel">
                  <p className="hero-info-label">Operational Focus</p>
                  <h3>Professional guarding, specialist protection, and survey-led technical security support.</h3>
                  <ul>
                    <li>Guarding and patrol services</li>
                    <li>Electronic security systems</li>
                    <li>VIP, K9, and alarm response support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap intro-grid">
            <article className="intro-panel dark">
              <p className="eyebrow">Overview</p>
              <h2>Professional security support built around discipline, integrity, and client confidence.</h2>
              <p>
                CUDA Security and Logistics Services Ltd is a provider of comprehensive security solutions dedicated to
                safeguarding individuals, businesses, institutions, and assets through professionalism, innovation, and customer focus.
              </p>
              <div className="overview-panel-media">
                <img src="/media/guard-team.jpg" alt="CUDA guard team" />
                <div className="overview-panel-caption">
                  <strong>Field-ready professional teams</strong>
                  <span>Guarding, supervision, and operational presence delivered with discipline and consistency.</span>
                </div>
              </div>
            </article>

            <article className="intro-panel brand-panel">
              <div className="brand-panel-top">
                <img className="brand-panel-logo" src="/media/cuda-logo.png" alt="CUDA logo" />
                <div>
                  <p className="eyebrow">Trusted Profile</p>
                  <h3>Security and logistics support structured for real operational environments.</h3>
                </div>
              </div>

              <div className="brand-panel-grid">
                <div className="brand-point">
                  <strong>Location</strong>
                  <span>Ngong Road, Nairobi</span>
                </div>
                <div className="brand-point">
                  <strong>Response</strong>
                  <span>Nairobi, Mombasa, Kisumu, Upcountry</span>
                </div>
                <div className="brand-point">
                  <strong>Coverage</strong>
                  <span>Guarding, systems, protection, logistics</span>
                </div>
                <div className="brand-point">
                  <strong>Contact</strong>
                  <span>info@cudasls.co.ke</span>
                </div>
              </div>

              <div className="brand-panel-media">
                <div className="brand-panel-summary">
                  <div className="summary-row">
                    <strong>Company</strong>
                    <span>CUDA Security & Logistics Services Ltd</span>
                  </div>
                  <div className="summary-row">
                    <strong>Coverage</strong>
                    <span>Guarding, electronic security, executive protection, K9, alarm response, courier, and cash management</span>
                  </div>
                  <div className="summary-row">
                    <strong>Service Areas</strong>
                    <span>Nairobi, Mombasa, Kisumu, and upcountry support</span>
                  </div>
                  <div className="summary-row">
                    <strong>Technical Work</strong>
                    <span>Survey-led quotation for CCTV, intruder alarms, access control, and electric fencing</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-tight">
          <div className="wrap two-column">
            <div className="about-copy">
              <p className="eyebrow">Mission</p>
              <h2>Create a secure environment for every client through responsive service and professional execution.</h2>
              <p className="section-copy">
                CUDA's mission is to deliver dependable security solutions with discipline, operational clarity, and a service approach that supports long-term trust.
              </p>
              <div className="about-note">
                <strong>What defines CUDA:</strong>
                <span>
                  A practical mix of trained personnel, technical security support, and client-led deployment planning.
                </span>
              </div>
            </div>

            <div className="value-grid">
              {values.map((value) => (
                <article className="value-card" key={value.title}>
                  <span className="value-stat">{value.stat}</span>
                  <h3>{value.title}</h3>
                  <p>{value.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="wrap">
            <p className="eyebrow">Services</p>
            <div className="section-heading">
              <h2>Integrated services arranged for faster decision-making and stronger client confidence.</h2>
              <p>CUDA's service structure combines manpower, specialist protection, and technical systems under one coordinated offering.</p>
            </div>

            <div className="services-grid">
              {serviceHighlights.map((service) => (
                <article className="service-card" key={service.title}>
                  <img src={service.image} alt={service.title} />
                  <div className="service-card-body">
                    <span className="service-label">{service.label}</span>
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                    <div className="service-link">Tailored deployment planning</div>
                  </div>
                </article>
              ))}
            </div>

            <div className="coverage-cloud">
              <span>Manned Guarding</span>
              <span>Access Control</span>
              <span>Patrol Services</span>
              <span>Event Security</span>
              <span>CCTV Surveillance</span>
              <span>Intruder Alarm Systems</span>
              <span>Perimeter Security</span>
              <span>VIP Protection</span>
              <span>K9 Services</span>
              <span>Alarm Response</span>
              <span>Courier Services</span>
              <span>Cash Management</span>
            </div>
          </div>
        </section>

        <section className="section specialist-section">
          <div className="wrap">
            <p className="eyebrow">Specialist Services</p>
            <div className="section-heading">
              <h2>Specialist protection and response services presented with clear operational focus.</h2>
              <p>CUDA also supports assignments that require closer control, stronger visibility, or specialist deployment.</p>
            </div>

            <div className="specialist-grid">
              {specialistUnits.map((item) => (
                <article className="specialist-card" key={item.title}>
                  <img src={item.image} alt={item.title} />
                  <div className="specialist-card-body">
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section training-section" id="standards">
          <div className="wrap training-grid">
            <article className="training-copy">
              <p className="eyebrow">Standards & Training</p>
              <h2>Training, discipline, supervision, and presentation remain central to service quality.</h2>
              <p>
                CUDA's profile emphasizes training, guard readiness, welfare practices, parade standards, and structured service delivery.
                These are not background details. They are part of the service standard clients experience on the ground.
              </p>
              <ul className="feature-list">
                <li>Structured guard training aligned to professional security practice</li>
                <li>Strong uniform presentation and field discipline</li>
                <li>Client-first deployment planning and supervision</li>
                <li>Support for technical surveys before system quotations</li>
              </ul>
            </article>

            <article className="training-visual">
              <img src="/media/uniform-team.png" alt="CUDA guards in formal uniform" />
            </article>
          </div>
        </section>

        <section className="section proof-section">
          <div className="wrap">
            <p className="eyebrow">Why Choose CUDA</p>
            <div className="proof-grid">
              {proofItems.map((item) => (
                <article className="proof-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section pricing-section" id="pricing">
          <div className="wrap">
            <p className="eyebrow">Quotation Guide</p>
            <div className="section-heading">
              <h2>Quotation information presented in a clear and structured format.</h2>
              <p>
                Rates below are drawn from the company quotation page. Technical solutions such as CCTV, alarms, access
                control, and electric fencing should continue to be quoted after a site survey by the technical team.
              </p>
            </div>

            <div className="pricing-layout">
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
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="wrap">
            <p className="eyebrow">Frequently Asked Questions</p>
            <div className="faq-grid">
              {faqs.map((item) => (
                <article className="faq-card" key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <img src="/media/cuda-logo.png" alt="CUDA logo" />
            <p>
              CUDA Security & Logistics Services Ltd delivers integrated protection, surveillance, response, and logistics support with a professional client-facing standard.
            </p>
            <div className="footer-badge">Professional protection and logistics support</div>
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
            <h3>Quotation Basis</h3>
            <ul>
              <li>Monthly rates</li>
              <li>Daily rates</li>
              <li>Hourly rates</li>
              <li>Weekend and event coverage</li>
              <li>Survey-based technical pricing</li>
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
                <a href="https://www.cudasls.co.ke" target="_blank" rel="noreferrer">
                  www.cudasls.co.ke
                </a>
              </li>
              <li>
                <a href="tel:+254725766457">+254 725 766 457</a>
              </li>
              <li>
                <a href="tel:+254705150605">+254 705 150 605</a>
              </li>
            </ul>
            <div className="footer-actions">
              <a className="btn btn-primary" href="mailto:info@cudasls.co.ke">
                Email CUDA
              </a>
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
