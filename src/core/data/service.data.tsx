import {
	Audio,
	Computer,
	Design,
	Graph,
	Marketing,
} from "../components/atoms/icons/service.icon";

import bootstrap5 from '@/app/img/bootstrap5.png'
import figma from '@/app/img/figma.png'
import Javascript from '@/app/img/Javascript logo.png'
import react from '@/app/img/react.png'
import nodejs from '@/app/img/nodejs.png'
import next from '@/app/img/next.png'
import tailwind from '@/app/img/tailwind.png'
import github from '@/app/img/github.png'
import laravel from '@/app/img/laravel.jpg'
import xd from '../../../public/assets/xd.png'



import canva from '../../../public/assets/canva.jpg'
import illustrator from '../../../public/assets/illustrator.png'
import ps from '../../../public/assets/ps.png'
import morflax from '../../../public/assets/morflax.png'

import capcut from '../../../public/assets/Capcut.png'
import ae from '../../../public/assets/Ae.png'
import pr from '../../../public/assets/pr.png'

import { StaticImageData } from "next/image";

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
export type StackProps = {
	id: number;
	stack: StaticImageData;
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
	stack: StackProps[];
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
		stack: [
			{
				id: 1,
				stack:Javascript,
				},
				{
				id: 2,
				stack:react,
				},
				{
				id: 1,
				stack:Javascript,
				},
				{
				id: 1,
				stack:Javascript,
				},
				{
				id: 1,
				stack:Javascript,
				},
				{
				id: 1,
				stack:Javascript,
				},
				{
				id: 1,
				stack:Javascript,
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
						tarif: `Sur Devis`,
					},
					{
						name: "EMMERAUDE",
						feature: [
							`Création de logos uniques et personnalisés en fonction de la vision, des valeurs, et de la cible de l'entreprise.`,
							`Formats de fichiers fournis : PNG, JPG, SVG, et PDF pour usage numérique et imprimé.`,
							`Logo + Charte graphique + Support de communication`,
						],
						tarif: `Sur Devis`,
					},
					{
						name: "DIAMANT",
						feature: [
							`Création de logos uniques et personnalisés en fonction de la vision, des valeurs, et de la cible de l'entreprise.`,
							`Formats de fichiers fournis : PNG, JPG, SVG, et PDF pour usage numérique et imprimé.`,
							`Définition des couleurs, typographies, styles d'images, et règles d’utilisation de l'identité visuelle`,
							`Manuel détaillant l’utilisation cohérente du logo et des éléments visuels sur tous les supports.`,
							`Identité visuelle complète (Logo + Charte Graphique + Supports de communication + Photographies)`,
						],
						tarif: `Sur Devis`,
					},
				],
			},
			{
				name: "Support de Communication",
				package: [
					{
						name: "Crystal",
						feature: [
						    `Conception de cartes de visite, flyers, brochures, bannières et tout autre support de communication.`,
							`Adaptation des visuels pour le print et le digital`,
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
							`Service de photographie pour la mise en valeur des produits, portraits corporate, ou événements de l’entreprise.`,
							`Retouche et optimisation des images pour une utilisation sur divers supports.`,
							
						],
						tarif: `Sur Devis`,
					},
				],
			},
		],
		stack: [
			{
				id: 1,
				stack:morflax,
				},
				{
				id: 2,
				stack:illustrator,
				},
				{
				id: 3,
				stack:ps,
				},
				{
				id: 4,
				stack:canva,
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
							`Tournage en haute définition avec un matériel de qualité professionnelle`,
							`Prises de vue sur site, interviews des dirigeants et employés`,
							`Montage vidéo professionnel avec musique et voix off`,
							`Possibilité d’ajouter des animations ou des graphiques.`,
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
							`Vidéo courte, impactante et percutante`,
							`Scénarisation axée sur le produit ou service à promouvoir`,
							`Tournage en studio ou sur site avec équipe spécialisée`,
							`Montage dynamique avec effets visuels et sonore`,
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
							`Push Produit" sont des vidéos courtes (30 à 90 secondes) spécifiquement conçues pour booster la visibilité d’un produit sur les réseaux sociaux ou dans une campagne digitale. Elles sont axées sur l'aspect promotionnel du produit et sa mise en valeur.`,
							`Tournage en studio ou sur site avec une attention particulière aux détails du produit.`,
							`Intégration de textes et d'effets visuels pour dynamiser le contenu`,
							`Montage rapide et optimisé pour les plateformes comme Instagram, Facebook, ou LinkedIn`,
							`Possibilité de sous-titrer la vidéo pour une diffusion plus large`,
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
							`vidéo de style reportage (2 à 5 minutes) qui combine journalisme et promotion commerciale. Il permet de présenter un produit ou un service sous un angle informatif, en ajoutant des témoignages, des démonstrations, ou des interviews`,
							`Vidéo de type reportage avec interviews, démonstrations, et scènes de contexte`,
							`Prises de vue sur site pour capturer des images authentiques`,
							`Écriture journalistique et promotionnelle`,
							`Montage rapide et optimisé pour les plateformes comme Instagram, Facebook, ou LinkedIn`,
							`Possibilité d'ajouter des graphiques explicatifs et des animations.`,
							
						],
						tarif: `Sur devis(inclut le tournage sur un ou plusieurs sites, interviews, montage, et animation de base)`,
					},
				],
			},
		],
		stack: [
			{
				id: 1,
				stack:pr,
				},
				{
				id: 2,
				stack:ae,
				},
				{
				id: 3,
				stack:capcut,
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
				name: "",
				package: [
					{
						name: "Site web vitrine",
						feature: [
							`Présentation de l’entreprise et ses services de manière professionnelle, avec un design moderne et responsive.`,
							`Pages incluses : Accueil, À propos, Services/Produits, Contact, Blog (facultatif)`,
							`Personnalisation complète selon l’identité visuelle de l’entreprise`,
							`Structure optimisée pour le référencement naturel afin d’améliorer la visibilité en ligne`,
							`Adaptation à tous les écrans (ordinateurs, tablettes, smartphones)`,
							`Mise à jour régulière, suivi des performances et sécurité du site`,
							`1 nom de domaine gratuit pendant 1 an`,
							`Hébergement performant inclus pour 1 an (renouvelable)`,
							`Assistance pendant 6 mois (par email ou chat)`,
						],
						tarif: `Sur devis`,
					},
					{
						name: "Application web e-commerce",
						feature: [
							`Présentation de l’entreprise et ses services de manière professionnelle, avec un design moderne et responsive.`,
							`Pages incluses : Accueil, À propos, Services/Produits, Contact, Blog (facultatif)`,
							`Personnalisation complète selon l’identité visuelle de l’entreprise`,
							`Structure optimisée pour le référencement naturel afin d’améliorer la visibilité en ligne`,
							`Adaptation à tous les écrans (ordinateurs, tablettes, smartphones)`,
							`Mise à jour régulière, suivi des performances et sécurité du site`,
							`1 nom de domaine gratuit pendant 1 an`,
							`Hébergement performant inclus pour 1 an (renouvelable)`,
							`Assistance pendant 6 mois (par email ou chat)`,
						],
						tarif: `Sur devis`,
					},
					{
						name: "Application web/mobile",
						feature: [
							`Présentation de l’entreprise et ses services de manière professionnelle, avec un design moderne et responsive.`,
							`Pages incluses : Accueil, À propos, Services/Produits, Contact, Blog (facultatif)`,
							`Personnalisation complète selon l’identité visuelle de l’entreprise`,
							`Structure optimisée pour le référencement naturel afin d’améliorer la visibilité en ligne`,
							`Adaptation à tous les écrans (ordinateurs, tablettes, smartphones)`,
							`Mise à jour régulière, suivi des performances et sécurité du site`,
							`1 nom de domaine gratuit pendant 1 an`,
							`Hébergement performant inclus pour 1 an (renouvelable)`,
							`Assistance pendant 6 mois (par email ou chat)`,
						],
						tarif: `Sur devis`,
					},
				],
			},
		],
		stack: [
			{
				id: 1,
				stack:Javascript,
				},
				{
				id: 2,
				stack:react,
				},
				{
				id: 3,
				stack:next,
				},
				{
				id: 4,
				stack:tailwind,
				},
				{
				id: 5,
				stack:figma,
				},
				{
				id: 6,
				stack:laravel,
				},
				{
				id: 7,
				stack:github,
				},
				{
				id: 8,
				stack:nodejs,
				},
		],
	},
];
