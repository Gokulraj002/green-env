import { Plus } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { services, alsoOffered } from '../../data/services.js';

export default function ServicesGrid() {
  return (
    <section className="section section--paper" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Everything a treatment plant needs, <em>under one roof.</em>
            </>
          }
        />

        <div className="services">
          {services.map(({ icon: Icon, title }, index) => (
            <Reveal as="article" key={title} className="service" delay={(index % 3) * 90}>
              <span className="service__icon">
                <Icon />
              </span>
              <h3>{title}</h3>
              <span className="service__index">{String(index + 1).padStart(2, '0')}</span>
            </Reveal>
          ))}
        </div>

        <Reveal className="also">
          <span className="also__label">Also</span>
          <ul>
            {alsoOffered.map((item) => (
              <li key={item}>
                <Plus size={15} /> {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
