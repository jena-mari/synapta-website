import HeroSection from './HeroSection';
import Features from './Features';
import MetricsPage from './MetricsPage';
import CTA from './CTA';
import GradientBackground from '../../app/components/ui/GradientBackground';

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background blobs stay behind content */}
      <GradientBackground /> 
      
      <HeroSection />
      <Features />
      <MetricsPage />
      <CTA />
    </div>
  );
};