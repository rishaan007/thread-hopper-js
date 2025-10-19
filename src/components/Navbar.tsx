import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold gradient-text">ThreadHopper</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </a>
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#docs" className="text-sm font-medium hover:text-primary transition-colors">
            Docs
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:flex">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-primary via-pink-500 to-blue-500 hover:shadow-glow transition-all">
            Try Now
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
