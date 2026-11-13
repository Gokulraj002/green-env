import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { municipalLarge, municipalHimachal } from '../../data/projects.js';
import clarifierImg from '../../assets/images/clarifier-top.webp';

export default function MunicipalPlants() {
  return (
    <section className="section" id="municipal">
      <div className="container">
        <SectionHeading
          split
          eyebrow="Municipal"
          title={
            <>
              STP operation across <em>three states.</em>
            </>
          }
          lead="Sewage treatment plants operated for UP Jal Nigam, Udaipur and Himachal Pradesh’s I&PH Department, from 0.38 MLD hill-town plants to a 130 MLD city plant."
        />

        <Reveal className="region-label">
          <h3>{municipalLarge.region}</h3>
          <span>4 plants</span>
        </Reveal>
        <div className="plants plants--large">
          {municipalLarge.plants.map((plant, index) => (
            <Reveal
              as="article"
              key={`${plant.name}-${plant.mld}`}
              className={`plant ${index === 0 ? 'plant--feature' : ''}`}
              delay={index * 90}
            >
              {index === 0 && <img className="photo-bg" src={clarifierImg} alt="" loading="lazy" />}
              <strong>
                {plant.mld}
                <span>MLD</span>
              </strong>
              <div>
                <h3>{plant.name}</h3>
                <p>{plant.client}</p>
                {plant.note && <em className="plant__note">{plant.note}</em>}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="region-label">
          <h3>
            {municipalHimachal.region} <small>· {municipalHimachal.client}</small>
          </h3>
          <span>{municipalHimachal.plants.length} plants</span>
        </Reveal>
        <div className="plants plants--small">
          {municipalHimachal.plants.map((plant, index) => (
            <Reveal as="article" key={plant.name} className="plant plant--small" delay={(index % 4) * 70}>
              <strong>
                {plant.mld}
                <span>MLD</span>
              </strong>
              <div>
                <h3>{plant.name}</h3>
                <p>{plant.place}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
