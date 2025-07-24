import { User } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Sébastien Arsenault",
      title: "Président",
      bio: [
        "Sébastien cumule plus de 20 ans d'expérience en production télévisuelle et en gestion de chaînes spécialisées. À la tête de Serdy Média, il a supervisé la production de centaines d'heures de contenu original, notamment pour les chaînes Évasion et Zeste, qu'il a dirigées à titre de président.",
        "Visionnaire, il a piloté le lancement de Zeste en 2010, élargissant l'offre télévisuelle culinaire au Québec avec une programmation originale et distinctive.",
        "Depuis 2010, il dirige également la production télévisuelle en direct des Grands Prix Cyclistes de Québec et de Montréal, assurant une diffusion de calibre international de ces épreuves du UCI WorldTour. Fort de son expertise en captation en direct, en storytelling visuel et en développement de contenu, Sébastien apporte au studio une approche stratégique ancrée dans l'innovation et la qualité de production.",
      ],
    },
    {
      name: "Catherine Dupont",
      title: "Vice-présidente directrice générale",
      bio: [
        "Catherine est une productrice chevronnée qui cumule plus de 35 ans d'expérience dans les secteurs télévisuel, documentaire et événementiel. Elle a dirigé des chaînes spécialisées comme Évasion et Zeste, supervisé la production de séries originales saluées par l'industrie et piloté la couverture olympique multiplateforme de Radio-Canada.",
        "Aujourd'hui à la tête de Studio 76, elle met son expertise en production de séries documentaires, captation d'événements sportifs et projets de contenu de marque au service de partenaires à la recherche d'un récit fort, captivant et bien exécuté.",
      ],
    },
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-black via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Notre <span className="text-studio-blue">Équipe</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-studio-blue to-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-all duration-500"
            >
              {/* Professional headshot placeholder */}
              <div className="w-32 h-32 bg-gradient-to-br from-studio-blue to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <User className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-medium text-center mb-2">
                {member.name}
              </h3>
              <p className="text-studio-blue text-center mb-6 font-light">
                {member.title}
              </p>
              <div className="text-gray-300 leading-relaxed space-y-4">
                {member.bio.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
