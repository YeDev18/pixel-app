// Processus de développement général
export interface ProcessStep {
    id: number;
    step: string;
    description: string;
  }


export const developmentProcessData: ProcessStep[] = [
    {
      id: 1,
      step: "Analyse des besoins",
      description:
        "Identification et analyse des besoins du client pour définir les objectifs et les fonctionnalités du projet. Cette étape permet de comprendre les attentes et d'établir une vision claire du produit final.",
    },
    {
      id: 2,
      step: "Planification",
      description:
        "Élaboration d'un plan de projet détaillé incluant les ressources, les délais et les étapes clés. Cette planification structure les tâches à accomplir et fixe des échéances pour chaque phase du projet.",
    },
    {
      id: 3,
      step: "Conception",
      description:
        "Création des maquettes et de l'architecture du produit. Les designers et les architectes logiciels établissent la structure visuelle et technique, en assurant la cohérence de l'expérience utilisateur.",
    },
    {
      id: 4,
      step: "Développement",
      description:
        "Réalisation du code et des fonctionnalités du projet par l'équipe de développement. Cette phase inclut la programmation, l'intégration des fonctionnalités et la vérification de la compatibilité avec les systèmes existants.",
    },
    {
      id: 5,
      step: "Tests et validation",
      description:
        "Exécution de tests rigoureux pour identifier et corriger les bugs ou les erreurs. Les tests comprennent des tests fonctionnels, de performance et de sécurité pour garantir un produit de haute qualité.",
    },
    {
      id: 6,
      step: "Déploiement",
      description:
        "Mise en production de l'application ou du site. Cette étape inclut l'installation sur le serveur et la configuration de l'infrastructure nécessaire pour rendre le produit accessible aux utilisateurs finaux.",
    },
    {
      id: 7,
      step: "Maintenance et support",
      description:
        "Suivi continu pour assurer la stabilité du produit et répondre aux retours des utilisateurs. Les mises à jour, les améliorations et le support technique permettent d'adapter le produit aux besoins changeants et d'assurer sa longévité.",
    },
  ];
  

  export const graphicDesignProcess: ProcessStep[] = [
    {
      id: 1,
      step: "Brief et recherche créative",
      description:
        "Collecte d'informations pour comprendre les attentes visuelles du client. Analyse des concurrents et recherche de styles adaptés.",
    },
    {
      id: 2,
      step: "Création de moodboard",
      description:
        "Élaboration d'un moodboard pour déterminer les couleurs, textures et styles visuels en phase avec l'image de marque.",
    },
    {
      id: 3,
      step: "Design initial",
      description:
        "Création des premières ébauches du design et présentation au client pour validation des éléments graphiques.",
    },
    {
      id: 4,
      step: "Révisions et ajustements",
      description:
        "Réalisation des modifications demandées par le client et ajustement des détails pour parfaire le design.",
    },
    {
      id: 5,
      step: "Livraison des fichiers finaux",
      description:
        "Préparation et livraison des fichiers finaux en formats requis pour les différentes plateformes.",
    },
    {
      id: 6,
      step: "Support post-livraison",
      description:
        "Assistance en cas de besoin d'adaptations ou ajustements mineurs après la livraison finale des éléments graphiques.",
    },
  ];
  
  // Processus audiovisuel
  export const audiovisualProcess: ProcessStep[] = [
    {
      id: 1,
      step: "Script et storyboard",
      description:
        "Développement du scénario et création d'un storyboard pour visualiser chaque étape de la production.",
    },
    {
      id: 2,
      step: "Pré-production",
      description:
        "Organisation des éléments nécessaires, y compris le repérage des lieux, casting, matériel et planning.",
    },
    {
      id: 3,
      step: "Tournage",
      description:
        "Enregistrement des vidéos et des éléments sonores conformément au storyboard établi.",
    },
    {
      id: 4,
      step: "Montage et post-production",
      description:
        "Montage vidéo, ajout d'effets visuels et sonores, correction des couleurs pour assurer une qualité optimale.",
    },
    {
      id: 5,
      step: "Révisions et approbation",
      description:
        "Présentation de la version préliminaire au client pour recueillir les commentaires et procéder aux modifications nécessaires.",
    },
    {
      id: 6,
      step: "Livraison finale",
      description:
        "Exportation et livraison du contenu finalisé dans les formats requis, prêts pour diffusion.",
    },
  ];
  
  // Processus de community management
  export const communityManagementProcess = [
    {
      id: 1,
      step: "Définition de la stratégie",
      description:
        "Élaboration d'une stratégie de communication en ligne adaptée aux objectifs et à l'audience cible du client.",
    },
    {
      id: 2,
      step: "Création de contenu",
      description:
        "Production de contenu engageant, incluant textes, images, et vidéos pour les réseaux sociaux.",
    },
    {
      id: 3,
      step: "Planification des publications",
      description:
        "Organisation des publications selon un calendrier précis pour maximiser la visibilité et l'engagement.",
    },
    {
      id: 4,
      step: "Gestion des interactions",
      description:
        "Suivi et réponse aux interactions avec les abonnés pour renforcer la relation avec la communauté.",
    },
    {
      id: 5,
      step: "Analyse des performances",
      description:
        "Évaluation des résultats des campagnes et ajustement de la stratégie en fonction des données collectées.",
    },
    {
      id: 6,
      step: "Rapports et recommandations",
      description:
        "Rédaction de rapports de performance et suggestions d'améliorations pour optimiser la présence en ligne.",
    },
  ];
  