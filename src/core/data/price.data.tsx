type PackageProps = {
	name: string;
	feature: string[];
	tarif: string;
};
type OptionsProps = {
	name: string;
	package?: PackageProps[];
};

export interface PriceDataProps {
	offre: string;
	option: OptionsProps[];
}

export const PriceData: PriceDataProps[] = [
	{
		offre: "Community Management",
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
	{
		offre: "Audio Visuels",
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
