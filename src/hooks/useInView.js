import { useEffect, useRef, useState } from 'react';

/**
 * Reports when an element first scrolls into view.
 * Returns [ref, inView]; once true it stays true.
 *
 * `offset` is the share of the viewport height (from the bottom) the element's
 * top edge must clear before it counts as visible.
 */
export default function useInView({ offset = 0.1 } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return undefined;

    const check = () => {
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < viewport * (1 - offset) && rect.bottom > 0) setInView(true);
    };

    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);

    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, [inView, offset]);

  return [ref, inView];
}
