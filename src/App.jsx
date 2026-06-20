import Layout from './components/Layout';
import Hero from './components/Hero';
import BrandPositioning from './components/BrandPositioning';
import Difference from './components/Difference';
import Industries from './components/Industries';
import Services from './components/Services';
import BigIdea from './components/BigIdea';
import Process from './components/Process';
import Founders from './components/Founders';
import Results from './components/Results';
import FounderMessage from './components/FounderMessage';
import WomenTeam from './components/WomenTeam';
import FinalCTA from './components/FinalCTA';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import InsightsPage from './pages/InsightsPage';
import ContactPage from './pages/ContactPage';

function HomePage() {
  return (
    <>
      <Hero />
      <div id="about" className="scroll-mt-28" />
      <WomenTeam />
      <BrandPositioning />
      <Difference />
      <Industries />
      <Services />
      <div id="insights" className="scroll-mt-28" />
      <BigIdea />
      <Process />
      <Founders />
      <div id="case-studies" className="scroll-mt-28" />
      <Results />
      <FounderMessage />
      <FinalCTA />
    </>
  );
}

const pages = {
  '/about': AboutPage,
  '/services': ServicesPage,
  '/industries': IndustriesPage,
  '/insights': InsightsPage,
  '/contact': ContactPage,
};

function App() {
  const Page = pages[window.location.pathname.replace(/\/$/, '') || '/'] || HomePage;
  return <Layout><Page /></Layout>;
}

export default App;
