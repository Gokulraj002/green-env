import PageHero from '../components/ui/PageHero.jsx';
import CTABand from '../components/ui/CTABand.jsx';
import MunicipalPlants from '../components/projects/MunicipalPlants.jsx';
import IndustrialTable from '../components/projects/IndustrialTable.jsx';
import ManpowerSites from '../components/projects/ManpowerSites.jsx';
import Construction from '../components/projects/Construction.jsx';
import Partners from '../components/projects/Partners.jsx';
import '../styles/projects.css';
import heroImg from '../assets/images/projects-hero.webp';

const sections = [
  { href: '#municipal', label: 'Municipal STPs' },
  { href: '#industrial', label: 'Industrial plants' },
  { href: '#manpower', label: 'Manpower sites' },
  { href: '#construction', label: 'Construction' },
  { href: '#partners', label: 'Partners' },
];

export default function Projects() {
  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Projects"
        title={
          <>
            Plants we run, staff <em>and build.</em>
          </>
        }
        lead="Municipal sewage treatment in three states, effluent plants for industry and hospitals, and operators placed at 34 client sites across India."
      />

      <nav className="subnav" aria-label="Project sections">
        <div className="container subnav__inner">
          {sections.map((section) => (
            <a key={section.href} href={section.href}>
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      <MunicipalPlants />
      <IndustrialTable />
      <ManpowerSites />
      <Construction />
      <Partners />
      <div style={{ background: 'var(--paper)' }}>
        <CTABand />
      </div>
    </>
  );
}
