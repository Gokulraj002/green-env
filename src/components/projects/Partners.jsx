import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { partners } from '../../data/company.js';

export default function Partners() {
  return (
    <section className="section section--paper" id="partners">
      <div className="container">
        <SectionHeading
          eyebrow="Alliances"
          title={
            <>
              Partners and <em>sister concern.</em>
            </>
          }
        />

        <div className="partners">
          {partners.map((partner, index) => (
            <Reveal as="article" key={partner.name} className="partner" delay={index * 100}>
              <span className="partner__role">{partner.role}</span>
              <h3>{partner.name}</h3>
              <p className="partner__place">{partner.place}</p>
              {partner.note && <p>{partner.note}</p>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
