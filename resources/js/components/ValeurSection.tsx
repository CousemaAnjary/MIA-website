import help from '../assets/images/help.png';
import passion from '../assets/images/passion.png';
import evolution from '../assets/images/evolution.png';

export default function ValeurSection() {
    return (
        <div className="bg-blue-950 py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                {/* Section Titre */}
                <div className="text-start mb-12">
                    <h3 className="text-white font-mono font-semibold text-xl uppercase mb-5 flex items-center">
                        <span className="inline-block w-10 h-0.5 bg-white mr-2"></span> {/* Ligne à gauche */}
                        Nos valeurs
                    </h3>
                    <p className="text-white text-2xl md:text-3xl font-semibold mt-4">
                        Nos Principes Fondamentaux
                    </p>
                </div>

                {/* Section Valeurs */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    {/* La passion du client */}
                    <div className="bg-white shadow-sm rounded-xl border p-6 md:p-8">
                        <img src={passion} alt="Passion" className="mx-auto w-16 md:w-20 mb-4" />
                        <h4 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4">La passion du client</h4>
                        <p className="text-center font-medium text-base">
                            Placer le client au cœur de nos préoccupations, s'engager à fournir un travail de qualité
                        </p>
                    </div>

                    {/* L'évolution continue */}
                    <div className="bg-white shadow-sm rounded-xl border p-6 md:p-8">
                        <img src={evolution} alt="Évolution" className="mx-auto w-16 md:w-20 mb-4" />
                        <h4 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4">L'évolution continue</h4>
                        <p className="text-center font-medium text-base">
                            Apprendre et grandir ensemble, cultiver l'excellence
                        </p>
                    </div>

                    {/* Le dévouement */}
                    <div className="bg-white shadow-sm rounded-xl border p-6 md:p-8">
                        <img src={help} alt="Dévouement" className="mx-auto w-16 md:w-20 mb-4" />
                        <h4 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4">Le dévouement</h4>
                        <p className="text-center font-medium text-base">
                            Donner du temps, de l'expérience et de la compétence, aller au bout du contrat, aller au bout de soi
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
