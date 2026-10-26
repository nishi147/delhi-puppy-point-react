import { Link } from "react-router-dom";
import { BIZ, waGeneral } from "../config/business.js";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fg">
          <div>
            <h3>{BIZ.name}</h3>
            <p>Breed discovery and puppy enquiries for families across Delhi NCR.</p>
            <a href={BIZ.tel}>{BIZ.phoneDisplay}</a>
            <a href={waGeneral()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
          <div>
            <h3>Popular breeds</h3>
            <Link to="/breeds/golden-retriever">Golden Retriever</Link>
            <Link to="/breeds/labrador-retriever">Labrador Retriever</Link>
            <Link to="/breeds/shih-tzu">Shih Tzu</Link>
            <Link to="/breeds/pomeranian">Pomeranian</Link>
          </div>
          <div>
            <h3>Quick links</h3>
            <Link to="/#breeds">All Breeds</Link>
            <Link to="/#why">Why Choose Us</Link>
            <Link to="/#faqs">FAQs</Link>
            <Link to="/#contact">Contact</Link>
          </div>
          <div>
            <h3>Service areas</h3>
            {BIZ.areas.map((a) => <a key={a}>{a}</a>)}
          </div>
        </div>
        <p className="note" style={{ marginTop: 24, color: "#aab3ac" }}>
          © {new Date().getFullYear()} {BIZ.name}. Breed information is educational. Photos on live listings must be of the actual puppies offered.
        </p>
      </div>
    </footer>
  );
}
