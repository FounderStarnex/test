import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-md border-b border-slate-800"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-cyan-400">Aura</a>
        <nav className="flex gap-6 text-sm">
          <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
        </nav>
      </div>
    </motion.header>
  );
}