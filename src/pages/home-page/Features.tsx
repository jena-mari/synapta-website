const Features = () => {
  const phases = [
    { name: "SYPHER", sub: "INTEGRITY", color: "text-synaptaPurple" },
    { name: "CRITORA", sub: "ASSESSMENT", color: "text-synaptaBlue" },
  ];

  return (
    <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-8">
      {phases.map((phase) => (
        <div key={phase.name} className="p-10 rounded-3xl border border-slate-100 bg-white/60 backdrop-blur-md hover:border-pastelPurple transition-all group">
          <span className={`text-xs font-black tracking-widest uppercase ${phase.color}`}>
            {phase.name}
          </span>
          <h3 className="text-2xl font-bold mt-2 text-slate-800">{phase.sub}</h3>
          <div className="w-12 h-1 bg-slate-100 mt-4 group-hover:w-full transition-all duration-500" />
        </div>
      ))}
    </section>
  );
};
export default Features;