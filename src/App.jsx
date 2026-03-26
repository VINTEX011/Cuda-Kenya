import { useState } from "react";

const serviceHighlights = [
  {
    title: "Guarding Services",
    copy: "Manned guarding, patrols, access control, and event security for corporate, residential, institutional, and public environments.",
  },
  {
    title: "Electronic Security",
    copy: "CCTV surveillance, intruder alarms, access control, and perimeter systems planned around site conditions and operational risk.",
  },
  {
    title: "Executive Protection",
    copy: "VIP or VVIP protection, bodyguards, and specialist officer support for sensitive movement and high-profile assignments.",
  },
  {
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

export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

      {pricingOpen ? (
        <div className="modal-backdrop" onClick={() => setPricingOpen(false)}>
          <div
            className="quote-modal pricing-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="pricing-title"
          >
            <div className="modal-side">
              <img className="modal-logo" src="/media/cuda-logo.png" alt="CUDA Security and Logistics logo" />
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
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
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
          <div className="mobile-nav">
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
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
          </div>
        ) : null}
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-pattern" />
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="hero-brand-block">
                <img src="/media/cuda-logo.png" alt="CUDA logo" />
                <div>
                  <p className="eyebrow">Who We Are</p>
                  <h1>Comprehensive Security Solutions, Trusted & True.</h1>
                </div>
              </div>

              <p className="hero-text">
                CUDA Security & Logistics Services Ltd provides professional guarding, electronic security, executive protection,
                K9 support, alarm response, courier services, and cash management for clients who need dependable service and clear supervision.
              </p>

              <div className="button-row">
                <a className="btn btn-secondary" href="#services">
                  Explore Services
                </a>
                <button className="btn btn-primary" onClick={() => setQuoteOpen(true)}>
                  Request a Quote
                </button>
                <button className="btn btn-secondary" onClick={() => setPricingOpen(true)}>
                  View Quotation
                </button>
              </div>
            </div>

            <div className="hero-intro-card">
              <img src="/media/security-officer.png" alt="CUDA security officer" />
              <div className="hero-intro-copy">
                <strong>Professional security and logistics support for corporate, residential, institutional, and event environments.</strong>
                <span>Based in Nairobi with response and support planning extending to Mombasa, Kisumu, and upcountry assignments.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="wrap two-column">
            <div className="about-copy">
              <p className="eyebrow">About CUDA</p>
              <h2>Security support built around discipline, integrity, innovation, and customer focus.</h2>
              <p className="section-copy">
                CUDA is a provider of comprehensive security solutions dedicated to safeguarding individuals, businesses,
                institutions, and assets through professionalism, operational readiness, and client-centered service delivery.
              </p>
              <div className="about-note">
                <strong>Mission</strong>
                <span>Create secure environments for clients through responsive service, disciplined personnel, and practical security planning.</span>
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
              <h2>Core service areas organized for easier understanding and faster decision-making.</h2>
              <p>CUDA combines manpower, specialist protection, and technical systems in one coordinated service structure.</p>
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

        <section className="section gallery-section" id="gallery">
          <div className="wrap">
            <p className="eyebrow">Gallery</p>
            <div className="section-heading">
              <h2>Selected profile visuals showing guarding, protection, communications, and specialist support.</h2>
              <p>This section keeps the operational images together in one place instead of scattering them across every content block.</p>
            </div>

            <div className="gallery-grid">
              {galleryItems.map((item) => (
                <figure className="gallery-card" key={item.title}>
                  <img src={item.image} alt={item.title} />
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section standards-section">
          <div className="wrap two-column">
            <article className="training-copy">
              <p className="eyebrow">Standards & Training</p>
              <h2>Service quality is supported by training, supervision, discipline, and professional presentation.</h2>
              <p>
                CUDA's company profile highlights guard training, readiness, welfare practice, parade standards, and structured supervision.
                These are part of the service standard clients experience on site.
              </p>
              <ul className="feature-list">
                <li>Guard training aligned to professional security practice</li>
                <li>Uniform presentation and field discipline on deployment</li>
                <li>Supervision shaped around client site conditions</li>
                <li>Technical surveys before quotation where required</li>
              </ul>
            </article>

            <article className="training-visual">
              <img src="/media/uniform-team.png" alt="CUDA guards in formal uniform" />
            </article>
          </div>
        </section>

        <section className="section quote-link-section">
          <div className="wrap cta-panel">
            <div>
              <p className="eyebrow">Quotation Access</p>
              <h2>Pricing and alarm response rates can be opened separately to keep the homepage cleaner.</h2>
              <p>Use the quotation button to view current guarding rates and response pricing without cluttering the main page.</p>
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
