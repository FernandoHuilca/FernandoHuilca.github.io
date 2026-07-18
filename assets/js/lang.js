// Diccionario de traducción EN/ES compartido entre index.html y portfolio.html
const translations = {
  // ---------- Header / Nav (shared) ----------
  "ocupacion": { en: "Software Engineering Student", es: "Estudiante de Ingeniería de Software" },
  "descripcion": {
    en: "Seventh-semester Software Engineering student at the National Polytechnic School, Quito - Ecuador, focused on web and mobile application development.",
    es: "Estudiante de séptimo semestre de Ingeniería en Software en la Escuela Politécnica Nacional, Quito - Ecuador, enfocado en el desarrollo de aplicaciones web y móviles."
  },
  "nav-about": { en: "About me", es: "Sobre mí" },
  "nav-portfolio": { en: "Portfolio", es: "Portafolio" },

  // ---------- index.html ----------
  "contact-title": { en: "Contact", es: "Contacto" },
  "about-title": { en: "About me", es: "Sobre mí" },
  "about-text": {
    en: "I am a seventh-semester Software Engineering student at the National Polytechnic School, with a strong background in object-oriented programming, data structures, databases, and web and mobile application development.<br><br>My academic and personal experience includes designing and building systems with Java, C#, Python, HTML5/CSS/JavaScript, PHP, and SQL Server. On the web development side, I write semantic HTML5 along with CSS and JavaScript, and I also work with Python for automated testing using the Django framework together with Gherkin for behavior-driven web development. I'm particularly interested in backend development, databases, and efficient, accessible software design.",
    es: "Soy estudiante de séptimo semestre de Ingeniería en Software en la Escuela Politécnica Nacional, con una sólida formación en programación orientada a objetos, estructuras de datos, bases de datos y desarrollo de aplicaciones web y móviles.<br><br>Mi experiencia académica y personal incluye el diseño y la implementación de sistemas con Java, C#, Python, HTML5/CSS/JavaScript, PHP y SQL Server. En el desarrollo web, escribo HTML5 semántico junto con CSS y JavaScript, y también trabajo con Python para pruebas automatizadas utilizando el framework Django junto con Gherkin para desarrollo web guiado por comportamiento (BDD). Me interesa particularmente el desarrollo backend, las bases de datos y el diseño de software eficiente y accesible."
  },
  "experience-title": { en: "Experience", es: "Experiencia" },

  "exp1-title": { en: "Smart Home Automation Technician", es: "Técnico en Domótica de Casa Inteligente" },
  "exp1-period": { en: "Period: 2025 · 1.5 months", es: "Periodo: 2025 · mes y medio" },
  "exp1-institution": { en: "Institution: Independent project — Cumbayá, Quito", es: "Institución: Proyecto independiente — Cumbayá, Quito" },
  "exp1-desc": {
    en: "Worked for a month and a half on the home automation of a smart house in the Cumbayá area, automating and integrating lighting (Leviton), audio systems (Definitive Technology), automatic irrigation (Rain Bird), alarm systems (Irisco), DVR-based security cameras (Hikvision), and voice-control connectivity through Amazon Alexa.",
    es: "Trabajé durante mes y medio en la domótica de una casa inteligente en el sector de Cumbayá, automatizando e integrando iluminación (Leviton), sistemas de audio (Definitive Technology), riego automático (Rain Bird), sistemas de alarma (Irisco), cámaras de seguridad con DVR (Hikvision) y conectividad de control por voz mediante Amazon Alexa."
  },

  "exp2-title": { en: "Academic Instructor", es: "Instructor Académico" },
  "exp2-period": { en: "Period: 2024-2025", es: "Periodo: 2024-2025" },
  "exp2-institution": { en: "Institution: EPN - LudoLab", es: "Institución: EPN - LudoLab" },
  "exp2-desc": {
    en: "Instructor for senior citizens and teachers from the Ministry of Education as part of the digital inclusion project LudoLab, teaching basic computing concepts and internet navigation.",
    es: "Instructor para adultos mayores y docentes del Ministerio de Educación como parte del proyecto de inclusión digital LudoLab, enseñando conceptos básicos de computación y navegación en internet."
  },

  "exp3-title": { en: "Object-Oriented Programming Instructor", es: "Instructor de Programación Orientada a Objetos" },
  "exp3-period": { en: "Period: March-April 2025", es: "Periodo: Marzo-Abril 2025" },
  "exp3-institution": { en: "Institution: National Polytechnic School", es: "Institución: Escuela Politécnica Nacional" },
  "exp3-desc": {
    en: "Instructor of Object-Oriented Programming (OOP), covering fundamental principles and their application in practical software projects.",
    es: "Instructor de Programación Orientada a Objetos (POO), cubriendo los principios fundamentales y su aplicación en proyectos de software prácticos."
  },

  "exp4-title": { en: "Member of the Innovation and Technology Department", es: "Miembro del Departamento de Innovación y Tecnología" },
  "exp4-period": { en: "Period: February 2025 - 2026", es: "Periodo: Febrero 2025 - 2026" },
  "exp4-institution": { en: "Institution: EPN - AEIS", es: "Institución: EPN - AEIS" },
  "exp4-desc": {
    en: "Active member of the Innovation and Technology Department of the Student Association of the Faculty of Systems Engineering (AEIS), contributing to technological projects and organizing innovation events.",
    es: "Miembro activo del Departamento de Innovación y Tecnología de la Asociación de Estudiantes de la Facultad de Ingeniería de Sistemas (AEIS), contribuyendo a proyectos tecnológicos y organizando eventos de innovación."
  },

  "exp5-title": { en: "Violinist", es: "Violinista" },
  "exp5-period": { en: "Period: 2019-2020", es: "Periodo: 2019-2020" },
  "exp5-institution": { en: "Institution: Youth Orchestra", es: "Institución: Orquesta Juvenil" },
  "exp5-desc": {
    en: "Participated as a violinist in the Youth Orchestra, performing in local concerts and cultural events. Developed teamwork, discipline, and artistic expression through classical music training and orchestral collaboration.",
    es: "Participé como violinista en la Orquesta Juvenil, actuando en conciertos locales y eventos culturales. Desarrollé trabajo en equipo, disciplina y expresión artística a través de la formación en música clásica y la colaboración orquestal."
  },

  "skills-title": { en: "Technical Skills", es: "Habilidades Técnicas" },
  "skills-cat-languages": { en: "Programming Languages", es: "Lenguajes de Programación" },
  "skills-cat-tools": { en: "Tools", es: "Herramientas" },
  "skills-cat-idiomas": { en: "Languages", es: "Idiomas" },

  "lvl-avanzado": { en: "Advanced", es: "Avanzado" },
  "lvl-intermedio": { en: "Intermediate", es: "Intermedio" },
  "lvl-basico": { en: "Basic", es: "Básico" },
  "lvl-nativo": { en: "Native", es: "Nativo" },

  "footer-copy": { en: "© 2026 Fernando Huilca. All rights reserved.", es: "© 2026 Fernando Huilca. Todos los derechos reservados." },
  "footer-tech": { en: "Built with HTML, CSS and JavaScript", es: "Desarrollado con HTML, CSS y JavaScript" },

  // ---------- portfolio.html ----------
  "filter-all": { en: "All", es: "Todos" },

  "proj1-title": { en: "BibioTec — Accessible Digital Library", es: "BibioTec — Biblioteca Digital Accesible" },
  "proj1-period": { en: "2026", es: "2026" },
  "proj1-desc": {
    en: "Team project for a digital library web platform (BibioTec) built with a strong focus on usability and accessibility. Implemented semantic HTML5, WAI-ARIA and keyboard-first navigation, reaching partial WCAG 2.2 AA conformance (38 of 55 applicable success criteria). Testing combined automated tools (WAVE, axe DevTools, Pa11y) with manual audits, screen reader checks (NVDA), color-contrast validation, and reflow testing at 400% zoom.",
    es: "Proyecto en equipo para una plataforma web de biblioteca digital (BibioTec) construida con fuerte enfoque en usabilidad y accesibilidad. Se implementó HTML5 semántico, WAI-ARIA y navegación priorizando el teclado, alcanzando conformidad parcial con WCAG 2.2 AA (38 de 55 criterios de éxito aplicables). Las pruebas combinaron herramientas automáticas (WAVE, axe DevTools, Pa11y) con auditorías manuales, verificación con lector de pantalla (NVDA), validación de contraste de color y pruebas de reflujo al 400% de zoom."
  },
  "proj1-tech": {
    en: "<li>HTML5 Semantic</li><li>CSS</li><li>JavaScript</li><li>WCAG 2.2 AA</li><li>WAI-ARIA</li><li>NVDA / Screen readers</li><li>WAVE, axe DevTools, Pa11y</li>",
    es: "<li>HTML5 Semántico</li><li>CSS</li><li>JavaScript</li><li>WCAG 2.2 AA</li><li>WAI-ARIA</li><li>NVDA / Lectores de pantalla</li><li>WAVE, axe DevTools, Pa11y</li>"
  },

  "proj2-title": { en: "Recipe Web App — Jakarta EE", es: "Recetario Web — Jakarta EE" },
  "proj2-period": { en: "October 2025 - January 2026", es: "Octubre 2025 - Enero 2026" },
  "proj2-desc": {
    en: "Web-based recipe management system built with Jakarta EE and deployed on Apache Tomcat 10. Uses Servlets, JSP and JSTL for the frontend and JPA (EclipseLink) for persistence with MySQL. Enterprise architecture following Java EE standards for maintainability and scalability.",
    es: "Sistema web de gestión de recetas desarrollado con Jakarta EE y desplegado en Apache Tomcat 10. Utiliza Servlets, JSP, JSTL para el frontend y JPA (EclipseLink) para la persistencia con MySQL. Arquitectura empresarial siguiendo estándares Java EE para mantenibilidad y escalabilidad."
  },
  "proj2-tech": {
    en: "<li>Java (JDK 17+)</li><li>Jakarta EE (Servlets, JSP, JSTL)</li><li>MySQL</li><li>JPA (EclipseLink)</li><li>Apache Tomcat 10</li><li>HTML5/CSS3/JavaScript</li>",
    es: "<li>Java (JDK 17+)</li><li>Jakarta EE (Servlets, JSP, JSTL)</li><li>MySQL</li><li>JPA (EclipseLink)</li><li>Apache Tomcat 10</li><li>HTML5/CSS3/JavaScript</li>"
  },

  "proj3-title": { en: "Knockout Game", es: "Knockout Game" },
  "proj3-period": { en: "May - September 2025", es: "Mayo - Septiembre 2025" },
  "proj3-desc": {
    en: "Knockout is a 2D fighting game where players face off in 1v1 combat across different scenarios. Built for the Software Engineering and Requirements course. Made in Unity and programmed in C#.",
    es: "Knockout es un juego de peleas en 2D, donde los jugadores se enfrentan en combates 1vs1 en diversos escenarios. Fue desarrollado como parte de la materia de Ingeniería en Software y Requerimientos. El juego está creado en Unity y programado en C#."
  },
  "proj3-tech": { en: "<li>Unity</li><li>C#</li><li>GitHub</li>", es: "<li>Unity</li><li>C#</li><li>GitHub</li>" },

  "proj4-title": { en: "Fitec", es: "Fitec" },
  "proj4-period": { en: "April - August 2025", es: "Abril - Agosto 2025" },
  "proj4-desc": {
    en: "FITEC is a management system for a network of gyms in Quito; implements a distributed database for clients, instructors, and subscriptions.",
    es: "FITEC es un sistema de gestión para una red de gimnasios en Quito; implementa una base de datos distribuida para clientes, instructores y suscripciones."
  },
  "proj4-tech": { en: "<li>Java</li><li>SQL Server</li><li>GitHub</li>", es: "<li>Java</li><li>SQL Server</li><li>GitHub</li>" },

  "proj5-title": { en: "Grade Prediction API — Neural Network", es: "API Predicción de Notas — Red Neuronal" },
  "proj5-period": { en: "May - September 2025", es: "Mayo - Septiembre 2025" },
  "proj5-desc": {
    en: "Academic grade prediction API using a neural network trained with TensorFlow 2.15.0. Deployed on Render with subdomain permission management. Interactive web interface that consumes the API to predict grades based on student input data.",
    es: "API de predicción de calificaciones académicas usando una red neuronal entrenada con TensorFlow 2.15.0. Desplegada en Render con gestión de permisos por subdominio. Interfaz web interactiva que consume la API para predecir notas basándose en datos de entrada del estudiante."
  },
  "proj5-tech": {
    en: "<li>Python</li><li>TensorFlow</li><li>Google Colab</li><li>HTML/CSS/JavaScript</li><li>Render</li>",
    es: "<li>Python</li><li>TensorFlow</li><li>Google Colab</li><li>HTML/CSS/JavaScript</li><li>Render</li>"
  },

  "proj6-title": { en: "HelloCode", es: "HelloCode" },
  "proj6-period": { en: "April - August 2025", es: "Abril - Agosto 2025" },
  "proj6-desc": {
    en: "HelloCode is an educational platform with interactive, gamified lessons for learning Python, Java, and C#.",
    es: "HelloCode es una plataforma educativa con lecciones interactivas y gamificación para aprender Python, Java y C#."
  },
  "proj6-tech": { en: "<li>Java</li><li>SceneBuilder</li><li>GitHub</li>", es: "<li>Java</li><li>SceneBuilder</li><li>GitHub</li>" },

  "proj7-title": { en: "PoliEats — DSA Project", es: "PoliEats — Proyecto EDA" },
  "proj7-period": { en: "July - September 2024", es: "Julio - Septiembre 2024" },
  "proj7-desc": {
    en: "PoliEats is a management system for the National Polytechnic School's restaurant. Uses data structures (doubly linked lists, queues, and binary search trees) to optimize orders, inventory, and reservations, applying Data Structures and Algorithms concepts.",
    es: "PoliEats es un sistema de gestión para el restaurante de la Escuela Politécnica Nacional. Utiliza estructuras de datos (listas doblemente enlazadas, colas y árboles binarios de búsqueda) para optimizar pedidos, inventarios y reservas, aplicando conceptos de Estructura de Datos y Algoritmos."
  },
  "proj7-tech": { en: "<li>Java</li><li>JavaFX</li><li>Scene Builder</li><li>Git & GitHub</li>", es: "<li>Java</li><li>JavaFX</li><li>Scene Builder</li><li>Git & GitHub</li>" },

  "proj8-title": { en: "Computer Architecture Emulator", es: "Arquitectura Computacional" },
  "proj8-period": { en: "July - August 2024", es: "Julio - Agosto 2024" },
  "proj8-desc": {
    en: "Simulation of how a computer works at the hardware level: memory, cache, CPU, and I/O.",
    es: "Simulación del funcionamiento de una computadora a nivel hardware: memoria, caché, CPU y E/S."
  },
  "proj8-tech": { en: "<li>Java</li><li>SceneBuilder</li><li>GitHub</li>", es: "<li>Java</li><li>SceneBuilder</li><li>GitHub</li>" },

  "proj9-title": { en: "Fingerprint Reader — Arduino", es: "Lector de Huella — Arduino" },
  "proj9-period": { en: "July 2024", es: "Julio 2024" },
  "proj9-desc": {
    en: "Fingerprint reader system integrated with a database for user registration and verification. Implemented on an electronic lock, providing secure access control through electronic components and C programming with Arduino Uno.",
    es: "Sistema de lector de huellas dactilares integrado con base de datos para registro y verificación de usuarios. Implementado en una cerradura electrónica, proporciona control de acceso seguro mediante componentes electrónicos y programación en C con Arduino Uno."
  },
  "proj9-tech": { en: "<li>C</li><li>Arduino Uno</li><li>Fingerprint Sensor</li><li>Git & GitHub</li>", es: "<li>C</li><li>Arduino Uno</li><li>Sensor de Huella</li><li>Git & GitHub</li>" },

  "proj10-title": { en: "Bad Ice Cream — OOP Game", es: "Bad Ice Cream — Juego POO" },
  "proj10-period": { en: "November 2023 - March 2024", es: "Noviembre 2023 - Marzo 2024" },
  "proj10-desc": {
    en: "Clone of the classic Bad Ice Cream game built in Java with OOP. Includes multiple custom, polytechnic-themed levels where you collect fruit, break and create ice, and avoid monsters. Final project for Programming II applying the object-oriented paradigm.",
    es: "Clon del clásico juego Bad Ice Cream desarrollado en Java con POO. Incluye múltiples niveles personalizados politécnicos donde debes recolectar frutas, romper y crear hielo, y evitar monstruos. Proyecto final de Programación II aplicando el paradigma orientado a objetos."
  },
  "proj10-tech": { en: "<li>Java</li><li>OOP (Object-Oriented Programming)</li><li>Git & GitHub</li>", es: "<li>Java</li><li>POO (Programación Orientada a Objetos)</li><li>Git & GitHub</li>" },

  "proj11-title": { en: "Hangman in C++", es: "Ahorcado en C++" },
  "proj11-period": { en: "May - August 2023", es: "Mayo - Agosto 2023" },
  "proj11-desc": {
    en: "Final project for Programming I at EPN. Implements the classic hangman game in C++ using the rlutil library for the console interface. My first language and first complete project. Recommended to compile and run in Visual Studio 2022.",
    es: "Proyecto final de Programación I en la EPN. Implementa el clásico juego del ahorcado en C++ utilizando la librería rlutil para la interfaz en consola. Fue mi primer lenguaje y primer proyecto completo. Recomendado compilar y ejecutar en Visual Studio 2022."
  },
  "proj11-tech": { en: "<li>C++</li><li>rlutil</li><li>Visual Studio 2022</li><li>Git & GitHub</li>", es: "<li>C++</li><li>rlutil</li><li>Visual Studio 2022</li><li>Git & GitHub</li>" },

  "proj12-title": { en: "Library Management System", es: "Gestión de Librería" },
  "proj12-period": { en: "May - August 2023", es: "Mayo - Agosto 2023" },
  "proj12-desc": {
    en: "Library management system built in C++. Allows renting and returning books, searching the database, adding new titles, and managing inventory. Includes a login system and a console-based graphical interface using the rlutil library.",
    es: "Sistema de gestión para biblioteca desarrollado en C++. Permite alquilar y devolver libros, buscar en la base de datos, agregar nuevos títulos y gestionar el inventario. Incluye sistema de login y una interfaz gráfica en consola mediante la librería rlutil."
  },
  "proj12-tech": { en: "<li>C++</li><li>rlutil</li><li>Git & GitHub</li>", es: "<li>C++</li><li>rlutil</li><li>Git & GitHub</li>" },

  "btn-github": { en: "GitHub", es: "GitHub" },
  "btn-demo": { en: "View Demo", es: "Ver Demo" },
  "btn-play": { en: "Play", es: "Jugar" },
  "label-desc": { en: "Description", es: "Descripción" },
  "label-tech": { en: "Technologies used", es: "Tecnologías utilizadas" }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key] && translations[key][lang] !== undefined) {
      el.innerHTML = translations[key][lang];
    }
  });
  document.documentElement.lang = lang;
  localStorage.setItem('site-lang', lang);
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById('lang-' + lang);
  if (activeBtn) activeBtn.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('site-lang') || 'en';
  setLanguage(saved);
});