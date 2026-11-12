export type Locale =
  | "en"
  | "fr"
  | "es";

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
  /* =======================================================
     ENGLISH
  ======================================================= */

  en: {
    ui: {
      languageLabel:
        "Choose language",

      useLanguage:
        "Use",
    },

    hero: {
      eyebrow:
        "Hi, I'm",

      role:
        "UX/UI Designer",

      builder:
        "who also builds.",

      description:
        "I design intuitive digital experiences by connecting user needs, technology and business goals — then I help build them.",

      pillars: [
        "UX / UI",
        "Development",
        "E-Commerce",
      ],

      explore:
        "Explore selected work",
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

    selectedWork: {
      meta:
        "02 / Selected Work",

      metaContext:
        "Three projects · Different mediums",

      title:
        "Different mediums.",

      titleAccent:
        "Same way of thinking.",

      description:
        "These three selected projects move across business platforms, web and e-commerce experiences, Shopify workflows and immersive VR exploration. The medium changes, but each one shows how I understand a problem, shape a direction and turn it into something real.",

      selectedCases:
        "Selected case studies",

      interactionHint:
        "Move to preview · Click to explore",

      openCaseStudy:
        "Open case study",

      openingCaseStudy:
        "Opening case study",

      focusLabel:
        "Focus",

      projects: {
        tokyo: {
          title:
            "Project Tokyo",

          category:
            "UX/UI · Development",

          focus:
            "Complex Product Systems",

          description:
            "A connected business platform bringing CRM, inventory, sales and operations into one intuitive workspace.",

          imageLabel:
            "Live Product",

          imageAlt:
            "Project Tokyo operational dashboard interface",

          aria:
            "Explore Project Tokyo case study",
        },

        ecommerce: {
          title:
            "E-Commerce",

          category:
            "Shopify · Conversion",

          focus:
            "Commerce Experience",

          description:
            "Digital commerce work spanning product discovery, merchandising, promotions, usability and Shopify experiences.",

          imageLabel:
            "Shopify Experience",

          imageAlt:
            "Shopify product collection showing product discovery, filtering and merchandising",

          aria:
            "Explore E-Commerce case study",
        },

        identidad: {
          title:
            "Identidad.CO",

          category:
            "VR · Web · Culture",

          focus:
            "Immersive Storytelling",

          description:
            "An exploration of Colombian identity through web, cultural storytelling, interactive media and an immersive VR concept.",

          imageLabel:
            "Immersive Experience",

          imageAlt:
            "Colombian coffee landscape representing the Identidad.CO cultural experience",

          aria:
            "Explore Identidad.CO case study",
        },
      },

      bridge:
        "Different projects. One iterative process.",

      processLink:
        "See how I work",
    },

    process: {
      meta:
        "03 / How I Work",

      metaContext:
        "Iterative by design",

      title:
        "Design isn't",

      titleAccent:
        "a straight line.",

      description:
        "My process moves between understanding, testing, building and learning. Each step informs the next — and sometimes sends us back to an earlier one.",

      helper:
        "Select any stage to explore it, or let the process move on its own.",

      stages:
        "07 stages",

      interactive:
        "Interactive process",

      auto:
        "Auto",

      on:
        "On",

      off:
        "Off",

      pause:
        "Pause",

      resume:
        "Resume",

      tablistLabel:
        "Design process stages",

      explore:
        "Explore",

      currentStage:
        "Current stage",

      lookingAt:
        "I'm looking at",

      steps: [
        {
          number: "01",
          title: "Identify",

          description:
            "Understand the problem before designing the solution. I look at users, context, business needs, constraints and existing friction.",

          focus:
            "Users · Context · Constraints · Friction",
        },

        {
          number: "02",
          title: "Propose",

          description:
            "Turn what I learned into possible directions, priorities and hypotheses that can be discussed before committing to execution.",

          focus:
            "Direction · Priorities · Opportunities",
        },

        {
          number: "03",
          title: "Prototype",

          description:
            "Make ideas tangible through flows, wireframes and interactive prototypes so the experience can be understood before it is fully built.",

          focus:
            "Flows · Hierarchy · Interaction",
        },

        {
          number: "04",
          title: "Evaluate",

          description:
            "Test assumptions and identify usability problems, confusing interactions or gaps in the proposed solution.",

          focus:
            "Usability · Logic · Assumptions",
        },

        {
          number: "05",
          title: "Refine",

          description:
            "Use feedback and findings to simplify the experience, resolve edge cases and improve clarity before launch.",

          focus:
            "Clarity · Feedback · Edge Cases",
        },

        {
          number: "06",
          title: "Launch",

          description:
            "Bring the solution into a real environment through implementation, quality assurance and attention to the details that shape the final experience.",

          focus:
            "Execution · QA · Implementation",
        },

        {
          number: "07",
          title: "Iterate",

          description:
            "A launch is not the end. Real usage creates new information, so I use what we learn to continue improving the product.",

          focus:
            "Usage · Learning · Improvement",
        },
      ],
    },

    capabilities: {
      meta:
        "04 / What I Bring",

      metaContext:
        "Design · Technology · Business",

      title:
        "Design thinking.",

      titleAccent:
        "Technical execution.",

      description:
        "I'm comfortable moving between interface decisions, implementation, e-commerce and the business context surrounding the experience.",

      areas:
        "Areas",

      currentCapability:
        "Current capability",

      entries: [
        {
          number: "01",
          title: "UX / UI",

          summary:
            "Designing intuitive digital experiences around real user needs.",

          context:
            "Understanding the problem, structuring information and turning complexity into clear interfaces.",

          items: [
            "User Experience",
            "Interface Design",
            "Information Architecture",
            "Responsive Design",
            "User Flows",
            "Prototyping",
          ],
        },

        {
          number: "02",
          title: "Development",

          summary:
            "Turning design decisions into working, responsive interfaces.",

          context:
            "Building what I design helps me think through interaction, feasibility and the details that shape the final experience.",

          items: [
            "Next.js",
            "React",
            "TypeScript",
            "HTML / CSS",
            "Supabase",
            "Front-End Systems",
          ],
        },

        {
          number: "03",
          title: "E-Commerce",

          summary:
            "Connecting customer experience with commercial and conversion goals.",

          context:
            "Looking at discovery, merchandising and the moments that influence how people evaluate and purchase products.",

          items: [
            "Shopify",
            "Product Experience",
            "Promotions",
            "Conversion",
            "Product Discovery",
            "Digital Merchandising",
          ],
        },

        {
          number: "04",
          title: "Digital",

          summary:
            "Understanding the systems, data and business context behind the interface.",

          context:
            "Working beyond the screen when the experience depends on CRM, analytics, content and internal business workflows.",

          items: [
            "Digital Marketing",
            "Analytics",
            "CRM",
            "Content",
            "Business Systems",
            "Automation",
          ],
        },
      ],
    },

    about: {
      meta:
        "05 / About",

      locationTop:
        "Ontario, Canada",

      statementLabel:
        "Multidisciplinary by design",

      prefix:
        "I work between",

      design:
        "design",

      technology:
        "technology",

      connector:
        "and",

      business:
        "business.",

      lead:
        "I'm Sebastián, a UX/UI designer who also builds.",

      paragraph1:
        "I create useful, intuitive digital experiences by connecting user needs, interface decisions, technology and business goals.",

      paragraph2:
        "My background spans UX/UI, web development, e-commerce and digital strategy, which lets me understand both what an experience should feel like and what it takes to make it real.",

      paragraph3:
        "I'm especially interested in complex systems: finding the friction, simplifying the structure and turning it into something clear enough that people actually want to use.",

      approach:
        "How I approach the work",

      approachSteps: [
        "Understand",
        "Simplify",
        "Build",
        "Learn",
      ],

      locationLabel:
        "01 / Location",

      location:
        "Ontario, Canada",

      focusLabel:
        "02 / Focus",

      focus:
        "UX/UI Design",

      buildLabel:
        "03 / Build",

      build:
        "Design + Development",

      statusLabel:
        "04 / Status",

      status:
        "Open to opportunities",
    },

    experience: {
      meta:
        "06 / Experience",

      titleLine1:
        "Working across",

      titleLine2:
        "disciplines.",

      helper:
        "Select a role to explore the work behind it.",

      contextCount:
        "03 selected contexts",

      explore:
        "Explore",

      close:
        "Close",

      contribution:
        "Contribution",

      areas:
        "Areas",

      tools:
        "Tools & systems",

      entries: [
        {
          number: "01",

          period:
            "2025 — Present",

          company:
            "Corporate Facility Supply",

          role:
            "Digital / UX / E-Commerce",

          description:
            "Working across e-commerce, digital experiences, CRM, website optimization and internal business systems.",

          contribution:
            "Connecting customer-facing commerce with the systems, workflows and business needs behind the experience.",

          tools: [
            "Shopify",
            "WordPress",
            "HubSpot",
            "NetSuite",
            "Analytics",
          ],

          areas: [
            "E-Commerce Experiences",
            "UX/UI Improvements",
            "CRM & Workflows",
            "Digital Campaigns",
          ],
        },

        {
          number: "02",

          period:
            "Independent",

          company:
            "Digital Experience Development",

          role:
            "UX/UI + Development",

          description:
            "Designing and building interfaces and digital experiences from research and concept through implementation.",

          contribution:
            "Moving from interface thinking and interaction design into responsive, working digital products.",

          tools: [
            "Next.js",
            "React",
            "TypeScript",
            "Prototyping",
          ],

          areas: [
            "UX/UI Design",
            "Responsive Interfaces",
            "Web Development",
            "Interaction Design",
          ],
        },

        {
          number: "03",

          period:
            "Ongoing",

          company:
            "Project Tokyo",

          role:
            "UX/UI Designer + Developer",

          description:
            "Designing and building a connected CRM, inventory and business operations platform from the ground up.",

          contribution:
            "Owning product thinking, UX/UI and implementation across a complex connected business platform.",

          tools: [
            "Next.js",
            "TypeScript",
            "Supabase",
            "Product Systems",
          ],

          areas: [
            "CRM",
            "Inventory",
            "Operations",
            "Product Architecture",
          ],
        },
      ],
    },

    contact: {
      meta:
        "07 / Contact",

      question:
        "Have a project, opportunity or idea?",

      line1:
        "LET'S BUILD",

      line2:
        "SOMETHING",

      line3:
        "USEFUL.",

      contexts: [
        "Product Design",
        "UX / UI",
        "Development",
      ],

      start:
        "Start a conversation",

      email:
        "Email me",

      linkedin:
        "LinkedIn",

      linkedinAria:
        "Visit Sebastián Yopasá on LinkedIn, opens in a new tab",

      backToTop:
        "Back to top",
    },

    rail: {
      identity:
        "Identity",

      work:
        "Work",

      process:
        "Process",

      capabilities:
        "Skills",

      about:
        "About",

      experience:
        "Experience",

      contact:
        "Contact",

      guided:
        "Guided scroll",

      free:
        "Free scroll",
    },
  },

  /* =======================================================
     FRANÇAIS
  ======================================================= */

  fr: {
    ui: {
      languageLabel:
        "Choisir la langue",

      useLanguage:
        "Utiliser",
    },

    hero: {
      eyebrow:
        "Bonjour, je suis",

      role:
        "Designer UX/UI",

      builder:
        "qui développe aussi.",

      description:
        "Je conçois des expériences numériques intuitives en reliant les besoins des utilisateurs, la technologie et les objectifs d’affaires — puis je contribue à les réaliser.",

      pillars: [
        "UX / UI",
        "Développement",
        "E-Commerce",
      ],

      explore:
        "Voir les projets",
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

    selectedWork: {
      meta:
        "02 / Projets sélectionnés",

      metaContext:
        "Trois projets · Différents formats",

      title:
        "Différents formats.",

      titleAccent:
        "Une même façon de penser.",

      description:
        "Ces trois projets explorent des plateformes d’entreprise, des expériences web et e-commerce, des flux Shopify ainsi qu’un concept immersif en réalité virtuelle. Le format change, mais chacun montre comment je comprends un problème, définis une direction et la transforme en une solution concrète.",

      selectedCases:
        "Études de cas sélectionnées",

      interactionHint:
        "Survolez pour prévisualiser · Cliquez pour explorer",

      openCaseStudy:
        "Voir l'étude de cas",

      openingCaseStudy:
        "Ouverture de l'étude de cas",

      focusLabel:
        "Focus",

      projects: {
        tokyo: {
          title:
            "Project Tokyo",

          category:
            "UX/UI · Développement",

          focus:
            "Systèmes produit complexes",

          description:
            "Une plateforme d’entreprise connectée qui réunit CRM, inventaire, ventes et opérations dans un espace de travail intuitif.",

          imageLabel:
            "Produit fonctionnel",

          imageAlt:
            "Interface du tableau de bord opérationnel de Project Tokyo",

          aria:
            "Explorer l'étude de cas Project Tokyo",
        },

        ecommerce: {
          title:
            "E-Commerce",

          category:
            "Shopify · Conversion",

          focus:
            "Expérience e-commerce",

          description:
            "Des expériences de commerce numérique couvrant la découverte produit, le merchandising, les promotions, l’utilisabilité et Shopify.",

          imageLabel:
            "Expérience Shopify",

          imageAlt:
            "Collection de produits Shopify avec découverte, filtres et merchandising",

          aria:
            "Explorer l'étude de cas E-Commerce",
        },

        identidad: {
          title:
            "Identidad.CO",

          category:
            "VR · Web · Culture",

          focus:
            "Narration immersive",

          description:
            "Une exploration de l’identité colombienne à travers le web, la narration culturelle, les médias interactifs et un concept immersif en réalité virtuelle.",

          imageLabel:
            "Expérience immersive",

          imageAlt:
            "Paysage caféier colombien représentant l'expérience culturelle Identidad.CO",

          aria:
            "Explorer l'étude de cas Identidad.CO",
        },
      },

      bridge:
        "Des projets différents. Un même processus itératif.",

      processLink:
        "Voir ma façon de travailler",
    },

    process: {
      meta:
        "03 / Ma méthode",

      metaContext:
        "Itératif par conception",

      title:
        "Le design n'est pas",

      titleAccent:
        "une ligne droite.",

      description:
        "Mon processus évolue entre compréhension, test, construction et apprentissage. Chaque étape influence la suivante — et nous ramène parfois vers une étape précédente.",

      helper:
        "Sélectionnez une étape pour l'explorer, ou laissez le processus avancer automatiquement.",

      stages:
        "07 étapes",

      interactive:
        "Processus interactif",

      auto:
        "Auto",

      on:
        "Actif",

      off:
        "Inactif",

      pause:
        "Pause",

      resume:
        "Reprendre",

      tablistLabel:
        "Étapes du processus de design",

      explore:
        "Explorer",

      currentStage:
        "Étape actuelle",

      lookingAt:
        "Je m'intéresse à",

      steps: [
        {
          number: "01",
          title: "Identifier",

          description:
            "Comprendre le problème avant de concevoir la solution. J'analyse les utilisateurs, le contexte, les besoins de l'entreprise, les contraintes et les frictions existantes.",

          focus:
            "Utilisateurs · Contexte · Contraintes · Frictions",
        },

        {
          number: "02",
          title: "Proposer",

          description:
            "Transformer les apprentissages en directions possibles, priorités et hypothèses pouvant être discutées avant de passer à l'exécution.",

          focus:
            "Direction · Priorités · Opportunités",
        },

        {
          number: "03",
          title: "Prototyper",

          description:
            "Rendre les idées concrètes grâce aux parcours, wireframes et prototypes interactifs afin de comprendre l'expérience avant sa construction complète.",

          focus:
            "Parcours · Hiérarchie · Interaction",
        },

        {
          number: "04",
          title: "Évaluer",

          description:
            "Tester les hypothèses et identifier les problèmes d'utilisabilité, les interactions confuses ou les lacunes de la solution proposée.",

          focus:
            "Utilisabilité · Logique · Hypothèses",
        },

        {
          number: "05",
          title: "Affiner",

          description:
            "Utiliser les retours et les apprentissages pour simplifier l'expérience, résoudre les cas limites et améliorer la clarté avant le lancement.",

          focus:
            "Clarté · Retours · Cas limites",
        },

        {
          number: "06",
          title: "Lancer",

          description:
            "Amener la solution dans un environnement réel grâce à l'implémentation, l'assurance qualité et l'attention portée aux détails de l'expérience finale.",

          focus:
            "Exécution · QA · Implémentation",
        },

        {
          number: "07",
          title: "Itérer",

          description:
            "Le lancement n'est pas la fin. L'utilisation réelle produit de nouvelles informations que j'utilise pour continuer à améliorer le produit.",

          focus:
            "Usage · Apprentissage · Amélioration",
        },
      ],
    },

    capabilities: {
      meta:
        "04 / Ce que j'apporte",

      metaContext:
        "Design · Technologie · Business",

      title:
        "Réflexion design.",

      titleAccent:
        "Exécution technique.",

      description:
        "Je suis à l'aise pour passer des décisions d'interface à l'implémentation, au e-commerce et au contexte business qui entoure l'expérience.",

      areas:
        "Domaines",

      currentCapability:
        "Compétence actuelle",

      entries: [
        {
          number: "01",
          title: "UX / UI",

          summary:
            "Concevoir des expériences numériques intuitives autour de besoins utilisateurs réels.",

          context:
            "Comprendre le problème, structurer l'information et transformer la complexité en interfaces claires.",

          items: [
            "Expérience utilisateur",
            "Design d'interface",
            "Architecture de l'information",
            "Design responsive",
            "Parcours utilisateur",
            "Prototypage",
          ],
        },

        {
          number: "02",
          title: "Développement",

          summary:
            "Transformer les décisions de design en interfaces fonctionnelles et responsives.",

          context:
            "Construire ce que je conçois m'aide à réfléchir aux interactions, à la faisabilité et aux détails qui façonnent l'expérience finale.",

          items: [
            "Next.js",
            "React",
            "TypeScript",
            "HTML / CSS",
            "Supabase",
            "Systèmes front-end",
          ],
        },

        {
          number: "03",
          title: "E-Commerce",

          summary:
            "Relier l'expérience client aux objectifs commerciaux et de conversion.",

          context:
            "Observer la découverte, le merchandising et les moments qui influencent la manière dont les utilisateurs évaluent et achètent les produits.",

          items: [
            "Shopify",
            "Expérience produit",
            "Promotions",
            "Conversion",
            "Découverte produit",
            "Merchandising digital",
          ],
        },

        {
          number: "04",
          title: "Numérique",

          summary:
            "Comprendre les systèmes, les données et le contexte business derrière l'interface.",

          context:
            "Travailler au-delà de l'écran lorsque l'expérience dépend du CRM, de l'analytique, du contenu et des flux opérationnels internes.",

          items: [
            "Marketing digital",
            "Analytique",
            "CRM",
            "Contenu",
            "Systèmes d'entreprise",
            "Automatisation",
          ],
        },
      ],
    },

    about: {
      meta:
        "05 / Profil",

      locationTop:
        "Ontario, Canada",

      statementLabel:
        "Une approche multidisciplinaire",

      prefix:
        "Je travaille entre le",

      design:
        "design",

      technology:
        "la technologie",

      connector:
        "et le",

      business:
        "business.",

      lead:
        "Je suis Sebastián, designer UX/UI et développeur.",

      paragraph1:
        "Je crée des expériences numériques utiles et intuitives en reliant les besoins des utilisateurs, les décisions d'interface, la technologie et les objectifs business.",

      paragraph2:
        "Mon parcours couvre l'UX/UI, le développement web, le e-commerce et la stratégie numérique. Cela me permet de comprendre à la fois ce qu'une expérience doit faire ressentir et ce qu'il faut pour la rendre réelle.",

      paragraph3:
        "Je m'intéresse particulièrement aux systèmes complexes : identifier les frictions, simplifier la structure et la transformer en quelque chose d'assez clair pour que les utilisateurs aient réellement envie de l'utiliser.",

      approach:
        "Ma manière d'aborder le travail",

      approachSteps: [
        "Comprendre",
        "Simplifier",
        "Construire",
        "Apprendre",
      ],

      locationLabel:
        "01 / Localisation",

      location:
        "Ontario, Canada",

      focusLabel:
        "02 / Focus",

      focus:
        "Design UX/UI",

      buildLabel:
        "03 / Construction",

      build:
        "Design + Développement",

      statusLabel:
        "04 / Statut",

      status:
        "Ouvert aux opportunités",
    },

    experience: {
      meta:
        "06 / Expérience",

      titleLine1:
        "Travailler à travers",

      titleLine2:
        "plusieurs disciplines.",

      helper:
        "Sélectionnez un rôle pour explorer le travail qui se cache derrière.",

      contextCount:
        "03 contextes sélectionnés",

      explore:
        "Explorer",

      close:
        "Fermer",

      contribution:
        "Contribution",

      areas:
        "Domaines",

      tools:
        "Outils & systèmes",

      entries: [
        {
          number: "01",

          period:
            "2025 — Aujourd'hui",

          company:
            "Corporate Facility Supply",

          role:
            "Digital / UX / E-Commerce",

          description:
            "Travail sur le e-commerce, les expériences numériques, le CRM, l'optimisation web et les systèmes internes de l'entreprise.",

          contribution:
            "Relier l'expérience e-commerce côté client aux systèmes, aux flux de travail et aux besoins business qui la soutiennent.",

          tools: [
            "Shopify",
            "WordPress",
            "HubSpot",
            "NetSuite",
            "Analytics",
          ],

          areas: [
            "Expériences E-Commerce",
            "Améliorations UX/UI",
            "CRM & Workflows",
            "Campagnes digitales",
          ],
        },

        {
          number: "02",

          period:
            "Indépendant",

          company:
            "Développement d'expériences numériques",

          role:
            "UX/UI + Développement",

          description:
            "Conception et développement d'interfaces et d'expériences numériques, de la recherche et du concept jusqu'à l'implémentation.",

          contribution:
            "Passer de la réflexion sur l'interface et l'interaction à des produits numériques responsives et fonctionnels.",

          tools: [
            "Next.js",
            "React",
            "TypeScript",
            "Prototypage",
          ],

          areas: [
            "Design UX/UI",
            "Interfaces responsives",
            "Développement web",
            "Design d'interaction",
          ],
        },

        {
          number: "03",

          period:
            "En cours",

          company:
            "Project Tokyo",

          role:
            "Designer UX/UI + Développeur",

          description:
            "Conception et développement, depuis zéro, d'une plateforme connectée de CRM, inventaire et opérations d'entreprise.",

          contribution:
            "Prendre en charge la réflexion produit, l'UX/UI et l'implémentation d'une plateforme business complexe et connectée.",

          tools: [
            "Next.js",
            "TypeScript",
            "Supabase",
            "Systèmes produit",
          ],

          areas: [
            "CRM",
            "Inventaire",
            "Opérations",
            "Architecture produit",
          ],
        },
      ],
    },

    contact: {
      meta:
        "07 / Contact",

      question:
        "Un projet, une opportunité ou une idée ?",

      line1:
        "CRÉONS",

      line2:
        "QUELQUE CHOSE",

      line3:
        "D'UTILE.",

      contexts: [
        "Design produit",
        "UX / UI",
        "Développement",
      ],

      start:
        "Démarrer une conversation",

      email:
        "M'écrire",

      linkedin:
        "LinkedIn",

      linkedinAria:
        "Voir le profil LinkedIn de Sebastián Yopasá, s'ouvre dans un nouvel onglet",

      backToTop:
        "Retour en haut",
    },

    rail: {
      identity:
        "Identité",

      work:
        "Projets",

      process:
        "Processus",

      capabilities:
        "Compétences",

      about:
        "Profil",

      experience:
        "Expérience",

      contact:
        "Contact",

      guided:
        "Défilement guidé",

      free:
        "Défilement libre",
    },
  },

  /* =======================================================
     ESPAÑOL
  ======================================================= */

  es: {
    ui: {
      languageLabel:
        "Elegir idioma",

      useLanguage:
        "Usar",
    },

    hero: {
      eyebrow:
        "Hola, soy",

      role:
        "Diseñador UX/UI",

      builder:
        "que también desarrolla.",

      description:
        "Diseño experiencias digitales intuitivas conectando las necesidades del usuario, la tecnología y los objetivos del negocio — y también ayudo a construirlas.",

      pillars: [
        "UX / UI",
        "Desarrollo",
        "E-Commerce",
      ],

      explore:
        "Explorar proyectos",
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

    selectedWork: {
      meta:
        "02 / Proyectos seleccionados",

      metaContext:
        "Tres proyectos · Distintos medios",

      title:
        "Distintos medios.",

      titleAccent:
        "La misma forma de pensar.",

      description:
        "Estos tres proyectos abarcan plataformas empresariales, experiencias web y e-commerce, flujos de trabajo en Shopify y exploración inmersiva en realidad virtual. El medio cambia, pero cada uno muestra cómo entiendo un problema, defino una dirección y la convierto en algo real.",

      selectedCases:
        "Casos de estudio seleccionados",

      interactionHint:
        "Mueve el cursor para previsualizar · Haz clic para explorar",

      openCaseStudy:
        "Abrir caso de estudio",

      openingCaseStudy:
        "Abriendo caso de estudio",

      focusLabel:
        "Enfoque",

      projects: {
        tokyo: {
          title:
            "Project Tokyo",

          category:
            "UX/UI · Desarrollo",

          focus:
            "Sistemas de producto complejos",

          description:
            "Una plataforma empresarial conectada que reúne CRM, inventario, ventas y operaciones en un espacio de trabajo intuitivo.",

          imageLabel:
            "Producto funcional",

          imageAlt:
            "Interfaz del dashboard operativo de Project Tokyo",

          aria:
            "Explorar el caso de estudio Project Tokyo",
        },

        ecommerce: {
          title:
            "E-Commerce",

          category:
            "Shopify · Conversión",

          focus:
            "Experiencia de comercio",

          description:
            "Trabajo de comercio digital que abarca descubrimiento de productos, merchandising, promociones, usabilidad y experiencias en Shopify.",

          imageLabel:
            "Experiencia Shopify",

          imageAlt:
            "Colección de productos en Shopify con descubrimiento, filtros y merchandising",

          aria:
            "Explorar el caso de estudio E-Commerce",
        },

        identidad: {
          title:
            "Identidad.CO",

          category:
            "VR · Web · Cultura",

          focus:
            "Narrativa inmersiva",

          description:
            "Una exploración de la identidad colombiana a través de la web, la narrativa cultural, medios interactivos y un concepto inmersivo de realidad virtual.",

          imageLabel:
            "Experiencia inmersiva",

          imageAlt:
            "Paisaje cafetero colombiano que representa la experiencia cultural de Identidad.CO",

          aria:
            "Explorar el caso de estudio Identidad.CO",
        },
      },

      bridge:
        "Proyectos distintos. Un mismo proceso iterativo.",

      processLink:
        "Ver cómo trabajo",
    },

    process: {
      meta:
        "03 / Cómo trabajo",

      metaContext:
        "Iterativo por diseño",

      title:
        "El diseño no es",

      titleAccent:
        "una línea recta.",

      description:
        "Mi proceso se mueve entre entender, probar, construir y aprender. Cada etapa informa la siguiente — y algunas veces nos devuelve a una etapa anterior.",

      helper:
        "Selecciona cualquier etapa para explorarla o deja que el proceso avance automáticamente.",

      stages:
        "07 etapas",

      interactive:
        "Proceso interactivo",

      auto:
        "Auto",

      on:
        "Activo",

      off:
        "Inactivo",

      pause:
        "Pausar",

      resume:
        "Reanudar",

      tablistLabel:
        "Etapas del proceso de diseño",

      explore:
        "Explorar",

      currentStage:
        "Etapa actual",

      lookingAt:
        "Estoy observando",

      steps: [
        {
          number: "01",
          title: "Identificar",

          description:
            "Entender el problema antes de diseñar la solución. Analizo usuarios, contexto, necesidades del negocio, restricciones y fricciones existentes.",

          focus:
            "Usuarios · Contexto · Restricciones · Fricción",
        },

        {
          number: "02",
          title: "Proponer",

          description:
            "Convertir lo aprendido en posibles direcciones, prioridades e hipótesis que puedan discutirse antes de comprometerse con la ejecución.",

          focus:
            "Dirección · Prioridades · Oportunidades",
        },

        {
          number: "03",
          title: "Prototipar",

          description:
            "Hacer tangibles las ideas mediante flujos, wireframes y prototipos interactivos para entender la experiencia antes de construirla por completo.",

          focus:
            "Flujos · Jerarquía · Interacción",
        },

        {
          number: "04",
          title: "Evaluar",

          description:
            "Probar supuestos e identificar problemas de usabilidad, interacciones confusas o vacíos dentro de la solución propuesta.",

          focus:
            "Usabilidad · Lógica · Supuestos",
        },

        {
          number: "05",
          title: "Refinar",

          description:
            "Utilizar feedback y hallazgos para simplificar la experiencia, resolver casos límite y mejorar la claridad antes del lanzamiento.",

          focus:
            "Claridad · Feedback · Casos límite",
        },

        {
          number: "06",
          title: "Lanzar",

          description:
            "Llevar la solución a un entorno real mediante implementación, control de calidad y atención a los detalles que dan forma a la experiencia final.",

          focus:
            "Ejecución · QA · Implementación",
        },

        {
          number: "07",
          title: "Iterar",

          description:
            "El lanzamiento no es el final. El uso real genera nueva información que utilizo para seguir mejorando el producto.",

          focus:
            "Uso · Aprendizaje · Mejora",
        },
      ],
    },

    capabilities: {
      meta:
        "04 / Lo que aporto",

      metaContext:
        "Diseño · Tecnología · Negocio",

      title:
        "Pensamiento de diseño.",

      titleAccent:
        "Ejecución técnica.",

      description:
        "Me siento cómodo moviéndome entre decisiones de interfaz, implementación, e-commerce y el contexto de negocio que rodea la experiencia.",

      areas:
        "Áreas",

      currentCapability:
        "Capacidad actual",

      entries: [
        {
          number: "01",
          title: "UX / UI",

          summary:
            "Diseñando experiencias digitales intuitivas alrededor de necesidades reales de los usuarios.",

          context:
            "Entender el problema, estructurar la información y convertir la complejidad en interfaces claras.",

          items: [
            "Experiencia de usuario",
            "Diseño de interfaz",
            "Arquitectura de información",
            "Diseño responsive",
            "Flujos de usuario",
            "Prototipado",
          ],
        },

        {
          number: "02",
          title: "Desarrollo",

          summary:
            "Convirtiendo decisiones de diseño en interfaces funcionales y responsivas.",

          context:
            "Construir lo que diseño me ayuda a pensar en la interacción, la viabilidad y los detalles que dan forma a la experiencia final.",

          items: [
            "Next.js",
            "React",
            "TypeScript",
            "HTML / CSS",
            "Supabase",
            "Sistemas Front-End",
          ],
        },

        {
          number: "03",
          title: "E-Commerce",

          summary:
            "Conectando la experiencia del cliente con objetivos comerciales y de conversión.",

          context:
            "Analizando el descubrimiento, el merchandising y los momentos que influyen en cómo las personas evalúan y compran productos.",

          items: [
            "Shopify",
            "Experiencia de producto",
            "Promociones",
            "Conversión",
            "Descubrimiento de producto",
            "Merchandising digital",
          ],
        },

        {
          number: "04",
          title: "Digital",

          summary:
            "Entendiendo los sistemas, los datos y el contexto de negocio detrás de la interfaz.",

          context:
            "Trabajando más allá de la pantalla cuando la experiencia depende del CRM, la analítica, el contenido y los flujos internos del negocio.",

          items: [
            "Marketing digital",
            "Analítica",
            "CRM",
            "Contenido",
            "Sistemas de negocio",
            "Automatización",
          ],
        },
      ],
    },

    about: {
      meta:
        "05 / Perfil",

      locationTop:
        "Ontario, Canadá",

      statementLabel:
        "Multidisciplinario por diseño",

      prefix:
        "Trabajo entre el",

      design:
        "diseño",

      technology:
        "la tecnología",

      connector:
        "y el",

      business:
        "negocio.",

      lead:
        "Soy Sebastián, diseñador UX/UI y también desarrollo.",

      paragraph1:
        "Creo experiencias digitales útiles e intuitivas conectando las necesidades del usuario, las decisiones de interfaz, la tecnología y los objetivos del negocio.",

      paragraph2:
        "Mi experiencia abarca UX/UI, desarrollo web, e-commerce y estrategia digital, lo que me permite entender tanto cómo debería sentirse una experiencia como lo que se necesita para hacerla realidad.",

      paragraph3:
        "Me interesan especialmente los sistemas complejos: encontrar la fricción, simplificar la estructura y convertirla en algo suficientemente claro para que las personas realmente quieran utilizarlo.",

      approach:
        "Cómo abordo el trabajo",

      approachSteps: [
        "Entender",
        "Simplificar",
        "Construir",
        "Aprender",
      ],

      locationLabel:
        "01 / Ubicación",

      location:
        "Ontario, Canadá",

      focusLabel:
        "02 / Enfoque",

      focus:
        "Diseño UX/UI",

      buildLabel:
        "03 / Construcción",

      build:
        "Diseño + Desarrollo",

      statusLabel:
        "04 / Estado",

      status:
        "Abierto a oportunidades",
    },

    experience: {
      meta:
        "06 / Experiencia",

      titleLine1:
        "Trabajando entre",

      titleLine2:
        "distintas disciplinas.",

      helper:
        "Selecciona un rol para explorar el trabajo detrás de él.",

      contextCount:
        "03 contextos seleccionados",

      explore:
        "Explorar",

      close:
        "Cerrar",

      contribution:
        "Contribución",

      areas:
        "Áreas",

      tools:
        "Herramientas y sistemas",

      entries: [
        {
          number: "01",

          period:
            "2025 — Presente",

          company:
            "Corporate Facility Supply",

          role:
            "Digital / UX / E-Commerce",

          description:
            "Trabajo en e-commerce, experiencias digitales, CRM, optimización web y sistemas internos de negocio.",

          contribution:
            "Conectar la experiencia comercial orientada al cliente con los sistemas, flujos de trabajo y necesidades del negocio que existen detrás de ella.",

          tools: [
            "Shopify",
            "WordPress",
            "HubSpot",
            "NetSuite",
            "Analytics",
          ],

          areas: [
            "Experiencias E-Commerce",
            "Mejoras UX/UI",
            "CRM y flujos de trabajo",
            "Campañas digitales",
          ],
        },

        {
          number: "02",

          period:
            "Independiente",

          company:
            "Desarrollo de experiencias digitales",

          role:
            "UX/UI + Desarrollo",

          description:
            "Diseño y desarrollo de interfaces y experiencias digitales desde la investigación y el concepto hasta la implementación.",

          contribution:
            "Llevar el pensamiento de interfaz y diseño de interacción hacia productos digitales responsivos y funcionales.",

          tools: [
            "Next.js",
            "React",
            "TypeScript",
            "Prototipado",
          ],

          areas: [
            "Diseño UX/UI",
            "Interfaces responsive",
            "Desarrollo web",
            "Diseño de interacción",
          ],
        },

        {
          number: "03",

          period:
            "En curso",

          company:
            "Project Tokyo",

          role:
            "Diseñador UX/UI + Desarrollador",

          description:
            "Diseño y desarrollo desde cero de una plataforma conectada de CRM, inventario y operaciones de negocio.",

          contribution:
            "Liderar el pensamiento de producto, UX/UI e implementación dentro de una plataforma empresarial compleja y conectada.",

          tools: [
            "Next.js",
            "TypeScript",
            "Supabase",
            "Sistemas de producto",
          ],

          areas: [
            "CRM",
            "Inventario",
            "Operaciones",
            "Arquitectura de producto",
          ],
        },
      ],
    },

    contact: {
      meta:
        "07 / Contacto",

      question:
        "¿Tienes un proyecto, una oportunidad o una idea?",

      line1:
        "CONSTRUYAMOS",

      line2:
        "ALGO",

      line3:
        "ÚTIL.",

      contexts: [
        "Diseño de producto",
        "UX / UI",
        "Desarrollo",
      ],

      start:
        "Iniciar una conversación",

      email:
        "Escríbeme",

      linkedin:
        "LinkedIn",

      linkedinAria:
        "Visitar el perfil de Sebastián Yopasá en LinkedIn, abre en una nueva pestaña",

      backToTop:
        "Volver arriba",
    },

    rail: {
      identity:
        "Identidad",

      work:
        "Proyectos",

      process:
        "Proceso",

      capabilities:
        "Habilidades",

      about:
        "Perfil",

      experience:
        "Experiencia",

      contact:
        "Contacto",

      guided:
        "Scroll guiado",

      free:
        "Scroll libre",
    },
  },
} as const;