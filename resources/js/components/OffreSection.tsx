import { Check, Star } from "lucide-react"


export default function OffreSection() {
    const tiers = [
        {
            name: "BRONZE",
            price: "800€",
            title: "1 collaborateur junior :",
            description: [
                "Saisie et traitement",
                "Nécessite une révision au bout",
                "Français moyen",
            ],
            featured: false,
        },
        {
            name: "SILVER",
            price: "1200€",
            title: "1 collaborateur senior niveau intermédiaire :",
            description: [
                "Traitement et révision avec édition de rapport",
                "Bon niveau de français",
                "Travail autonome sans révision nécessaire",
            ],
            featured: false,
        },
        {
            name: "GOLD",
            price: "1750€",
            title: "1 binôme senior + junior :",
            description: [

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
      
            <div className="py-16 bg-blue-900  text-white">
                <div className="mx-40">
                    <h3 className="  font-mono font-semibold text-xl uppercase mb-5 flex items-center">
                        <span className="inline-block w-10 h-0.5 bg-white  mr-2"></span> {/* Ligne à gauche */}
                        Nos offres
                    </h3>
                    <p className="text-3xl font-semibold tex mt-4 ">Découvrez nos <br /> différentes offres adaptées à vos besoins</p>
                </div>
                <div className="mt-16 mx-32 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 gap-y-8">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col ${tier.featured ? "border-2 border-yellow-400" : ""
                                }`}
                        >
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold ">{tier.name}</h3>
                                {tier.featured && (
                                    <p className="absolute top-0 py-1.5 px-4 bg-yellow-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide transform -translate-y-1/2">
                                        Populaire
                                    </p>

                                )}
                                <p className="mt-4 flex items-baseline">
                                    <span className="text-5xl font-extrabold font-serif  tracking-tight">{tier.price}</span>
                                </p>
                                <p className="mt-6 font-medium text-base ">{tier.title}</p>

                                <ul role="list" className="mt-6 space-y-6">
                                    {tier.description.map((feature, i) => (
                                        <li key={i} className="flex">
                                            <Check className="flex-shrink-0 w-6 h-6 text-emerald-500" />
                                            <span className="ml-3  underline-offset-4 ">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* <a
                                className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                                href="#"
                            >
                                Choisir {tier.name}
                            </a> */}
                        </div>
                    ))}
                </div>
                <p className="mt-12 text-center text-sm font-medium">
                    1 collaborateur peut absorber 30 à 60 dossiers
                    <br />
                    Licence et logiciel à la charge du client
                </p>
            </div>
    );
}
