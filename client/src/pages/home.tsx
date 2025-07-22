import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Team from "@/components/team";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services />
      <Team />
      <Contact />
      
      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="text-xl font-bold">
                STUDIO <span className="text-studio-blue">76</span>
              </div>
              <span className="text-gray-500">•</span>
              <p className="text-gray-400 text-sm">Créer. Captiver. Connecter.</p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Studio 76. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
