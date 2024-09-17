import { Check, Star } from "lucide-react"

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
    ]

    return (
        <div className="bg-neutral-50">
            <div className="py-16 bg-blue-900 text-white mx-20 rounded-3xl">
                <div className="mx-20">
                    <h3 className="font-mono font-semibold text-xl uppercase mb-5 flex items-center">
                        <span className="inline-block w-10 h-0.5 bg-white mr-2"></span> {/* Ligne à gauche */}
                        Nos offres
                    </h3>
                    <p className="mx-auto mt-4 text-xl ">Get started on our free plan and upgrade when you are
                        ready.</p>
                </div>
                <div className="mt-24 mx-32 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 ">
                    <div className="relative p-8  border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold ">Free</h3>
                            <p className="mt-4 flex items-baseline ">
                                <span className="text-5xl font-extrabold tracking-tight">$0</span><span className="ml-1 text-xl font-semibold">/month</span>
                            </p>
                            <p className="mt-6 ">You just want to discover</p>
                            <ul role="list" className="mt-6 space-y-6">
                                <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg><span className="ml-3 ">10 Credits</span></li>
                                <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg><span className="ml-3 ">Generate video (2 credits)</span></li>
                                <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg><span className="ml-3 ">Quizz (1 credits) </span></li>
                            </ul>
                        </div><a
                            className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                            href="/auth/login">Signup for free</a>
                    </div>
                    <div className="relative p-8  border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold ">Pro</h3>
                            <p
                                className="absolute top-0 py-1.5 px-4 bg-emerald-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide  transform -translate-y-1/2">
                                Most popular</p>
                            <p className="mt-4 flex items-baseline ">
                                <span className="text-5xl font-extrabold tracking-tight">$12</span><span className="ml-1 text-xl font-semibold">/month</span>
                            </p>
                            <p className="mt-6 ">You want to learn and have a personal assistant</p>
                            <ul role="list" className="mt-6 space-y-6">
                                <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg><span className="ml-3 ">30 credits</span></li>
                                <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg><span className="ml-3 ">Powered by GPT-4 (more accurate)</span></li>
                                <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg><span className="ml-3 ">Generate video (2 credits)</span></li>
                                <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg><span className="ml-3 ">Quizz (1 credits) </span></li>
                                <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg><span className="ml-3 ">Analytics on the quizz</span></li>
                            </ul>
                        </div><a
                            className="bg-emerald-500 text-white  hover:bg-emerald-600 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                            href="/auth/login">Signup for free</a>
                    </div>
                </div>
            </div>
        </div>
    )
}