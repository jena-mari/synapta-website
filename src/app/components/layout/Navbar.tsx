import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "Investors", path: "/investors" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-center">
      <div className="max-w-7xl w-full flex justify-between items-center px-6 py-3 rounded-full backdrop-blur-md bg-white/40 border border-white/20 shadow-sm">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-xl tracking-tighter text-[#4F39F4]">
            SYNAPTA
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-[#4F39F4] ${
                location.pathname === link.path ? "text-[#4F39F4]" : "text-slate-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          {...({
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            className: "bg-[#7C5CFF] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg shadow-purple-200 hover:bg-[#6A4DED] transition-all"
          } as any)}
        >
          Get Demo
        </motion.button>
      </div>
    </nav>
  );
}