import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#110c1d] text-synaptaWhite pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-synaptaPurple to-synaptaBlue rounded-lg" />
              <span className="text-xl font-bold tracking-tight uppercase">Synapta</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Revolutionising learning through AI-powered integrity and skill validation.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-pastelPurple">Products</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-synaptaWhite transition-colors">Sypher</a></li>
              <li><a href="#" className="hover:text-synaptaWhite transition-colors">Critora</a></li>
              <li><a href="#" className="hover:text-synaptaWhite transition-colors">Axion</a></li>
              <li><a href="#" className="hover:text-synaptaWhite transition-colors">NexCruit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-pastelPurple">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-synaptaWhite transition-colors">About</a></li>
              <li><a href="#" className="hover:text-synaptaWhite transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-synaptaWhite transition-colors">Roadmap</a></li>
              <li><a href="#" className="hover:text-synaptaWhite transition-colors">Investors</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-pastelPurple">Connect</h4>
            <div className="flex gap-4">
              {/* Simple Social Icons placeholders */}
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-synaptaPurple transition-all cursor-pointer">In</div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-synaptaPurple transition-all cursor-pointer">X</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} Synapta Pty Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-synaptaWhite">Privacy Policy</a>
            <a href="#" className="hover:text-synaptaWhite">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;