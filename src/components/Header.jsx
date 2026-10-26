import { useState } from "react";
import { Link } from "react-router-dom";
import { BIZ, waGeneral } from "../config/business.js";

const links = [
  ["Home", "/"],
  ["Dog Breeds", "/#breeds"],
  ["About Us", "/#about"],
  ["Why Choose Us", "/#why"],
  ["FAQs", "/#faqs"],
  ["Contact", "/#contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="wrap">
        <Link className="logo" to="/">{BIZ.name}</Link>
        <button id="mb" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
        <div className={"links" + (open ? " open" : "")} onClick={() => setOpen(false)}>
          {links.map(([label, to]) => (
            <Link key={label} to={to}>{label}</Link>
          ))}
        </div>
        <a className="btn sm hide-m" href={BIZ.tel}>Call</a>
        <a className="btn sm wa hide-m" href={waGeneral()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
    </nav>
  );
}
