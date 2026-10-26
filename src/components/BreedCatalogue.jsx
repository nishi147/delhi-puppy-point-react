import { useMemo, useState } from "react";
import BreedCard from "./BreedCard.jsx";
import { breeds } from "../data/breeds.js";

export default function BreedCatalogue() {
  const [q, setQ] = useState("");
  const [size, setSize] = useState("");
  const [groom, setGroom] = useState("");
  const [act, setAct] = useState("");

  const list = useMemo(
    () =>
      breeds
        .filter(
          (b) =>
            b.name.toLowerCase().includes(q.toLowerCase()) &&
            (!size || b.size.startsWith(size)) &&
            (!groom || b.groom === groom) &&
            (!act || b.act === act)
        )
        .sort((a, b) => a.name.localeCompare(b.name)),
    [q, size, groom, act]
  );

  return (
    <section className="alt" id="breeds">
      <div className="wrap">
        <h2>Meet Our Adorable Breeds</h2>
        <p>Discover different personalities, sizes, and care needs to find a companion that fits your lifestyle.</p>
        <div className="filters">
          <input type="search" placeholder="Search breed name" aria-label="Search breed" value={q} onChange={(e) => setQ(e.target.value)} />
          <select aria-label="Size" value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="">Any size</option><option>Small</option><option>Medium</option><option>Large</option>
          </select>
          <select aria-label="Grooming" value={groom} onChange={(e) => setGroom(e.target.value)}>
            <option value="">Any grooming</option><option>Low</option><option>Low-Moderate</option><option>Moderate</option><option>High</option>
          </select>
          <select aria-label="Activity" value={act} onChange={(e) => setAct(e.target.value)}>
            <option value="">Any activity</option><option>Low</option><option>Moderate</option><option>High</option>
          </select>
        </div>
        <div className="grid bg2">
          {list.length ? (
            list.map((b) => <BreedCard key={b.slug} breed={b} />)
          ) : (
            <div className="panel">No breeds match your search. Try clearing a filter, or <a href="/#contact">ask us directly</a>.</div>
          )}
        </div>
        <p className="note">Breed listings are educational and do not guarantee that puppies are currently available. Photos are illustrative of the breed.</p>
      </div>
    </section>
  );
}
