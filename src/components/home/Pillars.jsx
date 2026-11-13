import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { pillars } from '../../data/services.js';
import clarifiersImg from '../../assets/images/clarifiers.webp';
import technicianImg from '../../assets/images/technician.webp';
import constructionImg from '../../assets/images/construction.webp';

// Photos in the same order as the pillars data.
const photos = [
  { src: clarifiersImg, alt: 'Aerial view of clarifier tanks at a treatment plant' },
  { src: technicianImg, alt: 'Technician in a hard hat working on plant equipment' },
  { src: constructionImg, alt: 'Workers on a concrete construction site' },
];

export default function Pillars() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          split
          eyebrow="How we help"
          title={
            <>
              Three ways we take the plant <em>off your plate.</em>
            </>
          }
          lead="Whether you need the whole plant operated, trained people on your shift roster, or a new plant built, the work is handled by one accountable team."
        />

        <div className="pillars">
          {pillars.map(({ icon: Icon, title, text }, index) => (
            <Reveal as="article" key={title} className="pillar" delay={index * 110}>
              <figure className="pillar__media">
                <img src={photos[index].src} alt={photos[index].alt} loading="lazy" />
                <span className="pillar__num">0{index + 1}</span>
              </figure>
              <div className="pillar__body">
                <span className="pillar__icon">
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
