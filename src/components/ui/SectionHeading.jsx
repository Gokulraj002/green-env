import Reveal from '../ui/Reveal.jsx';

export default function SectionHeading({ eyebrow, title, lead, split = false }) {
  return (
    <Reveal className={`section-head ${split ? 'section-head--split' : ''}`.trim()}>
      <div style={{ display: 'grid', gap: 18 }}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
      </div>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  );
}
