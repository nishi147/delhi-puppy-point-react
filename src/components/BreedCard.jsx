import { Link } from "react-router-dom";
import BreedImage from "./BreedImage.jsx";
import { BIZ, waBreed } from "../config/business.js";

export default function BreedCard({ breed: b }) {
  return (
    <article className="card bcard fade">
      <Link className="cl" to={`/breeds/${b.slug}`}>
        <BreedImage breed={b} />
        <h3>{b.name}</h3>
      </Link>
      <div className="tags">{b.size} · Grooming: {b.groom} · Activity: {b.act}</div>
      <p className="dsc">{b.desc}</p>
      <div className="row">
        <Link className="btn sm dk" to={`/breeds/${b.slug}`}>View Details</Link>
        <a className="btn sm mo" href={BIZ.tel}>📞 Call Now</a>
        <a className="btn sm wa" href={waBreed(b.name)} target="_blank" rel="noopener noreferrer">
          💬 WhatsApp<span className="dk"> Enquiry</span>
        </a>
      </div>
    </article>
  );
}
