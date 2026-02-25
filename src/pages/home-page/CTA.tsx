const CTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden relative bg-gradient-to-br from-synaptaPurple via-synaptaBlue to-synaptaPurple p-12 md:p-20 text-center text-white">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pastelLavender/20 rounded-full blur-3xl -ml-32 -mb-32" />

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Amplify <br />Your Learning?
          </h2>
          <p className="text-synaptaWhite/80 text-lg max-w-xl mx-auto mb-10">
            Join the institutions already using Synapta to secure academic integrity and empower student success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-10 py-4 bg-white text-synaptaPurple rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
              Get Started for Free
            </button>
            <button className="px-10 py-4 border border-white/30 backdrop-blur-md rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;