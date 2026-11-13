import Reveal from './Reveal.jsx';

/** Wide rounded photo used to open a section. */
export default function ImageBanner({ src, alt, caption }) {
  return (
    <Reveal as="figure" className="banner">
      <img src={src} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </Reveal>
  );
}
