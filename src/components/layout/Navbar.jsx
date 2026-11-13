import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';
import { navLinks } from '../../data/company.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on navigation and lock page scroll while it is open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <nav className={`nav ${scrolled && !open ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Logo />

        <div className="nav__links">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end className="nav__link">
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link to="/contact" className="btn btn--lime nav__cta">
          Get in touch <ArrowUpRight />
        </Link>

        <button
          type="button"
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`nav__mobile ${open ? 'is-open' : ''}`}>
        {navLinks.map((link) => (
          <NavLink key={link.to} to={link.to} end>
            {link.label}
          </NavLink>
        ))}
        <Link to="/contact" className="btn btn--lime">
          Get in touch <ArrowUpRight />
        </Link>
      </div>
    </nav>
  );
}
