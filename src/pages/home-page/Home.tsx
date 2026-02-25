import HeroSection from "./HeroSection";
import Features from "./Features";
import MetricsPage from "./MetricsPage";
import CTA from "./CTA";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-synaptaWhite overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pastelPurple/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-pastelLavender/20 blur-[150px] rounded-full -z-10" />

      <HeroSection />
      <Features />
      <MetricsPage />
      <CTA />
    </div>
  );
};

export default Home;