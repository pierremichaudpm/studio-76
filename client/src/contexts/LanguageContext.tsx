import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'nav.vision': 'Vision',
    'nav.team': 'Équipe',
    'nav.contact': 'Nous joindre',
    
    // Hero
    'hero.create': 'Créer.',
    'hero.captivate': 'Captiver.',
    'hero.connect': 'Connecter.',
    
    // Services/Vision
    'vision.title': 'Notre Vision',
    'vision.title.highlight': 'Vision',
    'vision.subtitle': 'Trois piliers pour créer du contenu exceptionnel',
    'vision.documentary.title': 'Séries documentaires',
    'vision.documentary.desc': 'Production de séries documentaires originales qui captivent et racontent des histoires authentiques avec une approche créative distinctive.',
    'vision.sports.title': 'Événements sportifs en direct',
    'vision.sports.desc': 'Captation professionnelle d\'événements sportifs avec une expertise technique de calibre international pour une diffusion de qualité.',
    'vision.brand.title': 'Collaborations de marque',
    'vision.brand.desc': 'Création de contenu de marque innovant qui connecte les entreprises à leur audience à travers des récits visuels percutants.',
    
    // Team
    'team.title': 'Notre Équipe',
    'team.title.highlight': 'Équipe',
    'team.sebastien.name': 'Sébastien Arsenault',
    'team.sebastien.title': 'Président',
    'team.sebastien.bio1': 'Sébastien cumule plus de 20 ans d\'expérience en production télévisuelle et en gestion de chaînes spécialisées. À la tête de Serdy Média, il a supervisé la production de centaines d\'heures de contenu original, notamment pour les chaînes Évasion et Zeste, qu\'il a dirigées à titre de président.',
    'team.sebastien.bio2': 'Visionnaire, il a piloté le lancement de Zeste en 2010, élargissant l\'offre télévisuelle culinaire au Québec avec une programmation originale et distinctive.',
    'team.sebastien.bio3': 'Depuis 2010, il dirige également la production télévisuelle en direct des Grands Prix Cyclistes de Québec et de Montréal, assurant une diffusion de calibre international de ces épreuves du UCI WorldTour. Fort de son expertise en captation en direct, en storytelling visuel et en développement de contenu, Sébastien apporte au studio une approche stratégique ancrée dans l\'innovation et la qualité de production.',
    'team.catherine.name': 'Catherine Dupont',
    'team.catherine.title': 'Vice-présidente directrice générale',
    'team.catherine.bio1': 'Catherine est une productrice chevronnée qui cumule plus de 35 ans d\'expérience dans les secteurs télévisuel, documentaire et événementiel. Elle a dirigé des chaînes spécialisées comme Évasion et Zeste, supervisé la production de séries originales saluées par l\'industrie et piloté la couverture olympique multiplateforme de Radio-Canada.',
    'team.catherine.bio2': 'Aujourd\'hui à la tête de Studio 76, elle met son expertise en production de séries documentaires, captation d\'événements sportifs et projets de contenu de marque au service de partenaires à la recherche d\'un récit fort, captivant et bien exécuté.',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.email': 'info@groupetonic.ca',
    
    // Language toggle
    'lang.toggle': 'EN',
  },
  en: {
    // Navigation
    'nav.vision': 'Vision',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.create': 'Create.',
    'hero.captivate': 'Captivate.',
    'hero.connect': 'Connect.',
    
    // Services/Vision
    'vision.title': 'Our Vision',
    'vision.title.highlight': 'Vision',
    'vision.subtitle': 'Three pillars for creating exceptional content',
    'vision.documentary.title': 'Documentary Series',
    'vision.documentary.desc': 'Production of original documentary series that captivate and tell authentic stories with a distinctive creative approach.',
    'vision.sports.title': 'Live Sports Events',
    'vision.sports.desc': 'Professional coverage of sporting events with international-caliber technical expertise for quality broadcasting.',
    'vision.brand.title': 'Brand Collaborations',
    'vision.brand.desc': 'Creation of innovative brand content that connects companies to their audience through impactful visual storytelling.',
    
    // Team
    'team.title': 'Our Team',
    'team.title.highlight': 'Team',
    'team.sebastien.name': 'Sébastien Arsenault',
    'team.sebastien.title': 'President',
    'team.sebastien.bio1': 'Sébastien has over 20 years of experience in television production and specialized channel management. At the helm of Serdy Média, he supervised the production of hundreds of hours of original content, notably for the Évasion and Zeste channels, which he led as president.',
    'team.sebastien.bio2': 'A visionary, he spearheaded the launch of Zeste in 2010, expanding Quebec\'s culinary television offering with original and distinctive programming.',
    'team.sebastien.bio3': 'Since 2010, he has also directed the live television production of the Grand Prix Cyclistes de Québec et Montréal, ensuring international-caliber broadcasting of these UCI WorldTour events. With his expertise in live coverage, visual storytelling, and content development, Sébastien brings a strategic approach rooted in innovation and production quality to the studio.',
    'team.catherine.name': 'Catherine Dupont',
    'team.catherine.title': 'Vice President & General Manager',
    'team.catherine.bio1': 'Catherine is a seasoned producer with over 35 years of experience in television, documentary, and event sectors. She has led specialized channels like Évasion and Zeste, supervised the production of industry-acclaimed original series, and directed Radio-Canada\'s multiplatform Olympic coverage.',
    'team.catherine.bio2': 'Now at the head of Studio 76, she puts her expertise in documentary series production, sports event coverage, and brand content projects at the service of partners seeking strong, captivating, and well-executed storytelling.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.email': 'info@groupetonic.ca',
    
    // Language toggle
    'lang.toggle': 'FR',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('studio76-language') as Language;
    if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('studio76-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}