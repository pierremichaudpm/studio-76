import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-gradient-to-b from-black/95 via-black/90 to-transparent backdrop-blur-lg border-b border-gray-800"
          : "bg-gradient-to-b from-black/40 via-black/20 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Always visible in upper left */}
          <div className="flex-shrink-0 z-50">
            <div className="text-xl md:text-2xl font-bold text-white">
              STUDIO <span className="text-studio-blue">76</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-studio-blue transition-colors duration-300 relative group"
              >
                Vision
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-studio-blue transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="hover:text-studio-blue transition-colors duration-300 relative group"
              >
                Équipe
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-studio-blue transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-studio-blue transition-colors duration-300 relative group"
              >
                Nous joindre
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-studio-blue transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
          </div>

          {/* Mobile menu button - upper right */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-studio-blue focus:outline-none transition-colors duration-200 bg-transparent"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 stroke-2" />
              ) : (
                <Menu className="h-6 w-6 stroke-2" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bg-black/95 backdrop-blur-lg border-t border-gray-800 z-40 animate-in slide-in-from-top duration-300">
          <div className="px-6 py-8 space-y-6">
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-lg text-white hover:text-studio-blue transition-colors duration-300"
            >
              Vision
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block w-full text-left text-lg text-white hover:text-studio-blue transition-colors duration-300"
            >
              Équipe
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-lg text-white hover:text-studio-blue transition-colors duration-300"
            >
              Nous joindre
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
