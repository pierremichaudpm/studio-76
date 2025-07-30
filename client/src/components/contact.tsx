import { Send } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            <span className="text-studio-blue">{t('contact.title')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-studio-blue to-blue-600 mx-auto mb-8"></div>
        </div>

        <a
          href="mailto:info@groupetonic.ca"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-studio-blue to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
        >
          <Send className="w-5 h-5 mr-2" />
          {t('contact.email')}
        </a>
      </div>
    </section>
  );
}
