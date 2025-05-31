// src/components/LanguageManager.jsx
import { useState, useEffect } from 'react';

const translations = {
  es: {
    greeting: "Hola, soy Andres",
    availableForHire: "Disponible para contratación",
    bioStart: "Desarrollador Frontend con ~2 años de experiencia práctica usando",
    bioMiddle: "complementado por 8+ años liderando equipos de ventas y operaciones comerciales.",
    bioLocation: "Desde Bogotá, Colombia — ahora radicado en Ciudad de México.",
    bioEnd: "Me especializo en traducir objetivos de negocio en soluciones digitales intuitivas y escalables, combinando una fuerte ejecución técnica con perspicacia estratégica para impulsar el crecimiento del producto y elevar la experiencia del usuario.",
    experience: "Experiencia",
    certificates: "Certificados",
    projects: "Proyectos",
    contact: "Contactemos",
    downloadCv: "Descargar Mi CV"
  },
  en: {
    greeting: "Hi I'm Andres",
    availableForHire: "Available for hire",
    bioStart: "Frontend Developer with ~2 years of hands-on experience using",
    bioMiddle: "complemented by 8+ years leading sales teams and commercial operations.",
    bioLocation: "From Bogotá, Colombia — now based in Mexico City.",
    bioEnd: "I specialize in translating business goals into intuitive, scalable digital solutions, combining strong technical execution with strategic insight to drive product growth and elevate user experience.",
    experience: "Experience",
    certificates: "Certificates",
    projects: "Projects",
    contact: "Let's get in touch",
    downloadCv: "Download My CV"
  }
};

const LanguageManager = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
    updateContent(newLang);
  };

  const updateContent = (lang) => {
    const t = translations[lang];
    
    // Función helper para actualizar texto de elemento por ID
    const updateElement = (id, text) => {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = text;
      }
    };

    // Función para manejar elementos con clases de idioma
    const updateLanguageElements = (language) => {
      // Ocultar todos los elementos de texto
      const allEnTexts = document.querySelectorAll('.en-text');
      const allEsTexts = document.querySelectorAll('.es-text');
      
      if (language === 'en') {
        // Mostrar inglés, ocultar español
        allEnTexts.forEach(el => el.style.display = 'inline');
        allEsTexts.forEach(el => el.style.display = 'none');
      } else {
        // Mostrar español, ocultar inglés
        allEnTexts.forEach(el => el.style.display = 'none');
        allEsTexts.forEach(el => el.style.display = 'inline');
      }
    };

    // Actualizar elementos con ID específico
    updateElement('greeting', t.greeting);
    updateElement('available-badge', t.availableForHire);
    updateElement('bio-start', t.bioStart);
    updateElement('bio-middle', t.bioMiddle);
    updateElement('bio-location', t.bioLocation);
    updateElement('bio-end', t.bioEnd);
    updateElement('experience-title', t.experience);
    updateElement('certificates-title', t.certificates);
    updateElement('projects-title', t.projects);
    updateElement('contact-title', t.contact);
    updateElement('download-cv', t.downloadCv);

    // Actualizar elementos con clases de idioma (para ListItem)
    updateLanguageElements(lang);
  };

  useEffect(() => {
    // Inicializar con inglés al cargar
    updateContent('en');
  }, []);

  return (
    <div className="fixed top-12 right-6 z-50">
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700/80 text-white rounded-lg transition-all duration-200 border border-gray-600/50 shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        <span className="text-sm font-medium">
          {language === 'es' ? '🇺🇸 EN' : '🇪🇸 ES'}
        </span>
      </button>
    </div>
  );
};

export default LanguageManager;