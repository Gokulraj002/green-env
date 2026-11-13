import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import { company } from '../../data/company.js';
import tanksImg from '../../assets/images/tanks.webp';

export default function CTABand() {
  const phone = company.phones[0];

  return (
    <section className="cta">
      <div className="container">
        <Reveal className="cta__card on-dark">
          <img className="photo-bg" src={tanksImg} alt="" loading="lazy" />
          <div>
            <h2>
              Have a plant that needs <em>running right?</em>
            </h2>
            <p className="lead">
              Tell us the plant type and capacity. We will come back with the team and scope to
              operate it.
            </p>
          </div>
          <div className="cta__actions">
            <Link to="/contact" className="btn btn--lime">
              Start a conversation <ArrowUpRight />
            </Link>
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="btn btn--ghost">
              <Phone /> {phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
