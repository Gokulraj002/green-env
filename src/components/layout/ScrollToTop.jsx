import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Resets scroll on route change, or scrolls to a #hash target if present. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
