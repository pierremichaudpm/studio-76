import { User } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import sebastienPhoto from "@assets/SEBASTIEN_1753364072922.webp";
import catherinePhoto from "@assets/catherine_1753364072922.jpeg";

export default function Team() {
  const { t } = useLanguage();
  const teamMembers = [
    {
      name: t('team.sebastien.name'),
      title: t('team.sebastien.title'),
      photo: sebastienPhoto,
      photoStyle: "object-top", // Position to show more of the head
      bio: [
        t('team.sebastien.bio1'),
        t('team.sebastien.bio2'),
        t('team.sebastien.bio3'),
      ],
    },
    {
      name: t('team.catherine.name'),
      title: t('team.catherine.title'),
      photo: catherinePhoto,
      photoStyle: "object-center", // Center and scale up
      bio: [
        t('team.catherine.bio1'),
        t('team.catherine.bio2'),
      ],
    },
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-black via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            {t('team.title').split(' ')[0]} <span className="text-studio-blue">{t('team.title.highlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-studio-blue to-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-all duration-500 max-w-4xl mx-auto"
            >
              {/* Professional headshot */}
              <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-2 border-studio-blue/30">
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className={`w-full h-full object-cover ${member.photoStyle}`}
                  style={{
                    transform: member.name.includes('Catherine') 
                      ? 'scale(1.15) translateX(6px) translateY(2px)' 
                      : 'translateY(-1px) translateX(3px)'
                  }}
                />
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
