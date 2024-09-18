import { FaHeart, FaSeedling, FaHandsHelping } from "react-icons/fa";

export default function ValeurSection() {
    return (
        <div className="bg-blue-50 py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Titre */}
                <div className="text-center mb-12">
                    <h3 className="text-blue-900 font-mono font-semibold text-xl uppercase mb-5 flex justify-center items-center">
                        <span className="inline-block w-10 h-0.5 bg-blue-900 mr-2"></span>
                        Nos valeurs
                    </h3>
                    <p className="text-slate-800 text-3xl font-semibold mt-4">
                        Nos Principes Fondamentaux
                    </p>
                </div>

                {/* Section Valeurs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {/* La passion du client */}
                    <div className="bg-white shadow-lg rounded-xl p-8">
                        <FaHeart className="text-red-500 text-6xl mx-auto mb-4" />
                        <h4 className="text-2xl font-bold text-blue-900 mb-4">La passion du client</h4>
                        <p className="text-slate-700">
                            Placer le client au cœur de nos préoccupations, s'engager à fournir un travail de qualité.
                        </p>
                    </div>

                    {/* L'évolution continue */}
                    <div className="bg-white shadow-lg rounded-xl p-8">
                        <FaSeedling className="text-green-500 text-6xl mx-auto mb-4" />
                        <h4 className="text-2xl font-bold text-blue-900 mb-4">L'évolution continue</h4>
                        <p className="text-slate-700">
                            Apprendre et grandir ensemble, cultiver l'excellence.
                        </p>
                    </div>

                    {/* Le dévouement */}
                    <div className="bg-white shadow-lg rounded-xl p-8">
                        <FaHandsHelping className="text-yellow-500 text-6xl mx-auto mb-4" />
                        <h4 className="text-2xl font-bold text-blue-900 mb-4">Le dévouement</h4>
                        <p className="text-slate-700">
                            Donner du temps, de l'expérience et de la compétence, aller au bout du contrat, aller au bout de soi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
