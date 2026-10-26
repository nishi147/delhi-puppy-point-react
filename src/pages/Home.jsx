import Hero from "../components/Hero.jsx";
import BreedCatalogue from "../components/BreedCatalogue.jsx";
import Matcher from "../components/Matcher.jsx";
import EnquiryForm from "../components/EnquiryForm.jsx";
import { Why, HowItWorks, About, Coverage, FAQ, FinalCTA } from "../components/Sections.jsx";
import usePageMeta from "../hooks/usePageMeta.js";

export default function Home() {
  usePageMeta(
    "Delhi Puppy Point – Dog Breeds & Puppy Enquiries in Delhi NCR",
    "Explore popular dog breeds and enquire with Delhi Puppy Point about current availability across Delhi, Noida, Greater Noida, Ghaziabad, Gurugram and Faridabad."
  );
  return (
    <>
      <Hero />
      <BreedCatalogue />
      <Why />
      <Matcher />
      <HowItWorks />
      <About />
      <Coverage />
      <FAQ />
      <section id="contact">
        <div className="wrap">
          <h2>Send an Enquiry</h2>
          <EnquiryForm />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
