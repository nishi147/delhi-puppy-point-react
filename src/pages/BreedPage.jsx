import { Link, useParams } from "react-router-dom";
import BreedImage from "../components/BreedImage.jsx";
import BreedCard from "../components/BreedCard.jsx";
import EnquiryForm from "../components/EnquiryForm.jsx";
import NotFound from "./NotFound.jsx";
import { breeds } from "../data/breeds.js";
import { BIZ, waBreed } from "../config/business.js";
import usePageMeta from "../hooks/usePageMeta.js";

export default function BreedPage() {
  const { slug } = useParams();
  const b = breeds.find((x) => x.slug === slug);
  usePageMeta(
    b ? `${b.name} Puppy Enquiries in Delhi NCR | Delhi Puppy Point` : "Page not found | Delhi Puppy Point",
    b ? `Learn about the ${b.name}: size, grooming, exercise needs and how to enquire with Delhi Puppy Point across Delhi NCR.` : undefined
  );
  if (!b) return <NotFound />;
  const related = breeds.filter((x) => x.slug !== b.slug && (x.size === b.size || x.act === b.act)).slice(0, 3);

  return (
    <section>
      <div className="wrap fade">
        <div className="crumb"><Link to="/">Home</Link> › <Link to="/#breeds">Breeds</Link> › {b.name}</div>
        <div className="hero">
          <BreedImage breed={b} eager />
          <div>
            <h1>{b.name}</h1>
            <p>{b.desc}</p>
            <p>
              <b>Typical size:</b> {b.size}<br />
              <b>Grooming:</b> {b.groom}<br />
              <b>Exercise needs:</b> {b.act}
            </p>
            <p><b>Availability and pricing:</b> confirm with us directly; nothing is listed until verified.</p>
            <p className="row">
              <a className="btn wa" href={waBreed(b.name)} target="_blank" rel="noopener noreferrer">WhatsApp about {b.name}</a>
              <a className="btn o" href={BIZ.tel}>Call {BIZ.phoneDisplay}</a>
            </p>
          </div>
        </div>
        <h2 style={{ marginTop: 40 }}>Household considerations</h2>
        <p>Think about space, daily time for exercise, grooming budget, local climate and how long you can commit. Speak to your vet about breed-specific health needs.</p>
        <h2>Enquire about the {b.name}</h2>
        <EnquiryForm key={b.slug} defaultBreed={b.name} />
        <h2 style={{ marginTop: 40 }}>Related breeds</h2>
        <div className="grid bg2">{related.map((r) => <BreedCard key={r.slug} breed={r} />)}</div>
      </div>
    </section>
  );
}
