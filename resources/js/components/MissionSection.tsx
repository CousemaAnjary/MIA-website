import { FiBarChart, FiClipboard, FiFileText } from 'react-icons/fi'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


export default function Component() {
    const missions = {
        comptables: [
            "Tenue complète de la comptabilité",
            "Récupération des pièces, traitement des pièces (classement, saisie)",
            "Révision des comptes, lettrage",
            "Rapprochement bancaire",
            "Établissement de situation",
            "Bilan annuel",
        ],
        fiscales: [
            "Préparation de la TVA",
            "Télédéclaration à la demande du client",
            "Préparation de la liasse fiscale",
            "Préparation des annexes et plaquettes",
            "Préparation et envoi DAS2",
        ],
        administratives: [
            "Saisie de données",
            "Service après-vente",
            "Relance client",
            "Support client",
            "Assistanat virtuel",
            "Facturation clients",
            "Autres tâches à la demande",
        ],
    };

    return (
        <div className="py-16 px-40">
            {/* Titre de la section */}
            <div className="text-start mb-12">
                <h3 className="text-blue-900 font-mono font-semibold text-xl uppercase mb-5 flex items-center">
                    <span className="inline-block w-10 h-0.5 bg-blue-900 mr-2"></span> {/* Ligne à gauche */}
                    À propos de nous
                </h3>
                <p className="text-slate-800 text-3xl font-semibold mt-4">
                    Découvrez les missions comptables, <br />fiscales et administratives que nous offrons à nos clients.
                </p>
            </div>

            {/* Grille des missions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Missions comptables */}
                <Card className="hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="text-center">
                        <FiBarChart className="text-blue-700 text-6xl mx-auto mb-4" />
                        <CardTitle className="text-2xl font-semibold text-gray-800 mb-4">Missions comptables</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="text-gray-600 text-left list-disc list-inside">
                            {missions.comptables.map((mission, index) => (
                                <li key={index} className="mb-2">
                                    {mission}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                {/* Missions fiscales */}
                <Card className="hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="text-center">
                        <FiFileText className="text-blue-700 text-6xl mx-auto mb-4" />
                        <CardTitle className="text-2xl font-semibold text-gray-800 mb-4">Missions fiscales</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="text-gray-600 text-left list-disc list-inside">
                            {missions.fiscales.map((mission, index) => (
                                <li key={index} className="mb-2">
                                    {mission}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                {/* Missions administratives */}
                <Card className="hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="text-center">
                        <FiClipboard className="text-blue-700 text-6xl mx-auto mb-4" />
                        <CardTitle className="text-2xl font-semibold text-gray-800 mb-4">Missions administratives</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="text-gray-600 text-left list-disc list-inside">
                            {missions.administratives.map((mission, index) => (
                                <li key={index} className="mb-2">
                                    {mission}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
