import PageHero from '../components/PageHero';
import Services from '../components/Services';
import Process from '../components/Process';
import Results from '../components/Results';
import FinalCTA from '../components/FinalCTA';

export default function ServicesPage() {
  return <><PageHero eyebrow="Services" title="Growth systems designed to" accent="convert." description="From performance marketing and SEO to conversion-led websites and AI automation, every service is built around accountable growth and measurable ROI." image="/bg_funnel_2026.png"><a href="/contact" className="btn-primary text-xs uppercase tracking-widest">Book a free strategy call</a></PageHero><Services /><Process /><Results /><FinalCTA /></>;
}
