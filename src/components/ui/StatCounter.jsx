import useInView from '../../hooks/useInView.js';
import useCountUp from '../../hooks/useCountUp.js';

export default function StatCounter({ value, suffix = '', label, className = '' }) {
  const [ref, inView] = useInView({ offset: 0.05 });
  const current = useCountUp(value, inView);

  return (
    <div ref={ref} className={className}>
      <strong>
        {current}
        {suffix && <span>{suffix}</span>}
      </strong>
      {label && <p>{label}</p>}
    </div>
  );
}
