import PageHero from '../components/PageHero';
import Industries from '../components/Industries';
import Founders from '../components/Founders';
import Results from '../components/Results';
import FinalCTA from '../components/FinalCTA';

export default function IndustriesPage() {
  return <><PageHero eyebrow="Industries" title="Strategy shaped around your" accent="market." description="We build tailored growth systems for startups, D2C brands, creators, wellness businesses, SaaS companies, local brands, and women-led ventures." image="/bg_feminine_2026.png"><a href="/contact" className="btn-primary text-xs uppercase tracking-widest">Discuss your industry</a></PageHero><Industries /><Founders /><Results /><FinalCTA /></>;
}
