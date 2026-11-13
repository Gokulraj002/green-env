const WAVE_PATH =
  'M0 30 Q50 0 100 30 T200 30 T300 30 T400 30 T500 30 T600 30 T700 30 T800 30 V320 H0 Z';

/** Circular tank with an animated water surface and a headline figure. */
export default function WaterGauge({ value, unit, caption }) {
  return (
    <div className="gauge">
      <div className="gauge__ring" aria-hidden="true" />
      <div className="gauge__tank">
        <svg className="gauge__wave gauge__wave--back" viewBox="0 0 800 320" preserveAspectRatio="none" aria-hidden="true">
          <path d={WAVE_PATH} />
        </svg>
        <svg className="gauge__wave gauge__wave--front" viewBox="0 0 800 320" preserveAspectRatio="none" aria-hidden="true">
          <path d={WAVE_PATH} />
        </svg>
        <span className="gauge__bubble gauge__bubble--1" aria-hidden="true" />
        <span className="gauge__bubble gauge__bubble--2" aria-hidden="true" />
        <span className="gauge__bubble gauge__bubble--3" aria-hidden="true" />
        <div className="gauge__label">
          <strong>
            {value}
            <span>{unit}</span>
          </strong>
          <p>{caption}</p>
        </div>
      </div>
    </div>
  );
}
