import { useState } from "react";

export default function BreedImage({ breed, eager = false }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="ph" role="img" aria-label={`Photo placeholder for ${breed.name}`}>
        <div><b>{breed.name}</b>Photo coming soon</div>
      </div>
    );
  }
  return (
    <img
      className="bi"
      src={breed.image}
      alt={breed.alt}
      width="480"
      height="480"
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
