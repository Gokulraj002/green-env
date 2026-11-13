import { Building2, Mail, MapPin, Phone, UserRound } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import { company } from '../../data/company.js';

const mapsLink = (address) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export default function ContactInfo() {
  return (
    <div className="cinfo">
      <Reveal className="cinfo__person">
        <span className="cinfo__icon">
          <UserRound />
        </span>
        <div>
          <span className="cinfo__label">Your point of contact</span>
          <h3>{company.contactPerson}</h3>
        </div>
      </Reveal>

      <Reveal className="cinfo__block" delay={80}>
        <span className="cinfo__icon">
          <Phone />
        </span>
        <div>
          <span className="cinfo__label">Call us</span>
          {company.phones.map((phone) => (
            <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="cinfo__link">
              {phone}
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal className="cinfo__block" delay={140}>
        <span className="cinfo__icon">
          <Mail />
        </span>
        <div>
          <span className="cinfo__label">Email</span>
          {company.emails.map((email) => (
            <a key={email} href={`mailto:${email}`} className="cinfo__link cinfo__link--sm">
              {email}
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal className="cinfo__block" delay={200}>
        <span className="cinfo__icon">
          <MapPin />
        </span>
        <div>
          <span className="cinfo__label">Registered office</span>
          <p>{company.registeredOffice}</p>
          <a href={mapsLink(company.registeredOffice)} target="_blank" rel="noreferrer" className="cinfo__map">
            Open in Google Maps
          </a>
        </div>
      </Reveal>

      <Reveal className="cinfo__block" delay={260}>
        <span className="cinfo__icon">
          <Building2 />
        </span>
        <div>
          <span className="cinfo__label">Working address</span>
          <p>{company.workingAddress}</p>
          <a href={mapsLink(company.workingAddress)} target="_blank" rel="noreferrer" className="cinfo__map">
            Open in Google Maps
          </a>
        </div>
      </Reveal>
    </div>
  );
}
