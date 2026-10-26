// Single source of truth for contact details. Change the number here only.
export const BIZ = {
  name: "Delhi Puppy Point",
  phoneDisplay: "+91 98701 66623",
  tel: "tel:+919870166623",
  waNumber: "919870166623",
  areas: ["Delhi", "Noida", "Greater Noida", "Ghaziabad", "Gurugram", "Faridabad"],
};

export const waUrl = (msg) => `https://wa.me/${BIZ.waNumber}?text=${encodeURIComponent(msg)}`;
export const waGeneral = () => waUrl("Hi Delhi Puppy Point, I would like to enquire about puppies.");
export const waBreed = (name) =>
  waUrl(`Hi Delhi Puppy Point, I am interested in the ${name} breed. Please share current availability, pricing, health records, and further details.`);
