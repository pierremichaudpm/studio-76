import studioLogoPath from "@assets/studio76-Logo_1753218097982.png";
import productionHomePath from "@assets/production_home_1753218097983.jpeg";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-studio-blue/40 via-blue-900/45 to-black/50"></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url(${productionHomePath})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-studio-blue/20"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Studio 76 Logo */}
        <div className="mb-12 animate-fade-in-down">
          <img
            src={studioLogoPath}
            alt="Studio 76 Logo"
            className="w-36 md:w-[171px] lg:w-[206px] h-auto mx-auto"
          />
        </div>

        {/* Tagline */}
        <div className="space-y-4 animate-fade-in-up animation-delay-300">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-wide">
            <span className="block mb-2">Créer.</span>
            <span className="block mb-2 text-studio-blue">Captiver.</span>
            <span className="block">Connecter.</span>
          </h1>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center animate-scroll">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll-dot"></div>
        </div>
      </div>
    </section>
  );
}
