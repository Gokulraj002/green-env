import { Link } from 'react-router-dom';
import { Droplets } from 'lucide-react';

export default function Logo({ onClick }) {
  return (
    <Link to="/" className="brand" onClick={onClick} aria-label="Green Environmental Technologies home">
      <span className="brand__mark">
        <Droplets strokeWidth={2.2} />
      </span>
      <span className="brand__text">
        <span className="brand__name">Green Environmental</span>
        <span className="brand__sub">Technologies</span>
      </span>
    </Link>
  );
}
