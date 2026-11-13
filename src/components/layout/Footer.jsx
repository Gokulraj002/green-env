import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import { company, navLinks } from '../../data/company.js';
import { pillars } from '../../data/services.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__about">
            <Logo />
            <p>{company.tagline}</p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>What we do</h4>
            <ul>
              {pillars.map((pillar) => (
                <li key={pillar.title}>{pillar.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              {company.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
                </li>
              ))}
              {company.emails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
              ))}
              <li>Morar, {company.city}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </span>
          <span>Water and wastewater specialists</span>
        </div>
      </div>
    </footer>
  );
}
