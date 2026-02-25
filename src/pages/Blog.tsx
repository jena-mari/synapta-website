import Navbar from "../app/components/layout/Navbar";
import Footer from "../app/components/layout/Footer";
import GlassCard from '../app/components/ui/GlassCard';
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className="pt-40 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <GlassCard>
          <h2 className="text-xl font-bold mb-2">
            Why 86% of Students Use AI
          </h2>
          <Link to="/blog/1" className="text-synaptaPurple">
            Read More →
          </Link>
        </GlassCard>
      </div>
      <Footer />
    </>
  );
}