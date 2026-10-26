import { Link } from "react-router-dom";
import { BIZ, waGeneral } from "../config/business.js";
import { heroImages, heroPositions } from "../data/hero.js";

export default function Hero() {
  return (
    <section>
      <div className="wrap hero fade">
        <div>
          <div className="eye">PUPPY ENQUIRIES ACROSS DELHI NCR</div>
          <h1>Find Your Perfect Furry Companion in Delhi NCR</h1>
          <p>
            Delhi Puppy Point serves families across Delhi, Noida, Greater Noida, Ghaziabad, Gurugram and Faridabad.
            Explore popular breeds and get in touch to learn about current availability, breed characteristics and care requirements.
          </p>
          <div className="chips">
            {BIZ.areas.map((a) => <span key={a}>📍 {a}</span>)}
          </div>
          <p className="row">
            <Link className="btn" to="/#breeds">Explore Dog Breeds</Link>
            <a className="btn o" href={waGeneral()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          </p>
          <p><a className="serif" href={BIZ.tel} style={{ fontSize: "1.2rem", textDecoration: "none" }}>Call {BIZ.phoneDisplay}</a></p>
        </div>
        <div>
          <div className="hc" role="group" aria-label="Puppy photographs">
            {heroImages.map((x, i) => (
              <figure key={x.src}>
                <img src={x.src} alt={x.alt} width="720" height="960" style={{ objectPosition: heroPositions[i] }} loading={i ? "lazy" : "eager"} />
              </figure>
            ))}
          </div>
          <p className="note" style={{ textAlign: "center", margin: "10px 0 0" }}>
            Photos are examples. Ask us about current availability.
          </p>
        </div>
      </div>
    </section>
  );
}
