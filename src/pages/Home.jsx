import Hero from '../components/home/Hero.jsx';
import Intro from '../components/home/Intro.jsx';
import Pillars from '../components/home/Pillars.jsx';
import ServicesGrid from '../components/home/ServicesGrid.jsx';
import Flagship from '../components/home/Flagship.jsx';
import Team from '../components/home/Team.jsx';
import Clients from '../components/home/Clients.jsx';
import CTABand from '../components/ui/CTABand.jsx';
import '../styles/home.css';

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Pillars />
      <ServicesGrid />
      <Flagship />
      <Team />
      <Clients />
      <div style={{ background: 'var(--paper)' }}>
        <CTABand />
      </div>
    </>
  );
}
