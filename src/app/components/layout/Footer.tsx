import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full text-white pt-16 pb-8 overflow-hidden font-['Urbanist']">
      {/* Background: Gradient + CSS Grain Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#9181C4] via-[#7B86D1] to-[#7187D6]" />
        {/* Grain Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-8 mb-12 items-start">
          
          {/* Brand Column */}
          <div className="md:col-span-5 lg:col-span-6">
            <div className="mb-5">
              <img 
                src="/assets/synapta-logo2.png" 
                alt="Synapta" 
                className="h-10 w-auto object-contain" 
              />
            </div>
            <p className="text-white/80 text-base md:text-lg leading-snug max-w-[300px]">
              Revolutionising learning and <br className="hidden lg:block" /> knowledge retention.
            </p>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-bold mb-5 tracking-tight">Products</h4>
            <ul className="space-y-2.5 text-white/70 text-sm uppercase tracking-widest font-semibold">
              <li><a href="#" className="hover:text-white transition-colors">CYPHER</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CRITORA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AXION</a></li>
              <li><a href="#" className="hover:text-white transition-colors">NEXCRUIT</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-lg font-bold mb-5 tracking-tight">Company</h4>
            <ul className="space-y-2.5 text-white/70 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investors</a></li>
            </ul>
          </div>

          {/* Connect Column: Compact Icons */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-lg font-bold mb-5 tracking-tight">Connect</h4>
            <div className="flex gap-3">
              <a 
                href="https://www.linkedin.com/company/synaptau/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all"
              >
                <span className="text-sm font-bold">in</span>
              </a>
              
              <a 
                href="mailto:info@synapta.com.au" 
                className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-white/60">
          <p>© {currentYear} by Synapta PTY LTD.</p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;