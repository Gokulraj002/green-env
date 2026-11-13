import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function NotFound() {
  return (
    <header className="page-hero on-dark" style={{ minHeight: '80vh', display: 'grid', alignItems: 'center' }}>
      <div className="page-hero__rings" aria-hidden="true" />
      <div className="container">
        <div className="page-hero__inner">
          <span className="eyebrow">404</span>
          <h1>
            This page has <em>run dry.</em>
          </h1>
          <p className="lead">The page you are looking for does not exist or has moved.</p>
          <Link to="/" className="btn btn--lime" style={{ justifySelf: 'start' }}>
            Back to home <ArrowUpRight />
          </Link>
        </div>
      </div>
    </header>
  );
}
