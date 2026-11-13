import { Check } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import StatCounter from '../ui/StatCounter.jsx';
import { team, registrations } from '../../data/company.js';
import teamImg from '../../assets/images/team.webp';

export default function Team() {
  return (
    <section className="section">
      <div className="container team">
        <Reveal className="team__lead">
          <figure className="team__photo">
            <img src={teamImg} alt="Plant workers in hard hats and safety vests" loading="lazy" />
            <StatCounter value={team.total} label="people on our team" className="team__total" />
          </figure>
          <span className="eyebrow">Our people</span>
          <h2>
            The people <em>behind every plant.</em>
          </h2>
          <p className="lead">
            Engineers, chemists and technicians form the core of a 498-strong team working across
            municipal and industrial plants.
          </p>
        </Reveal>

        <div className="team__groups">
          {team.groups.map((group, index) => (
            <Reveal as="article" key={group.title} className="team-card" delay={index * 90}>
              <strong>{group.count}</strong>
              <div>
                <h3>{group.title}</h3>
                <p>{group.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="container">
        <Reveal className="registrations">
          <div>
            <span className="eyebrow">Compliance</span>
            <h3>Eight statutory registrations held</h3>
          </div>
          <ul>
            {registrations.map((item) => (
              <li key={item}>
                <Check size={15} strokeWidth={3} /> {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
