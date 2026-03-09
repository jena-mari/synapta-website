import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-white pt-20 pb-10 overflow-hidden font-['Urbanist']">
      {/* The Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#9181C4] via-[#7B86D1] to-[#7187D6] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 items-start">
          
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              {/* Synapta Logo */}
              <img 
                src="/assets/synapta-logo.png" 
                alt="Synapta Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-4xl font-bold tracking-tight uppercase font-['DentonCondensed']">
                Synapta
              </span>
            </div>
            <p className="text-white/90 text-lg leading-snug max-w-[260px]">
              Revolutionising learning and knowledge retention.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-2xl font-semibold mb-6">Products</h4>
            <ul className="space-y-3 text-white/80 text-lg uppercase tracking-wide">
              <li><a href="#" className="hover:text-white transition-colors">CYPHER</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CRITORA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AXION</a></li>
              <li><a href="#" className="hover:text-white transition-colors">NEXCRUIT</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-2xl font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-white/80 text-lg">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investors</a></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-2xl font-semibold mb-6">Connect</h4>
            <div className="flex gap-4">
              {/* LinkedIn Icon */}
              <a 
                href="https://www.linkedin.com/company/synaptau/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center hover:bg-white/20 transition-all"
              >
                <span className="text-xl font-bold">in</span>
              </a>
              
              {/* Email Icon */}
              <a 
                href="mailto:info@synapta.com.au" 
                className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center hover:bg-white/20 transition-all"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/40 flex flex-col md:flex-row justify-between items-center gap-4 text-lg">
          <p>© {currentYear} by Synapta PTY LTD.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:underline underline-offset-4">Privacy Policy</a>
            <a href="#" className="hover:underline underline-offset-4">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;