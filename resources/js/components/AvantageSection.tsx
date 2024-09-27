import { EuroIcon, HeartHandshakeIcon, LightbulbIcon, UsersIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import image2 from '../assets/images/image2.jpg';
import image4 from '../assets/images/image4.png';

export default function AvantageSection() {
    return (
        <>
            <div className="py-16 bg-cover bg-center text-white" style={{ backgroundImage: `url(${image2})` }}>
                <div className=" mx-auto px-4 md:px-6 lg:px-20">
                    {/* Titre de la section */}
                    <div className="text-start mb-12 lg:ms-20">
                        <h3 className="text-blue-900 font-mono font-semibold text-xl uppercase mb-5 flex items-center">
                            <span className="inline-block w-10 h-0.5 bg-blue-900 mr-2"></span> {/* Ligne à gauche */}
                            Nos avantages
                        </h3>
                        <p className="text-slate-800 text-2xl md:text-3xl font-semibold mt-4">
                            Découvrez les avantages de travailler avec nous
                        </p>
                    </div>

                    {/* Grille des avantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                        {/* Avantage 1 */}
                        <Card className="bg-blue-900 text-primary-foreground  ">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <LightbulbIcon size={40} />
                                    <span className="text-base md:text-lg font-semibold">Une organisation adaptée à la vôtre</span>
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

                        {/* Avantage 2 */}
                        <Card className="bg-white text-slate-800 shadow-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <EuroIcon size={40} />
                                    <span className="text-base md:text-lg font-semibold">Des coûts compétitifs</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Nos différentes formules vous permettent de réduire vos coûts en matière de charges sociales (salaire, recrutement)</p>
                            </CardContent>
                        </Card>

                        {/* Avantage 3 */}
                        <Card className="bg-blue-900 text-primary-foreground">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <UsersIcon size={40} />
                                    <span className="text-base md:text-lg font-semibold">Un partenaire proche de vous</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Une équipe francophone disponible, qualifiée, flexible, à l'écoute de la moindre de vos demandes</p>
                            </CardContent>
                        </Card>

                        {/* Avantage 4 */}
                        <Card className="bg-white text-slate-800 shadow-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <HeartHandshakeIcon size={40} />
                                    <span className="text-base md:text-lg font-semibold">Une entreprise engagée</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Une société qui favorise l'insertion/réinsertion professionnelle des jeunes diplômés et jeunes parents.</p>
                                <p className="mt-4 font-medium">Membre du groupe</p>
                                <img src={image4} alt="Delegacompta logo" className="mt-2 w-32 md:w-48" />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
