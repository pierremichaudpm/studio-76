import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "info@studio76.ca",
    },
    {
      icon: Phone,
      title: "Téléphone",
      info: "+1 (514) 555-0176",
    },
    {
      icon: MapPin,
      title: "Localisation",
      info: "Longueuil, Québec, Canada",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Parlons de votre <span className="text-studio-blue">Projet</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-studio-blue to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Prêt à donner vie à votre vision ? Contactez-nous pour discuter de
            vos besoins en production vidéo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-studio-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-medium mb-2 text-studio-blue">
                  {contact.title}
                </h4>
                <p className="text-gray-300">{contact.info}</p>
              </div>
            );
          })}
        </div>

        <a
          href="mailto:info@studio76.ca"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-studio-blue to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
        >
          <Send className="w-5 h-5 mr-2" />
          Commencer votre Projet
        </a>
      </div>
    </section>
  );
}
