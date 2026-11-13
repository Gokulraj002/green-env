import Reveal from '../ui/Reveal.jsx';
import { clients } from '../../data/projects.js';

function Row({ items, reverse = false }) {
  // The list is rendered twice so the track can loop seamlessly.
  return (
    <div className={`marquee ${reverse ? 'marquee--reverse' : ''}`}>
      <div className="marquee__track">
        {[...items, ...items].map((client, index) => (
          <span className="marquee__item" key={`${client.name}-${index}`} aria-hidden={index >= items.length}>
            {client.name}
            <i>{client.place}</i>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  const half = Math.ceil(clients.length / 2);

  return (
    <section className="section section--paper clients">
      <div className="container">
        <Reveal className="clients__head">
          <span className="eyebrow">Our clients</span>
          <h2>
            Trusted by names you <em>already know.</em>
          </h2>
        </Reveal>
      </div>
      <Row items={clients.slice(0, half)} />
      <Row items={clients.slice(half)} reverse />
      <p className="clients__more">…and many more.</p>
    </section>
  );
}
