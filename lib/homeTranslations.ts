export type Locale = "en" | "fr" | "es";

export const languageOptions: {
  code: Locale;
  label: string;
  short: string;
}[] = [
  {
    code: "en",
    label: "English",
    short: "EN",
  },
  {
    code: "fr",
    label: "Français",
    short: "FR",
  },
  {
    code: "es",
    label: "Español",
    short: "ES",
  },
];

export const homeCopy = {
  en: {
    hero: {
      eyebrow: "Hi, I'm",

      role: "UX/UI Designer",

      builder: "who also builds.",

      description:
        "I design intuitive digital experiences by connecting user needs, technology and business goals — then I help build them.",

      pillars: [
        "UX / UI",
        "Development",
        "E-Commerce",
      ],

      explore: "Explore selected work",
    },

    ticker: [
      "UX / UI",
      "USER FLOWS",
      "PROTOTYPING",
      "INTERACTION",
      "DEVELOPMENT",
      "E-COMMERCE",
      "DESIGN SYSTEMS",
      "BUSINESS THINKING",
      "ITERATE",
    ],

    rail: {
      identity: "Identity",
      work: "Work",
      process: "Process",
      capabilities: "Skills",
      about: "About",
      experience: "Experience",
      contact: "Contact",

      guided: "Guided scroll",
      free: "Free scroll",
    },
  },

  fr: {
    hero: {
      eyebrow: "Bonjour, je suis",

      role: "Designer UX/UI",

      builder: "qui développe aussi.",

      description:
        "Je conçois des expériences numériques intuitives en reliant les besoins des utilisateurs, la technologie et les objectifs d’affaires — puis je contribue à les réaliser.",

      pillars: [
        "UX / UI",
        "Développement",
        "E-Commerce",
      ],

      explore: "Voir les projets",
    },

    ticker: [
      "UX / UI",
      "PARCOURS UTILISATEUR",
      "PROTOTYPAGE",
      "INTERACTION",
      "DÉVELOPPEMENT",
      "E-COMMERCE",
      "DESIGN SYSTEMS",
      "STRATÉGIE",
      "ITÉRER",
    ],

    rail: {
      identity: "Identité",
      work: "Projets",
      process: "Processus",
      capabilities: "Compétences",
      about: "Profil",
      experience: "Expérience",
      contact: "Contact",

      guided: "Défilement guidé",
      free: "Défilement libre",
    },
  },

  es: {
    hero: {
      eyebrow: "Hola, soy",

      role: "Diseñador UX/UI",

      builder: "que también desarrolla.",

      description:
        "Diseño experiencias digitales intuitivas conectando las necesidades del usuario, la tecnología y los objetivos del negocio — y también ayudo a construirlas.",

      pillars: [
        "UX / UI",
        "Desarrollo",
        "E-Commerce",
      ],

      explore: "Explorar proyectos",
    },

    ticker: [
      "UX / UI",
      "FLUJOS DE USUARIO",
      "PROTOTIPADO",
      "INTERACCIÓN",
      "DESARROLLO",
      "E-COMMERCE",
      "SISTEMAS DE DISEÑO",
      "NEGOCIO",
      "ITERAR",
    ],

    rail: {
      identity: "Identidad",
      work: "Proyectos",
      process: "Proceso",
      capabilities: "Habilidades",
      about: "Perfil",
      experience: "Experiencia",
      contact: "Contacto",

      guided: "Scroll guiado",
      free: "Scroll libre",
    },
  },
} as const;