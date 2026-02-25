const HeroSection = () => {
  return (
    <section className="container mx-auto px-6 pt-32 pb-20 text-center">
      <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-slate-900">
        From Cheat Code To <br />
        <span className="text-synaptaPurple">Learning Amplifier</span>
      </h1>
      <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
        The first end-to-end platform that detects AI integrity issues and validates skills.
      </p>
      <div className="mt-10 flex justify-center gap-4">
        <button className="bg-synaptaPurple text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-synaptaPurple/20">
          Get Demo
        </button>
      </div>
    </section>
  );
};
export default HeroSection;