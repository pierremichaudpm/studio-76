import { Film, Radio, Users } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Film,
      title: "Créer.",
      subtitle: "Production de séries documentaires",
      description:
        "Nous créons des séries documentaires qui plongent au cœur de récits humains puissants, faits d'émotions, de défis et de moments marquants.",
    },
    {
      icon: Radio,
      title: "Captiver.",
      subtitle: "Captation en direct d'événements sportifs",
      description:
        "Nous mettons notre expertise technique et narrative au service de la diffusion en direct d'événements majeurs, pour faire vivre l'intensité du moment à chaque spectateur.",
    },
    {
      icon: Users,
      title: "Connecter.",
      subtitle: "Projets de créativité média avec des marques",
      description:
        "Nous collaborons avec des partenaires pour créer du contenu vidéo innovant, authentique et engageant, qui rapproche les marques de leurs publics.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Notre <span className="text-studio-blue">Vision</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-studio-blue to-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-studio-blue to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-light mb-4">
                    <span className="text-studio-blue">{service.title}</span>
                  </h3>
                  <h4 className="text-xl font-medium mb-4 text-gray-200">
                    {service.subtitle}
                  </h4>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
