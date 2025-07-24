import { User } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Team() {
  const { t } = useLanguage();
  const teamMembers = [
    {
      name: t('team.sebastien.name'),
      title: t('team.sebastien.title'),
      bio: [
        t('team.sebastien.bio1'),
        t('team.sebastien.bio2'),
        t('team.sebastien.bio3'),
      ],
    },
    {
      name: t('team.catherine.name'),
      title: t('team.catherine.title'),
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
