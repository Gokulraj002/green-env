import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, ShieldCheck, Users } from 'lucide-react';
import StatCounter from '../ui/StatCounter.jsx';
import WaterGauge from './WaterGauge.jsx';
import { stats } from '../../data/company.js';
import heroImg from '../../assets/images/hero.webp';

export default function Hero() {
  return (
    <header className="hero on-dark">
      <img className="photo-bg hero__photo" src={heroImg} alt="" fetchpriority="high" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="hero__pill">
            <MapPin size={15} /> Gwalior, Madhya Pradesh
          </span>
          <h1>
            Keeping India’s water <em>treatment plants</em> running.
          </h1>
          <p className="lead">
            Green Environmental Technologies provides operation, maintenance and manpower for
            effluent, sewage and water treatment plants, for municipal bodies and industry alike.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--lime">
              Talk to our team <ArrowUpRight />
            </Link>
            <Link to="/projects" className="btn btn--ghost">
              See the plants we run
            </Link>
          </div>
        </div>

        <div className="hero__visual">
          <WaterGauge value="130" unit="MLD" caption="Largest STP we operate, Kanpur" />
          <div className="hero__chip hero__chip--a">
            <Users size={18} />
            <span>
              <b>498</b> people on the team
            </span>
          </div>
          <div className="hero__chip hero__chip--b">
            <ShieldCheck size={18} />
            <span>
              <b>34</b> client sites staffed
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="hero__stats">
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} className="hero__stat" />
          ))}
        </div>
      </div>
    </header>
  );
}
