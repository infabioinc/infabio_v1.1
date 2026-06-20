import PageHero from '../components/PageHero';
import WomenTeam from '../components/WomenTeam';
import Difference from '../components/Difference';
import FounderMessage from '../components/FounderMessage';
import FinalCTA from '../components/FinalCTA';

export default function AboutPage() {
  return <><PageHero eyebrow="About Infabio" title="Built by women." accent="Powered by strategy." description="Infabio is a women-powered marketing defence agency built to protect budgets, sharpen positioning, and create sustainable growth systems for ambitious brands." image="/bg_feminine_2026.png"><a href="/contact" className="btn-primary text-xs uppercase tracking-widest">Meet your growth team</a></PageHero><WomenTeam /><Difference /><FounderMessage /><FinalCTA /></>;
}
