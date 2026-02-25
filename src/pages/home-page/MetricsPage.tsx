const MetricsPage = () => {
  const stats = [
    { label: "Alignment with Academic Integrity Frameworks", value: "100%", sub: "Full Compliance" },
    { label: "Fastest-in-class Analysis", value: "20-Second", sub: "Real-time scanning of 10,000+ words" },
    { label: "False Positive Accuracy", value: "<0.2%", sub: "Industry-leading precision" },
    { label: "Improve Concept Retention by", value: "40%", sub: "Verified Learning Outcomes" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">The Future of <span className="text-synaptaPurple">Fair & Fast</span> Education</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-black text-synaptaPurple mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-2">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsPage;