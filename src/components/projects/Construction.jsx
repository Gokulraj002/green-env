import { Factory, Hospital } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import ImageBanner from '../ui/ImageBanner.jsx';
import { construction } from '../../data/projects.js';
import rebarImg from '../../assets/images/rebar.webp';

const groups = [
  { icon: Hospital, title: 'Hospitals and nursing homes', items: construction.hospitals },
  { icon: Factory, title: 'Industry', items: construction.industry },
];

export default function Construction() {
  return (
    <section className="section" id="construction">
      <div className="container">
        <SectionHeading
          split
          eyebrow="Construction"
          title={
            <>
              ETP and STP plants, <em>built from the ground up.</em>
            </>
          }
          lead="Civil, electrical and mechanical works for new effluent and sewage treatment plants."
        />

        <ImageBanner src={rebarImg} alt="Worker inspecting steel reinforcement on a construction site" />

        <div className="build">
          {groups.map(({ icon: Icon, title, items }, index) => (
            <Reveal as="article" key={title} className="build__card" delay={index * 120}>
              <header>
                <Icon />
                <h3>{title}</h3>
              </header>
              <ol>
                {items.map((item, i) => (
                  <li key={item}>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
