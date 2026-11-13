import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { manpowerSites } from '../../data/projects.js';

export default function ManpowerSites() {
  return (
    <section className="section section--paper" id="manpower">
      <div className="container">
        <SectionHeading
          split
          eyebrow="Manpower"
          title={
            <>
              Operators and engineers at <em>34 client sites.</em>
            </>
          }
          lead="Trained operators, chemists and engineers placed at client plants across India."
        />

        <div className="sites">
          {manpowerSites.map(({ icon: Icon, group, count, sites }, index) => (
            <Reveal as="article" key={group} className="site-card" delay={(index % 3) * 90}>
              <header>
                <span className="site-card__icon">
                  <Icon />
                </span>
                <h3>{group}</h3>
                <strong>{count}</strong>
              </header>
              <ul>
                {sites.map((site) => (
                  <li key={site}>{site}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
