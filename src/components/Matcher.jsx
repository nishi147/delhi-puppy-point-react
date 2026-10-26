import { useState } from "react";
import { Link } from "react-router-dom";
import { breeds } from "../data/breeds.js";
import { waUrl } from "../config/business.js";

export default function Matcher() {
  const [s, setS] = useState("");
  const [h, setH] = useState("");
  const [a, setA] = useState("");
  const [c, setC] = useState("WhatsApp");
  const results = breeds.filter(
    (b) => (!s || b.size.startsWith(s)) && (!a || b.act === a) && (h !== "Apartment" || b.size === "Small" || b.size === "Medium")
  );
  const msg = `Hi Delhi Puppy Point, I am looking for a ${s || "any size"} dog, living in ${h || "any home type"}, with ${a || "any"} activity level (contact via ${c}). Which breeds would you suggest?`;

  return (
    <section className="alt">
      <div className="wrap">
        <h2>Not Sure Which Breed Is Right for You?</h2>
        <p>Tell us about your lifestyle and preferences to explore breeds that may suit your household.</p>
        <div className="f panel">
          <div>
            <label htmlFor="ms">Preferred size</label>
            <select id="ms" value={s} onChange={(e) => setS(e.target.value)}>
              <option value="">Any</option><option>Small</option><option>Medium</option><option>Large</option>
            </select>
          </div>
          <div>
            <label htmlFor="mh">Living environment</label>
            <select id="mh" value={h} onChange={(e) => setH(e.target.value)}>
              <option value="">Any</option><option>Apartment</option><option>House</option><option>House with outdoor space</option>
            </select>
          </div>
          <div>
            <label htmlFor="ma">Activity preference</label>
            <select id="ma" value={a} onChange={(e) => setA(e.target.value)}>
              <option value="">Any</option><option>Low</option><option>Moderate</option><option>High</option>
            </select>
          </div>
          <div>
            <label htmlFor="mc">Contact preference</label>
            <select id="mc" value={c} onChange={(e) => setC(e.target.value)}>
              <option>WhatsApp</option><option>Phone call</option>
            </select>
          </div>
          <div className="full" aria-live="polite">
            {results.length ? (
              <>
                <b>Breeds to explore:</b>{" "}
                {results.map((b, i) => (
                  <span key={b.slug}>{i > 0 && ", "}<Link to={`/breeds/${b.slug}`}>{b.name}</Link></span>
                ))}
              </>
            ) : (
              "No close matches; talk to us for guidance."
            )}
            <p className="note">These are starting points, not guarantees of suitability.</p>
            <a className="btn sm wa" href={waUrl(msg)} target="_blank" rel="noopener noreferrer">Discuss on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
