import { Check, Star } from "lucide-react";

export default function Component() {
    const tiers = [
        {
            name: "BRONZE",
            price: "800€",
            description: [
                "1 collaborateur junior",
                "Saisie et traitement",
                "Nécessite une révision au bout",
                "Français moyen",
            ],
            featured: false,
        },
        {
            name: "SILVER",
            price: "1200€",
            description: [
                "1 collaborateur senior niveau intermédiaire",
                "Traitement et révision avec édition de rapport",
                "Bon niveau de français",
                "Travail autonome sans révision nécessaire",
            ],
            featured: false,
        },
        {
            name: "GOLD",
            price: "1750€",
            description: [
                "1 binôme senior + junior",
                "Traitement et révision",
                "Français excellent",
                "Rapport d'activité inclus",
            ],
            featured: true,
        },
        {
            name: "DIAMOND",
            price: "Sur devis",
            description: [
                "Personnalisé selon vos besoins",
                "Équipe dédiée",
                "Support prioritaire",
                "Solutions sur mesure",
            ],
            featured: false,
        },
    ];

    return (
        <div className="bg-neutral-50">
            <div className="py-16 bg-blue-900 text-white mx-20 rounded-3xl">
                <div className="mx-20">
                    <h3 className="font-mono font-semibold text-xl uppercase mb-5 flex items-center">
                        <span className="inline-block w-10 h-0.5 bg-white mr-2"></span> {/* Ligne à gauche */}
                        Nos offres
                    </h3>
                    <p className="mx-auto mt-4 text-xl">Découvrez nos différentes offres adaptées à vos besoins.</p>
                </div>
                <div className="mt-24 mx-32 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col ${tier.featured ? "border-2 border-emerald-500" : ""
                                }`}
                        >
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold">{tier.name}</h3>
                                {tier.featured && (
                                    <p className="absolute top-0 py-1.5 px-4 bg-emerald-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide transform -translate-y-1/2">
                                        Most popular
                                    </p>
                                )}
                                <p className="mt-4 flex items-baseline">
                                    <span className="text-5xl font-extrabold tracking-tight">{tier.price}</span>
                                </p>
                                <ul role="list" className="mt-6 space-y-6">
                                    {tier.description.map((feature, i) => (
                                        <li key={i} className="flex">
                                            <Check className="flex-shrink-0 w-6 h-6 text-emerald-500" />
                                            <span className="ml-3">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <a
                                className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                                href="#"
                            >
                                Choisir {tier.name}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}