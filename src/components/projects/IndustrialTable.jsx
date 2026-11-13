import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import ImageBanner from '../ui/ImageBanner.jsx';
import { industrial } from '../../data/projects.js';
import industrialImg from '../../assets/images/industrial.webp';

export default function IndustrialTable() {
  return (
    <section className="section section--dark on-dark" id="industrial">
      <div className="container">
        <SectionHeading
          eyebrow="Industrial & institutional"
          title={
            <>
              Effluent plants for <em>industry and hospitals.</em>
            </>
          }
        />

        <ImageBanner src={industrialImg} alt="Stainless steel process pipework and pumps inside an industrial plant" />

        <div className="itable" role="table" aria-label="Industrial and institutional plants">
          <div className="itable__row itable__row--head" role="row">
            <span role="columnheader">Client and site</span>
            <span role="columnheader">Scope</span>
            <span role="columnheader">Capacity</span>
          </div>
          {industrial.map((row, index) => (
            <Reveal className="itable__row" role="row" key={row.client} delay={index * 60}>
              <span role="cell">
                <b>{row.client}</b>
                <i>{row.site}</i>
              </span>
              <span role="cell">{row.scope}</span>
              <span role="cell" className="itable__cap">
                {row.capacity || '—'}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
