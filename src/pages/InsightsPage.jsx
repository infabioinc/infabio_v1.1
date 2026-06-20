import PageHero from '../components/PageHero';
import BigIdea from '../components/BigIdea';
import BrandPositioning from '../components/BrandPositioning';
import Results from '../components/Results';
import FinalCTA from '../components/FinalCTA';

export default function InsightsPage() {
  return <><PageHero eyebrow="Insights" title="Smarter decisions create" accent="stronger growth." description="Explore the principles, frameworks, and real outcomes behind marketing systems that protect budgets and turn attention into sustainable business growth." image="/hero_defence_bg.png"><a href="#case-studies" className="btn-secondary text-xs uppercase tracking-widest">View case studies</a></PageHero><BigIdea /><BrandPositioning /><div id="case-studies" className="scroll-mt-28" /><Results /><FinalCTA /></>;
}
