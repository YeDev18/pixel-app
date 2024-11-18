
interface QualiteData {
    icon: JSX.Element;
    titre: string;
    reference: string;
    description: string;
  }
  
  interface ProcessData {
    titre: string;
    description: string;
  }
  
  interface StackData {
    img: string;
    description: string;
  }
  
  export const DevWebData = {
    // Section Qualité
    qualites: [
        {
            icon: <YourIconComponent1 />, // Remplacez par vos icônes (par exemple, FontAwesomeIcon)
            titre: "Haute Performance",
            reference: "ref-performance",
            description: "Optimisation de la vitesse et de la réactivité des applications pour une expérience utilisateur fluide.",
          },
          {
            icon: <YourIconComponent2 />,
            titre: "Sécurité",
            reference: "ref-securite",
            description: "Protocole de sécurité avancé pour assurer la confidentialité des données des utilisateurs.",
          },
          {
            icon: <YourIconComponent1 />, // Remplacez par vos icônes (par exemple, FontAwesomeIcon)
            titre: "Haute Performance",
            reference: "ref-performance",
            description: "Optimisation de la vitesse et de la réactivité des applications pour une expérience utilisateur fluide.",
          },
          {
            icon: <YourIconComponent2 />,
            titre: "Sécurité",
            reference: "ref-securite",
            description: "Protocole de sécurité avancé pour assurer la confidentialité des données des utilisateurs.",
          },
          {
            icon: <YourIconComponent2 />,
            titre: "Sécurité",
            reference: "ref-securite",
            description: "Protocole de sécurité avancé pour assurer la confidentialité des données des utilisateurs.",
          },
    ] as QualiteData[],
  
    process: [
      {
        titre: "Analyse des besoins",
        description: "Nous commençons par comprendre les besoins spécifiques de votre entreprise pour concevoir une solution adaptée.",
      },
      {
        titre: "Conception UI/UX",
        description: "Développement de maquettes et prototypes interactifs pour une expérience utilisateur optimale.",
      },
      {
        titre: "Développement Frontend & Backend",
        description: "Construction d'une interface utilisateur efficace et d'une architecture backend sécurisée.",
      },
      {
        titre: "Tests & Déploiement",
        description: "Vérification de la performance et de la sécurité avant la mise en ligne finale.",
      },
    ] as ProcessData[],
  
    stack: [
      {
        img: "/images/stacks/react.png",
        description: "React pour un rendu performant et une interface utilisateur dynamique.",
      },
      {
        img: "/images/stacks/nodejs.png",
        description: "Node.js pour un backend rapide et évolutif.",
      },
      {
        img: "/images/stacks/docker.png",
        description: "Docker pour la conteneurisation et le déploiement de l'application.",
      },
      {
        img: "/images/stacks/aws.png",
        description: "AWS pour l'hébergement et la gestion de l'infrastructure.",
      },
    ] as StackData[],
  };
  