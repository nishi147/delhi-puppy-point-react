import { Link } from "react-router-dom";
import { BIZ, waUrl, waGeneral } from "../config/business.js";
import { faqs } from "../data/faqs.js";

const why = [
  ["🤝", "Transparent Communication", "Clear answers to your questions."],
  ["🐕", "Breed Selection Guidance", "Help comparing sizes and care needs."],
  ["📋", "Health Records Information", "Ask for records and we will share what is available."],
  ["🏡", "Responsible Pet Ownership", "Preparation advice before you bring a dog home."],
  ["💬", "Enquiry Assistance", "Call or WhatsApp for quick responses."],
  ["📍", "Delhi NCR Service Coverage", "Enquiries across six NCR areas."],
];

export function Why() {
  return (
    <section id="why">
      <div className="wrap">
        <h2>Why Choose Delhi Puppy Point?</h2>
        <div className="grid">
          {why.map(([icon, t, d]) => (
            <div className="card" key={t}>
              <div style={{ fontSize: "1.6rem" }}>{icon}</div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  ["1", "Explore Breeds", "Browse breeds and compare care needs."],
  ["2", "Ask About Availability", "Contact us for current availability."],
  ["3", "Make an Informed Decision", "Review photos, records and costs first."],
];

export function HowItWorks() {
  return (
    <section id="how">
      <div className="wrap">
        <h2>How It Works</h2>
        <div className="grid">
          {steps.map(([n, t, d]) => (
            <div className="card" key={n}>
              <div className="serif" style={{ fontSize: "2rem", color: "var(--gold)" }}>{n}</div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="alt" id="about">
      <div className="wrap">
        <h2>Bringing Families and Their Future Companions Together</h2>
        <p style={{ maxWidth: 720 }}>
          We help you discover breeds, ask the right questions, and prepare thoughtfully. Enquiries are handled transparently,
          and we encourage responsible ownership: understand the commitment, check records, and plan for care before bringing a dog home.
        </p>
      </div>
    </section>
  );
}

export function Coverage() {
  return (
    <section>
      <div className="wrap">
        <h2>Serving Puppy Enquiries Across Delhi NCR</h2>
        <div className="areas">{BIZ.areas.map((a) => <span key={a}>{a}</span>)}</div>
        <p>
          <a className="btn" href={waUrl("Hi Delhi Puppy Point, please confirm availability and arrangements for my location.")} target="_blank" rel="noopener noreferrer">
            Confirm for my location
          </a>
        </p>
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section className="alt" id="faqs">
      <div className="wrap">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section>
      <div className="wrap">
        <div className="cta">
          <h2>Your Next Chapter Starts With a Paw</h2>
          <p>Explore breeds and contact our team to discuss your preferences and current availability.</p>
          <Link className="btn o" to="/#breeds">Browse Dog Breeds</Link>
          <a className="btn" href={BIZ.tel}>Call {BIZ.phoneDisplay}</a>
          <a className="btn wa" href={waGeneral()} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
        </div>
      </div>
    </section>
  );
}
