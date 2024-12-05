import {
	Audio,
	Computer,
	Design,
	Graph,
	Marketing,
} from "../components/atoms/icons/service.icon";

export type Definition = {
	paragraph: string;
};
export type CardProps = {
	title: string;
	paragraph: string;
	icon?: JSX.Element;
};
export type ProcessProps = {
	id: number;
	paragraph: string;
	item: string;
};
export type PackageProps = {
	name: string;
	feature: string[];
	tarif: string;
};
export type OptionsProps = {
	name: string;
	package: PackageProps[];
};

export type ServiceDataProps = {
	id: number;
	name: string;
	link: string;
	icon?: JSX.Element;
	definitions: Definition[];
	card: CardProps[];
	process: ProcessProps[];
	option: OptionsProps[];
};
export const ServiceData: ServiceDataProps[] = [
	{
		id: 1,
		name: "Community Management",
		link: "Community-management",
		icon: <Marketing />,
		definitions: [
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
		],
		card: [
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe.`,
				icon: <Computer />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
				icon: <Computer />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe.`,
				icon: <Computer />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
				icon: <Computer />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
				icon: <Computer />,
			},
		],
		process: [
			{
				id: 1,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 2,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 3,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 4,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 5,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
		],
		option: [
			{
				name: "PME & E-COMMERCE",
				package: [
					{
						name: "Crystal",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`10 Publications / Mois`,
							`3 Posts sponsorisés / Mois`,
							`1 Seances photo (40 photos) & 1e seance Video PRO (Short content video 15s - 30s) / Mois`,
							`Accompagnement pour des : 1 Direct (Live)`,
							`15 Story / Mois`,
							`2 Reseaux Sociaux au choix`,
							`Gestion des commentaire et SAV`,
							`Rapport Veille et contrôle de sa e-réputation`,
							`Reporting mensuel et suggestions`,
						],
						tarif: `85.000 FCFA`,
					},
					{
						name: "Emmeraude",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`20 Publications / Mois (2 Publications par jours)`,
							`6 Posts sponsorisés / Mois (2 Publications par semaine)`,
							`1 Seances photo (50 photos) & 1e seance Video PRO (Short content video 15s - 30s) / Mois`,
							`Accompagnement pour des : 2 Direct (Live)/Mois`,
							`20 Story / Mois(1er story/jour)`,
							`3 Reseaux Sociaux au choix`,
							`Gestion des commentaire et SAV`,
							`Rapport Veille et contrôle de sa e-réputation`,
							`Reporting mensuel et suggestions`,
						],
						tarif: `120.000 FCFA`,
					},
					{
						name: "Rubi",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`40 Publications / Mois`,
							`8 Posts sponsorisés / Mois `,
							`1 Seances photo (60 photos) & 1e seance Video PRO (Short content video 15s - 30s) / Mois`,
							`Accompagnement pour des : 2 Direct (Live)/Mois`,
							`30 Story / Mois(1er story/jour)`,
							`Gestion Multi-compte`,
							`Gestion des commentaire et SAV`,
							`Rapport Veille et contrôle de sa e-réputation`,
							`Reporting mensuel et suggestions`,
						],
						tarif: `155.000 FCFA`,
					},
				],
			},

			{
				name: "Hôtellerie et Tourisme",
				package: [
					{
						name: "Crystal",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`15 Publications / Mois`,
							`3 Posts sponsorisés / Mois`,
							`1 Seances photo (40 photos) & 1e seance Video PRO (Short content video 15s - 30s) / Mois`,
							`15 Story / Mois`,
							`2 Reseaux Sociaux au choix`,
							`Rapport Veille et contrôle de sa e-réputation`,
							`Reporting mensuel et suggestions`,
						],
						tarif: `150.000 FCFA`,
					},
					{
						name: "Emmeraude",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`20 Publications / Mois`,
							`6 Posts sponsorisés / Mois`,
							`1 Seances photo (40 photos) & 1e seance Video PRO (Short content video 15s - 30s) / Mois`,
							`1 Webinaires (Conseil et accompagnement)`,
							`20 Story / Mois ( 1e Story / Jour)`,
							`3 Reseaux Sociaux au choix`,
							`Rapport Veille et contrôle de sa e-réputation`,
							`Gestion des commentaire et SAV`,
							`Reporting mensuel et suggestions`,
						],
						tarif: `250.000 FCFA`,
					},
					{
						name: "Rubi",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`40 Publications / Mois`,
							`8 Posts sponsorisés / Mois`,
							`1 Seances photo (40 photos) & 1e seance Video PRO (Short content video 15s - 30s) / Mois`,
							`2 Webinaires (Conseil et accompagnement)`,
							`30 Story / Mois ( 1e Story / Jour)`,
							`Gestion Multi-compte`,
							`Rapport Veille et contrôle de sa e-réputation`,
							`Gestion des commentaire et SAV`,
							`Reporting mensuel et suggestions`,
						],
						tarif: `350.000 FCFA`,
					},
				],
			},
			{
				name: "Éducation et Formation",
				package: [
					{
						name: "Crystal",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`10 Publications / Mois`,
							`3 Posts sponsorisés / Mois`,
							`1 Seances photo (40 photos) & 1e seance Video PRO (Short content video 15s - 30s) / Mois`,
							`15 Story / Mois ( 1e Story / Jour)`,
							`2 Reseaux Sociaux au choix`,
							`Rapport Veille et contrôle de sa e-réputation`,
							`Gestion des commentaire et SAV`,
							`Reporting mensuel et suggestions`,
						],
						tarif: `150.000 FCFA`,
					},
					{
						name: "Emmeraude",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`20 Publications / Mois`,
							`6 Posts sponsorisés / Mois`,
							`1 Seances photo (40 photos) & 1e seance Video PRO (Short content video 15s - 30s) / Mois`,
							`20 Story / Mois ( 1e Story / Jour)`,
							`3 Reseaux Sociaux au choix`,
							`Rapport Veille et contrôle de sa e-réputation`,
							`Gestion des commentaire et SAV`,
							`Reporting mensuel et suggestions`,
						],
						tarif: `250.000 FCFA`,
					},
					{
						name: "Rubi",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`40 Publications / Mois`,
							`8 Posts sponsorisés / Mois`,
							`1 Seances photo (40 photos) & 1e seance Video PRO (Short content video 15s - 30s) / Mois`,
							`2 Webinaires (Conseil et accompagnement)`,
							`30 Story / Mois ( 1e Story / Jour)`,
							`Gestion Multi-compte`,
							`Rapport Veille et contrôle de sa e-réputation`,
							`Gestion des commentaire et SAV`,
							`Reporting mensuel et suggestions`,
						],
						tarif: `155.000 FCFA`,
					},
				],
			},
			{
				name: "Politiques & Personalites Publiques",
				package: [
					{
						name: "Crystal",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`10 Publications / Mois. (Combinaison des posts informatifs (discours, annonces, positions politiques)), Storytelling).`,
							`3 Posts sponsorisés / Mois`,
							`1 Seances photo (40 photos) & 1e seance Video PRO (Short content video 15s - 30s) / Mois`,
							`15 Story / Mois ( 1e Story / Jour)`,
							`2 Reseaux Sociaux au choix`,
							`Rapport Veille et contrôle de sa e-réputation`,
							`Gestion des commentaire et SAV`,
							`Reporting mensuel et suggestions`,
						],
						tarif: `350.000 FCFA`,
					},
					{
						name: "Emmeraude",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`20 Publications / Mois. (Combinaison des posts informatifs (discours, annonces, positions politiques)), Storytelling).`,
							`1 Vidéo en direct et Webinaires,`,
							`6 Posts sponsorisés / Mois`,
							`1 Seances photo (50 photos) & 1e seance Video PRO (Short content video 15s - 30s) / Mois`,
							`20 Story / Mois ( 1e Story / Jour)`,
							`3 Reseaux Sociaux au choix`,
							`Rapport Veille et contrôle de sa e-réputation`,
							`Gestion des commentaire et SAV`,
							`Reporting mensuel et suggestions`,
						],
						tarif: `600.000 FCFA`,
					},
					{
						name: "Rubi",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`40 Publications / Mois. (Combinaison des posts informatifs (discours, annonces, positions politiques)), Storytelling).`,
							`Vidéos en direct et Webinaires,`,
							`Sondage et questions`,
							`8 Posts sponsorisés / Mois`,
							`2 Seances photo (50 photos) & 1e seance Video PRO (Short content video 15s - 30s) / Mois`,
							`30 Story / Mois ( 1e Story / Jour)`,
							`Gestion Multi-compte`,
							`Rapport Veille et contrôle de sa e-réputation`,
							`Gestion des commentaire et SAV`,
							`Reporting mensuel et suggestions`,
						],
						tarif: `1.000.000 FCFA`,
					},
				],
			},

			{
				name: "Organisations Non Gouvernementales (ONG)",
				package: [
					{
						name: "Crystal",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`10 Publications / Mois`,
							`3 Posts sponsorisés / Mois`,
							`1 Seances photo (40 photos) & 1e seance Video PRO (Short content video 15s - 30s) / Mois`,
							`Accompagnement pour des : 1 Direct (Live)`,
							`15 Story / Mois`,
						],
						tarif: `85.000 FCFA`,
					},
					{
						name: "Emmeraude",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`20 Publications / Mois. (2Publications par jours)`,
						],
						tarif: `120.000 FCFA`,
					},
					{
						name: "Rubi",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`40 Publications / Mois`,
							`8 Posts sponsorisés / Mois`,
							`Accompagnement pour des : 4 Direct (Live)/Mois`,
						],
						tarif: `155.000 FCFA`,
					},
				],
			},
			{
				name: "Entreprises B2B & Secteur des Services",
				package: [
					{
						name: "Crystal",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`10 Publications / Mois`,
							`3 Posts sponsorisés / Mois`,
							`1 Seances photo (40 photos) & 1e seance Video PRO (Short content video 15s - 30s) / Mois`,
							`Accompagnement pour des : 1 Direct (Live)`,
							`15 Story / Mois`,
						],
						tarif: `85.000 FCFA`,
					},
					{
						name: "Emmeraude",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`20 Publications / Mois. (2Publications par jours)`,
						],
						tarif: `120.000 FCFA`,
					},
					{
						name: "Rubi",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`40 Publications / Mois`,
							`8 Posts sponsorisés / Mois`,
							`Accompagnement pour des : 4 Direct (Live)/Mois`,
						],
						tarif: `155.000 FCFA`,
					},
				],
			},
		],
	},
	{
		id: 2,
		name: "Conception Graphique",
		link: "conception-graphique",
		icon: <Design />,
		definitions: [
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
		],
		card: [
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe.`,
				icon: <Graph />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
				icon: <Graph />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe.`,
				icon: <Graph />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
				icon: <Graph />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
				icon: <Graph />,
			},
		],
		process: [
			{
				id: 1,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 2,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 3,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 4,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
		],
		option: [
			{
				name: "Identite Visuelle",
				package: [
					{
						name: "CRYSTAL",
						feature: [
							`Création de logos uniques et personnalisés en fonction de la vision, des valeurs, et de la cible de l'entreprise.`,
							`Formats de fichiers fournis : PNG, JPG, SVG, et PDF pour usage numérique et imprimé.`,
							`Logo + Charte graphique`,
						],
						tarif: `85.000 FCFA`,
					},
					{
						name: "EMMERAUDE",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`20 Publications / Mois. (2Publications par jours)`,
						],
						tarif: `120.000 FCFA`,
					},
					{
						name: "DIAMANT",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`40 Publications / Mois`,
							`8 Posts sponsorisés / Mois`,
							`Accompagnement pour des : 4 Direct (Live)/Mois`,
						],
						tarif: `155.000 FCFA`,
					},
				],
			},
			{
				name: "Support de Communication",
				package: [
					{
						name: "Crystal",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`10 Publications / Mois`,
							`3 Posts sponsorisés / Mois`,
							`1 Seances photo (40 photos) & 1e seance Video PRO (Short content video 15s - 30s) / Mois`,
							`Accompagnement pour des : 1 Direct (Live)`,
							`15 Story / Mois`,
						],
						tarif: `Sur Devis`,
					},
				],
			},
			{
				name: "Photographie",
				package: [
					{
						name: "CRYSTAL",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`10 Publications / Mois`,
							`3 Posts sponsorisés / Mois`,
							`1 Seances photo (40 photos) & 1e seance Video PRO (Short content video 15s - 30s) / Mois`,
							`Accompagnement pour des : 1 Direct (Live)`,
							`15 Story / Mois`,
						],
						tarif: `Sur Devis`,
					},
				],
			},
		],
	},

	{
		id: 3,
		name: "Audio visuelle",
		link: "audio-visuelle",
		icon: <Audio />,
		definitions: [
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
		],
		card: [
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe.`,
				icon: <Marketing />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
				icon: <Marketing />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe.`,
				icon: <Marketing />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
				icon: <Marketing />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
				icon: <Marketing />,
			},
		],
		process: [
			{
				id: 1,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 2,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 3,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 4,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
		],
		option: [
			{
				name: "Film Institutionnel",
				package: [
					{
						name: "",
						feature: [
							`Format long (3 à 10 minutes) qui présente l’histoire, les valeurs, et les activités principales de l’entreprise. Conçu pour renforcer l’image de marque et communiquer de manière efficace auprès des investisseurs, clients ou partenaires.`,
							`Scénarisation personnalisée pour raconter l’histoire de l’entreprise.Tournage en haute définition avec un matériel de qualité professionnelle.`,
						],
						tarif: `Sur devis(inclut le tournage sur un ou plusieurs sites, interviews, montage, et animation de base)`,
					},
				],
			},
			{
				name: "Spot Publicitaire",
				package: [
					{
						name: "",
						feature: [
							`Format long (3 à 10 minutes) qui présente l’histoire, les valeurs, et les activités principales de l’entreprise. Conçu pour renforcer l’image de marque et communiquer de manière efficace auprès des investisseurs, clients ou partenaires.`,
							`Scénarisation personnalisée pour raconter l’histoire de l’entreprise.Tournage en haute définition avec un matériel de qualité professionnelle.`,
						],
						tarif: `Sur devis(inclut le tournage sur un ou plusieurs sites, interviews, montage, et animation de base)`,
					},
				],
			},
			{
				name: "Videos Push Produit",
				package: [
					{
						name: "",
						feature: [
							`Format long (3 à 10 minutes) qui présente l’histoire, les valeurs, et les activités principales de l’entreprise. Conçu pour renforcer l’image de marque et communiquer de manière efficace auprès des investisseurs, clients ou partenaires.`,
							`Scénarisation personnalisée pour raconter l’histoire de l’entreprise.Tournage en haute définition avec un matériel de qualité professionnelle.`,
						],
						tarif: `Sur devis(inclut le tournage sur un ou plusieurs sites, interviews, montage, et animation de base)`,
					},
				],
			},
			{
				name: "Videos Publi-Reportage",
				package: [
					{
						name: "",
						feature: [
							`Vidéo de style reportage (2 à 5 minutes) qui combine journalisme et promotion commerciale. Il permet de présenter un produit ou un service sous un angle informatif, en ajoutant des témoignages, des démonstrations, ou des interviews.`,
							`Scénarisation personnalisée pour raconter l’histoire de l’entreprise.Tournage en haute définition avec un matériel de qualité professionnelle.`,
						],
						tarif: `Sur devis(inclut le tournage sur un ou plusieurs sites, interviews, montage, et animation de base)`,
					},
				],
			},
		],
	},

	{
		id: 4,
		name: "Developpement D'Application",
		link: "developpement-d-apllication",
		icon: <Computer />,
		definitions: [
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
		],
		card: [
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe.`,
				icon: <Design />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
				icon: <Design />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe.`,
				icon: <Design />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
				icon: <Design />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
				icon: <Design />,
			},
		],
		process: [
			{
				id: 1,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 2,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 3,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 4,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
		],
		option: [
			{
				name: "PME",
				package: [
					{
						name: "CRYSTAL",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`10 Publications / Mois`,
							`3 Posts sponsorisés / Mois`,
							`1 Seances photo (40 photos) & 1e seance Video PRO (Short content video 15s - 30s) / Mois`,
							`Accompagnement pour des : 1 Direct (Live)`,
							`15 Story / Mois`,
						],
						tarif: `85.000 FCFA`,
					},
					{
						name: "EMMERAUDE",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`20 Publications / Mois. (2Publications par jours)`,
						],
						tarif: `120.000 FCFA`,
					},
					{
						name: "RUBI",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`40 Publications / Mois`,
							`8 Posts sponsorisés / Mois`,
							`Accompagnement pour des : 4 Direct (Live)/Mois`,
						],
						tarif: `155.000 FCFA`,
					},
				],
			},
			{
				name: "Entreprises B2B & Secteur des Services",
				package: [
					{
						name: "CRYSTAL",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`10 Publications / Mois`,
							`3 Posts sponsorisés / Mois`,
							`1 Seances photo (40 photos) & 1e seance Video PRO (Short content video 15s - 30s) / Mois`,
							`Accompagnement pour des : 1 Direct (Live)`,
							`15 Story / Mois`,
						],
						tarif: `85.000 FCFA`,
					},
					{
						name: "EMMERAUDE",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`20 Publications / Mois. (2Publications par jours)`,
						],
						tarif: `120.000 FCFA`,
					},
					{
						name: "RUBI",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`40 Publications / Mois`,
							`8 Posts sponsorisés / Mois`,
							`Accompagnement pour des : 4 Direct (Live)/Mois`,
						],
						tarif: `155.000 FCFA`,
					},
				],
			},
			{
				name: "Organisations Non Gouvernementales (ONG)",
				package: [
					{
						name: "CRYSTAL",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`10 Publications / Mois`,
							`3 Posts sponsorisés / Mois`,
							`1 Seances photo (40 photos) & 1e seance Video PRO (Short content video 15s - 30s) / Mois`,
							`Accompagnement pour des : 1 Direct (Live)`,
							`15 Story / Mois`,
						],
						tarif: `85.000 FCFA`,
					},
					{
						name: "EMMERAUDE",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`20 Publications / Mois. (2Publications par jours)`,
						],
						tarif: `120.000 FCFA`,
					},
					{
						name: "RUBI",
						feature: [
							`Stratégie social media offerte`,
							`Stratégie publicitaire et gestion des publicités.`,
							`40 Publications / Mois`,
							`8 Posts sponsorisés / Mois`,
							`Accompagnement pour des : 4 Direct (Live)/Mois`,
						],
						tarif: `155.000 FCFA`,
					},
				],
			},
		],
	},
];
