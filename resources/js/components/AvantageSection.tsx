import { EuroIcon, HeartHandshakeIcon, LightbulbIcon, UsersIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import image2 from '../assets/images/image2.jpg'

export default function AvantageSection() {
    /**
     * ! STATE (état, données) de l'application
     */


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <div className="container mx-auto px-4 py-16 pb-32" style={{ backgroundImage: `url(${image2})` }}>
                <div className="text-start mb-12 px-20">

                    <h3 className="text-blue-900 font-mono font-semibold text-xl uppercase mb-5 flex items-center">
                        <span className="inline-block w-10 h-0.5 bg-blue-900 mr-2"></span> {/* Ligne à gauche */}
                        Nos avantages
                    </h3>
                    <p className="text-slate-800 text-3xl font-semibold mt-4">
                        Découvrez les avantages de travailler avec nous
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="bg-blue-900 text-primary-foreground">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <LightbulbIcon size={40}  />
                                <span className="text-base font-semibold">Une organisation adaptée à la vôtre</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Réception et contrôle des pièces</li>
                                <li>Traitement et demande des pièces manquantes</li>
                                <li>Traitement du dossier</li>
                                <li>Compte rendu ou rapport</li>
                                <li>Traitement retour client et renvoi définitif</li>
                                <li>Relance des clients directs par mail</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-secondary text-secondary-foreground">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <EuroIcon size={40} />
                                <span className="text-base font-semibold">Des coûts compétitifs</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Nos différentes formules vous permettent de réduire vos coûts en matière de charges sociales (salaire, recrutement).</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-blue-900 text-primary-foreground">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <UsersIcon size={40}/>
                                <span className="text-base font-semibold">Un partenaire proche de vous</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Une équipe francophone disponible, qualifiée, flexible, à l'écoute de la moindre de vos demandes</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-secondary text-secondary-foreground">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <HeartHandshakeIcon size={40}/>
                                <span className="text-base font-semibold">Une entreprise engagée</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Une société qui favorise l'insertion/réinsertion professionnelle des jeunes diplômés et jeunes parents.</p>
                            <p className="mt-4">Membre du groupe</p>
                            <img src="/placeholder.svg?height=30&width=150" alt="Delegacompta logo" className="mt-2" />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}