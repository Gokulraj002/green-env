import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import { company } from '../../data/company.js';
import clarifierImg from '../../assets/images/clarifier-top.webp';
import labImg from '../../assets/images/lab.webp';

const plantTypes = ['STP', 'ETP', 'RO', 'UF', 'DM', 'WTP', 'MEE / ATFD'];

export default function Intro() {
  return (
    <section className="section section--paper">
      <div className="container intro">
        <Reveal className="intro__media">
          <img className="intro__img intro__img--main" src={clarifierImg} alt="Circular clarifier at a sewage treatment plant, seen from above" loading="lazy" />
          <img className="intro__img intro__img--inset" src={labImg} alt="Water sample held in a laboratory beaker" loading="lazy" />
          <div className="intro__badge">
            <strong>3</strong>
            <span>states with municipal plants we operate</span>
          </div>
        </Reveal>

        <Reveal className="intro__copy" delay={120}>
          <span className="eyebrow">Who we are</span>
          <h2>
            Water and wastewater <em>specialists</em> from {company.city.split(',')[0]}.
          </h2>
          <p className="lead">
            {company.name} runs and maintains treatment plants for municipal bodies and industrial
            clients, and places trained operators, chemists and engineers at client plants across
            India.
          </p>

          <div className="intro__types">
            <span>Plants we operate and maintain</span>
            <ul>
              {plantTypes.map((type) => (
                <li key={type}>
                  <Check size={14} strokeWidth={3} /> {type}
                </li>
              ))}
            </ul>
          </div>

          <Link to="/projects" className="btn btn--dark">
            See our projects <ArrowUpRight />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
