import { useState } from "react";
import { breeds } from "../data/breeds.js";
import { waUrl } from "../config/business.js";

const MOBILE = /^(\+91|91|0)?[6-9]\d{9}$/;

export default function EnquiryForm({ defaultBreed = "" }) {
  const [v, setV] = useState({ n: "", p: "", b: defaultBreed, c: "", m: "", k: false });
  const [err, setErr] = useState({});
  const set = (k) => (e) => setV({ ...v, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const x = {};
    if (v.n.trim().length < 2) x.n = "Please enter your full name.";
    if (!MOBILE.test(v.p.replace(/[\s-]/g, ""))) x.p = "Enter a valid 10-digit Indian mobile number.";
    if (!v.c.trim()) x.c = "Please enter your city or locality.";
    if (!v.k) x.k = "Please tick consent so we may contact you.";
    setErr(x);
    if (Object.keys(x).length) return;
    const msg = `Hi Delhi Puppy Point, I am ${v.n.trim()} from ${v.c.trim()} (phone ${v.p.trim()}). I am interested in ${v.b || "a puppy (breed undecided)"}. ${v.m.trim()} Please share current availability, pricing, health records, and details.`;
    window.open(waUrl(msg), "_blank", "noopener");
  };

  return (
    <form className="f panel" onSubmit={submit} noValidate>
      <div>
        <label htmlFor="n">Full name</label>
        <input id="n" autoComplete="name" value={v.n} onChange={set("n")} aria-invalid={!!err.n} />
        <div className="err">{err.n}</div>
      </div>
      <div>
        <label htmlFor="p">Mobile number</label>
        <input id="p" inputMode="tel" autoComplete="tel" placeholder="10-digit Indian mobile" value={v.p} onChange={set("p")} aria-invalid={!!err.p} />
        <div className="err">{err.p}</div>
      </div>
      <div>
        <label htmlFor="b">Preferred breed</label>
        <select id="b" value={v.b} onChange={set("b")}>
          <option value="">Not sure yet</option>
          {breeds.map((b) => <option key={b.slug}>{b.name}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="c">City or locality</label>
        <input id="c" value={v.c} onChange={set("c")} aria-invalid={!!err.c} />
        <div className="err">{err.c}</div>
      </div>
      <div className="full">
        <label htmlFor="m">Message</label>
        <textarea id="m" rows="3" value={v.m} onChange={set("m")} />
      </div>
      <div className="full">
        <label>
          <input type="checkbox" style={{ width: "auto" }} checked={v.k} onChange={set("k")} /> I agree to be contacted about this enquiry.
        </label>
        <div className="err">{err.k}</div>
      </div>
      <div className="full">
        <button className="btn wa" type="submit">Send enquiry on WhatsApp</button>{" "}
        <span className="note">Enquiries are sent via WhatsApp; nothing is stored on this site.</span>
      </div>
    </form>
  );
}
