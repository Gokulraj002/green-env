import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import { municipalLarge } from '../../data/projects.js';
import flagshipImg from '../../assets/images/flagship.webp';

const MAX_MLD = 130;

export default function Flagship() {
  return (
    <section className="section section--dark on-dark flagship">
      <img className="photo-bg flagship__photo" src={flagshipImg} alt="" loading="lazy" />
      <div className="container flagship__inner">
        <Reveal className="flagship__copy">
          <span className="eyebrow">Municipal scale</span>
          <h2>
            From a 5 MLD pilot to a <em>130 MLD</em> city plant.
          </h2>
          <p className="lead">
            We operate municipal sewage treatment plants across three states, including Asia’s
            first pilot plant on UASB technology in Kanpur and eleven plants for Himachal
            Pradesh’s I&amp;PH Department.
          </p>
          <Link to="/projects" className="btn btn--lime">
            View all projects <ArrowUpRight />
          </Link>
        </Reveal>

        <Reveal className="flagship__chart" delay={140}>
          <div className="flagship__chart-head">
            <span>{municipalLarge.region}</span>
            <span>Capacity, MLD</span>
          </div>
          {municipalLarge.plants.map((plant) => (
            <div className="bar" key={`${plant.name}-${plant.mld}`}>
              <div className="bar__meta">
                <span>
                  {plant.name} <i>· {plant.client}</i>
                </span>
                <b>{plant.mld}</b>
              </div>
              <div className="bar__track">
                <div className="bar__fill" style={{ '--w': `${(plant.mld / MAX_MLD) * 100}%` }} />
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
