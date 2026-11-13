import Reveal from './Reveal.jsx';

export default function PageHero({ eyebrow, title, lead, image }) {
  return (
    <header className="page-hero on-dark">
      {image && <img className="photo-bg" src={image} alt="" fetchpriority="high" />}
      <div className="page-hero__rings" aria-hidden="true" />
      <div className="container">
        <Reveal className="page-hero__inner">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          {lead && <p className="lead">{lead}</p>}
        </Reveal>
      </div>
    </header>
  );
}
